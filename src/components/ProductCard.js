import React from "react";
import Avocado from "../assets/images/avocado.jpg";

const ProductCard = (props) => {
  return (
    <div className="details_List">
      <div className="with-image">
        <img src={Avocado} alt="imagen principal" />
      </div>

      <div className="details_inner">
        <div className="details_inner_info">
          <h2>Aguacate</h2>
          <div className="details_inner_price">
            <span className="price">25</span>
            <span className="unit">unidad</span>
          </div>
        </div>
        <div className="details_inner_desc">
          <p className="product-description">Product description</p>
        </div>
        <div className="row add-item-wrapper">
          <div>
            <div className="snipcart-add-item btn-not-filled">Detalles</div>
          </div>
          <div>
            <button className="snipcart-add-item btn-filled">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
