import MenuPage from "../components/MenuPage";
import Helmet from "react-helmet";
import BambooLogo from "../assets/images/bambooLogo.png";
import CostcoLogo from "../assets/images/costologo.png";

function Checkout() {
  return (
    <MenuPage>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bamboo :: My Suppliers</title>
        </Helmet>
        <div className="my-supplies__page">
          <div className="my-supplies__page-container">
            <div className="flex-item-left">
              <div className="flex-item-left-title">Jhony's Pizzeria</div>
              <div className="flex-item-left-suppliers-container">
                <div className="flex-item-left-supplier-box">
                  <div className="flex-item-left-supplier-box-image">
                    <img src={CostcoLogo} alt="logo Bamboo" />
                  </div>
                  <div className="flex-item-left-supplier-box-info">
                    <div className="flex-item-left-supplier-box-info-name">
                      Costco
                    </div>
                    <div className="flex-item-left-supplier-box-info-address">
                      Super mega long addres to se how it will integrate in the
                      future
                    </div>
                  </div>
                </div>
                <div className="flex-item-left-supplier-box">
                  <div className="flex-item-left-supplier-box-image">
                    <img src={BambooLogo} alt="logo Bamboo" />
                  </div>
                  <div className="flex-item-left-supplier-box-info">
                    <div className="flex-item-left-supplier-box-info-name">
                      Bamboo
                    </div>
                    <div className="flex-item-left-supplier-box-info-address">
                      Super mega long addres to se how it will integrate in the
                      future
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">Add Supplier</button>
              </div>
            </div>
            <div className="flex-item-right">Right</div>
          </div>
        </div>
      </div>
    </MenuPage>
  );
}

export default Checkout;
