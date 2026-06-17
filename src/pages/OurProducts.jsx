import { lazy, Suspense } from "react";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import ProductsSection from "../components/ourProducts/ProductsSection";
import { ProductsCategoriesPlaceholder } from "../components/ourProducts/ProductsCategoriesPlaceholder";

const ProductsCategories = lazy(() => import("../components/ourProducts/ProductsCategories"));

const OurProducts = () => {
  const seo = PAGE_SEO.portfolio;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <ProductsSection />
      <Suspense fallback={<ProductsCategoriesPlaceholder />}>
        <ProductsCategories />
      </Suspense>
    </>
  );
};

export default OurProducts;
