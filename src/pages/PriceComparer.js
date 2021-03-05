import SearchPage from "../components/SearchPage";
import { Helmet } from "react-helmet";
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
            <div className="pricecomparer__page-filter-column">
              CATEGORIES
              <div className="pricecomparer__page-filter-column-card">
                <ul>
                  <li>
                    <div href="#home">
                      {/* <span class="material-icons">face</span> */}🥦 Product
                      <span class="material-icons pricecomparer__page-filter-column-card-faricon">
                        chevron_right
                      </span>
                    </div>
                  </li>
                  <li>
                    <div href="#home">
                      {/* <span class="material-icons">face</span> */}🥖 Bakery
                      <span class="material-icons pricecomparer__page-filter-column-card-faricon">
                        chevron_right
                      </span>
                    </div>
                  </li>
                  <li>
                    <div href="#home">
                      {/* <span class="material-icons">face</span> */}🧊 Frozen
                      <span class="material-icons pricecomparer__page-filter-column-card-faricon">
                        chevron_right
                      </span>
                    </div>
                  </li>
                  <li>
                    <div href="#home">
                      {/* <span class="material-icons">face</span> */}🥖 Deli
                      <span class="material-icons pricecomparer__page-filter-column-card-faricon">
                        chevron_right
                      </span>
                    </div>
                  </li>
                  <li>
                    <div href="#home">
                      {/* <span class="material-icons">face</span> */}🥚 Dairy &
                      Egg
                      <span class="material-icons pricecomparer__page-filter-column-card-faricon">
                        chevron_right
                      </span>
                    </div>
                  </li>
                  <li>
                    <div href="#home">
                      {/* <span class="material-icons">face</span> */}🥩 Meat &
                      SeaFood
                      <span class="material-icons pricecomparer__page-filter-column-card-faricon">
                        chevron_right
                      </span>
                    </div>
                  </li>
                  <li>
                    <div href="#home">
                      {/* <span class="material-icons">face</span> */}
                      🍣 International
                      <span class="material-icons pricecomparer__page-filter-column-card-faricon">
                        chevron_right
                      </span>
                    </div>
                  </li>
                  <li>
                    <div href="#home">
                      {/* <span class="material-icons">face</span> */}🍝 Dry
                      Good & Pasta
                      <span class="material-icons pricecomparer__page-filter-column-card-faricon">
                        chevron_right
                      </span>
                    </div>
                  </li>
                  <li>
                    <div href="#home">
                      {/* <span class="material-icons">face</span> */}🧃
                      Beverage
                      <span class="material-icons pricecomparer__page-filter-column-card-faricon">
                        chevron_right
                      </span>
                    </div>
                  </li>
                  <li>
                    <div href="#home">
                      {/* <span class="material-icons">face</span> */}🥫 Canned
                      Food
                      <span class="material-icons pricecomparer__page-filter-column-card-faricon">
                        chevron_right
                      </span>
                    </div>
                    <div href="#home">
                      {/* <span class="material-icons">face</span> */}🍫 Snacks
                      <span class="material-icons pricecomparer__page-filter-column-card-faricon">
                        chevron_right
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pricecomparer__page-product-column">
              ALL PRODUCTS
            </div>
          </div>
        </div>
      </div>
    </SearchPage>
  );
}

export default PriceComparer;
