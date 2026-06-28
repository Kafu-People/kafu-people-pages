import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getCaseByProductId } from "../../data/portfolioCases";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_CATEGORY_ALL,
  PORTFOLIO_PRODUCTS,
} from "../../data/portfolioProducts";

const ProductsCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(PORTFOLIO_CATEGORY_ALL);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === PORTFOLIO_CATEGORY_ALL) {
      return PORTFOLIO_PRODUCTS;
    }
    return PORTFOLIO_PRODUCTS.filter(
      (product) => product.category === selectedCategory,
    );
  }, [selectedCategory]);

  return (
    <div className="box-border w-full max-w-[100vw] overflow-x-hidden p-4 font-inter sm:p-6 md:p-8 lg:px-16 xl:px-24">
      <div className="mb-4 block lg:hidden">
        <h3 className="m-6 mb-2 text-lg font-bold text-cDarkBlue">Categories :</h3>
        <div className="no-scrollbar flex gap-4 overflow-x-auto">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`my-4 min-h-[44px] flex-shrink-0 rounded-lg px-4 py-2 text-sm font-medium shadow-md ${
                selectedCategory === category
                  ? "bg-CPurple text-cWhite"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col items-start gap-4 lg:flex-row lg:gap-8">
        <div className="box-border w-full shrink-0 rounded-lg p-4 lg:w-64 xl:w-72">
          <div className="hidden lg:block ">
            <h3 className="mb-4 text-lg font-bold text-cDarkBlue">Categories:</h3>
            {PORTFOLIO_CATEGORIES.map((category) => (
              <label
                key={category}
                className="mb-3 flex cursor-pointer items-center gap-2 border-b border-cDarkBlue pb-2 pt-3 transition hover:shadow-lg"
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                  className="form-radio accent-cDarkBlue"
                />
                <span className="text-base font-semibold text-cBlack">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="min-w-0 w-full flex-1">
          <div className="space-y-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.product_id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
                className="flex w-full min-w-0 max-w-full flex-col overflow-hidden rounded-2xl bg-cWhite shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-CPurple md:flex-row md:items-stretch"
              >
                <div className="group relative h-48 w-full shrink-0 sm:h-56 md:h-auto md:w-56 lg:w-64 xl:w-72">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  {(() => {
                    const caseStudy = getCaseByProductId(product.product_id);
                    if (!product?.url && !caseStudy) return null;
                    return (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100" />
                        <div className="pointer-events-none relative flex translate-y-1 flex-wrap items-center justify-center gap-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                          {caseStudy ? (
                            <>
                              <Link
                                to={`/portfolio/${caseStudy.slug}`}
                                className="min-h-[44px] rounded-xl bg-CPurple px-4 py-2.5 font-extrabold text-white shadow-2xl ring-2 ring-white/90 transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-white"
                              >
                                Case Study
                              </Link>
                              {product.url && (
                                <a
                                  href={product.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="min-h-[44px] rounded-xl bg-white px-4 py-2.5 font-extrabold text-CPurple shadow-2xl ring-2 ring-white/90 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white"
                                >
                                  Live Site →
                                </a>
                              )}
                            </>
                          ) : (
                            product.url && (
                              <a
                                href={product.url}
                                target="_blank"
                                rel="noreferrer"
                                className="min-h-[44px] rounded-xl bg-CPurple px-5 py-2.5 font-extrabold text-white shadow-2xl ring-2 ring-white/90 transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-white"
                              >
                                Visit Live Site
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    );
                  })()}
                  {!getCaseByProductId(product.product_id) && (
                    <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
                      Reference
                    </span>
                  )}
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-6">
                  <h3 className="mb-2 text-xl font-bold text-cDarkBlue sm:text-2xl">
                    {product.name}
                  </h3>
                  <p className="text-base leading-relaxed text-CPurple sm:text-lg">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategories;
