import PageSEO from "../src/components/PageSEO";
import Header from "../src/components/Navbar/Header";
import Footer from "../src/components/Footer";
import FloatingWhatsApp from "../src/components/ui/FloatingWhatsApp";
import { SITE_NAME } from "../src/constants/site";
import { Link } from "react-router-dom";

export function Page({ is404 }) {
  if (is404) {
    return (
      <>
        <PageSEO
          title={`Page Not Found | ${SITE_NAME}`}
          description="The page you are looking for does not exist or has been moved."
          canonicalPath="/404"
        />
        <Header />
        <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-6xl font-bold text-cDarkBlue">404</h1>
          <p className="mb-2 text-xl text-gray-600">
            Page not found
          </p>
          <p className="mb-8 text-gray-500">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            to="/"
            className="rounded-xl bg-CPurple px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            &larr; Back to Home
          </Link>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </>
    )
  }

  return (
    <>
      <PageSEO
        title={`Internal Server Error | ${SITE_NAME}`}
        description="Something went wrong. Please try again later."
        canonicalPath="/500"
      />
      <Header />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-6xl font-bold text-cDarkBlue">500</h1>
        <p className="mb-2 text-xl text-gray-600">
          Internal Server Error
        </p>
        <p className="mb-8 text-gray-500">
          Something went wrong. Please try again later.
        </p>
        <Link
          to="/"
          className="rounded-xl bg-CPurple px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          &larr; Back to Home
        </Link>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
