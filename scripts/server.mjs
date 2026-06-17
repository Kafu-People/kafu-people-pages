import { createServer } from 'node:http'
import { readFileSync, statSync } from 'node:fs'
import { resolve, extname, join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { brotliCompressSync, gzipSync } from 'node:zlib'
import { renderPage } from 'vike/server'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

await import(pathToFileURL(join(root, 'dist/server/entry.mjs')).href)

const MIME = {
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
}

const CACHE_IMMUTABLE = 'public, max-age=31536000, immutable'
const CACHE_NO_CACHE = 'no-cache'

const IMMUTABLE_EXTS = new Set([
  '.js', '.css', '.png', '.jpg', '.jpeg', '.webp', '.svg',
  '.ico', '.woff', '.woff2', '.mp4', '.webm',
])

function getAcceptedEncoding(accept) {
  if (!accept) return null
  if (accept.includes('br')) return 'br'
  if (accept.includes('gzip')) return 'gzip'
  return null
}

function compress(buf, encoding) {
  if (encoding === 'br') return brotliCompressSync(buf)
  if (encoding === 'gzip') return gzipSync(buf)
  return buf
}

const PORT = process.env.PORT || 3001

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')
  const filePath = join(root, 'dist/client', url.pathname.slice(1))

  try {
    const stat = statSync(filePath)
    if (stat.isFile()) {
      const ext = extname(filePath)
      if (MIME[ext]) res.setHeader('Content-Type', MIME[ext])
      if (IMMUTABLE_EXTS.has(ext)) {
        res.setHeader('Cache-Control', CACHE_IMMUTABLE)
      } else {
        res.setHeader('Cache-Control', CACHE_NO_CACHE)
      }

      const raw = readFileSync(filePath)
      const encoding = getAcceptedEncoding(req.headers['accept-encoding'])
      if (encoding && ext !== '.svg') {
        const compressed = compress(raw, encoding)
        res.setHeader('Content-Encoding', encoding)
        res.setHeader('Content-Length', compressed.length)
        res.end(compressed)
      } else {
        res.setHeader('Content-Length', raw.length)
        res.end(raw)
      }
      return
    }
  } catch { }

  const pageContext = await renderPage({ urlOriginal: req.url })
  const { httpResponse } = pageContext
  if (httpResponse) {
    res.writeHead(200, { 'Content-Type': httpResponse.contentType })
    res.end(httpResponse.body)
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
}).listen(PORT, () => {
  console.log(`Production server running on http://localhost:${PORT}`)
})
