import { Helmet } from "react-helmet-async";
import { DEFAULT_OG_IMAGE, SITE_URL, SITE_NAME } from "../config/seo"

const PageSEO = ({ title, description, canonicalPath, ogImage = DEFAULT_OG_IMAGE, children }) => {
  const url = canonicalPath ? `${SITE_URL}${canonicalPath}` : SITE_URL

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
      <meta name="theme-color" content="#1E4FD4" />
      <link rel="canonical" href={url} />
      {children}
    </Helmet>
  )
}

export default PageSEO
