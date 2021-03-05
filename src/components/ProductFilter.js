import React from "react";
import { withRouter } from "react-router-dom";

const ProductFilter = (props) => {
  return (
    <div className="product-filter">
      CATEGORIES
      <div className="product-filter-card">
        <ul>
          <li>
            <div href="#home">
              {/* <span class="material-icons">face</span> */}🥦 Product
              <span class="material-icons product-filter-card-faricon">
                chevron_right
              </span>
            </div>
          </li>
          <li>
            <div href="#home">
              {/* <span class="material-icons">face</span> */}🥖 Bakery
              <span class="material-icons product-filter-card-faricon">
                chevron_right
              </span>
            </div>
          </li>
          <li>
            <div href="#home">
              {/* <span class="material-icons">face</span> */}🧊 Frozen
              <span class="material-icons product-filter-card-faricon">
                chevron_right
              </span>
            </div>
          </li>
          <li>
            <div href="#home">
              {/* <span class="material-icons">face</span> */}🥖 Deli
              <span class="material-icons product-filter-card-faricon">
                chevron_right
              </span>
            </div>
          </li>
          <li>
            <div href="#home">
              {/* <span class="material-icons">face</span> */}🥚 Dairy & Egg
              <span class="material-icons product-filter-card-faricon">
                chevron_right
              </span>
            </div>
          </li>
          <li>
            <div href="#home">
              {/* <span class="material-icons">face</span> */}🥩 Meat & SeaFood
              <span class="material-icons product-filter-card-faricon">
                chevron_right
              </span>
            </div>
          </li>
          <li>
            <div href="#home">
              {/* <span class="material-icons">face</span> */}
              🍣 International
              <span class="material-icons product-filter-card-faricon">
                chevron_right
              </span>
            </div>
          </li>
          <li>
            <div href="#home">
              {/* <span class="material-icons">face</span> */}🍝 Dry Good &
              Pasta
              <span class="material-icons product-filter-card-faricon">
                chevron_right
              </span>
            </div>
          </li>
          <li>
            <div href="#home">
              {/* <span class="material-icons">face</span> */}🧃 Beverage
              <span class="material-icons product-filter-card-faricon">
                chevron_right
              </span>
            </div>
          </li>
          <li>
            <div href="#home">
              {/* <span class="material-icons">face</span> */}🥫 Canned Food
              <span class="material-icons product-filter-card-faricon">
                chevron_right
              </span>
            </div>
            <div href="#home">
              {/* <span class="material-icons">face</span> */}🍫 Snacks
              <span class="material-icons product-filter-card-faricon">
                chevron_right
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(ProductFilter);
