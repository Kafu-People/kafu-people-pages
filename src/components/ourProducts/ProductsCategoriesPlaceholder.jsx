import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PRODUCTS,
} from "../../data/portfolioProducts";

const ITEMS_PER_PAGE = 3;
const defaultCategory = PORTFOLIO_CATEGORIES[0];

const previewProducts = PORTFOLIO_PRODUCTS.filter(
  (product) => product.category === defaultCategory,
).slice(0, ITEMS_PER_PAGE);

export function ProductsCategoriesPlaceholder() {
  return (
    <div className="box-border w-full max-w-[100vw] overflow-x-hidden p-4 font-inter sm:p-6 md:p-8 lg:px-16 xl:px-24">
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col items-start gap-4 lg:flex-row lg:gap-8">
        <div className="box-border w-full shrink-0 rounded-lg p-4 lg:w-64 xl:w-72">
          <h3 className="mb-4 text-lg font-bold text-cDarkBlue">Categories:</h3>
          {PORTFOLIO_CATEGORIES.map((category) => (
            <div
              key={category}
              className="mb-3 border-b border-cDarkBlue pb-2 pt-3 text-base font-semibold text-cBlack"
            >
              {category}
            </div>
          ))}
        </div>

        <div className="min-w-0 w-full flex-1">
          <div className="space-y-8">
            {previewProducts.map((product) => (
              <div
                key={product.product_id}
                className="flex w-full min-w-0 max-w-full flex-col overflow-hidden rounded-2xl bg-cWhite shadow-lg md:flex-row md:items-stretch"
              >
                <div className="h-48 w-full shrink-0 sm:h-56 md:h-auto md:w-56 lg:w-64 xl:w-72">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-6">
                  <h3 className="mb-2 text-xl font-bold text-cDarkBlue sm:text-2xl">
                    {product.name}
                  </h3>
                  <p className="text-base leading-relaxed text-CPurple sm:text-lg">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
