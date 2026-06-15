import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

const CJS_IMPORTS = [
  { pkg: 'react-router-dom', alias: '__rr' },
  { pkg: 'react-helmet-async', alias: '__ha' },
]

let _ssrBuild = false

export default defineConfig({
  plugins: [
    react(),
    vike(),
    {
      name: 'ssr-cjs-compat',
      enforce: 'post',
      configResolved(config) {
        _ssrBuild = config.command === 'build'
      },
      transform(code, id, options) {
        if (!options?.ssr) return
        if (_ssrBuild) return
        if (id.includes('node_modules')) return
        const needsTransform = CJS_IMPORTS.some(({ pkg }) =>
          code.includes(`from "${pkg}"`) || code.includes(`from '${pkg}'`),
        )
        if (!needsTransform) return

        let result = code
        const varDecl = []
        for (const { pkg, alias } of CJS_IMPORTS) {
          const re = new RegExp(
            `import\\s*\\{([^}]+)\\}\\s*from\\s*['"]${pkg}['"]\\s*;?`,
            'g',
          )
          result = result.replace(re, (match, names) => {
            varDecl.push(`const {${names}} = ${alias}`)
            return `import ${alias} from "${pkg}"`
          })
        }
        if (varDecl.length) {
          result += '\n' + varDecl.join('\n')
          return { code: result }
        }
      },
    },
  ],
  base: '/',
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
})
