import { renderPage } from "vike/server"

export default async function handler(req, res) {
  const pageContextInit = { urlOriginal: req.url }
  const pageContext = await renderPage(pageContextInit)

  const { httpResponse } = pageContext
  if (!httpResponse) {
    res.statusCode = 200
    res.end()
    return
  }

  const { body, contentType } = httpResponse
  res.statusCode = 200
  res.setHeader("Content-Type", contentType)
  res.end(body)
}

export const config = {
  runtime: "nodejs20.x",
}
