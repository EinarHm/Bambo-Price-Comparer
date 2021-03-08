import SearchPage from "../components/SearchPage";
import { Helmet } from "react-helmet";
import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard";
function PriceComparer() {
  return (
    <SearchPage>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bamboo :: Price Comparer</title>
        </Helmet>
        <div className="pricecomparer__page">
          <div className="pricecomparer__page-wrapper row">
            <ProductFilter />
            <div className="pricecomparer__page-product-column">
              ALL PRODUCTS
              <div class="grid-container">
                {/* <div class=" col-sm-12 col-md-6 col-lg-6 col-xl-4">
                  <ProductCard />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SearchPage>
  );
}

export default PriceComparer;
