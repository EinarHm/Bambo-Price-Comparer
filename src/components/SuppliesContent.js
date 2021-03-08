import BambooLogo from "../assets/images/bambooLogo.png";
import CostcoLogo from "../assets/images/costologo.png";

const SuppliesContent = (props) => {
  return (
    <div className="supplies-content">
      <div className="supplies-content-title">Jhony's Pizzeria</div>
      <div className="supplies-content-suppliers-container">
        <div className="supplies-content-supplier-box">
          <div className="supplies-content-supplier-box-image">
            <img src={CostcoLogo} alt="logo Bamboo" />
          </div>
          <div className="supplies-content-supplier-box-info">
            <div className="supplies-content-supplier-box-info-name">
              Costco
            </div>
            <div className="supplies-content-supplier-box-info-address">
              Super mega long addres to se how it will integrate in the future
            </div>
          </div>
        </div>
        <div className="supplies-content-supplier-box">
          <div className="supplies-content-supplier-box-image">
            <img src={BambooLogo} alt="logo Bamboo" />
          </div>
          <div className="supplies-content-supplier-box-info">
            <div className="supplies-content-supplier-box-info-name">
              Bamboo
            </div>
            <div className="supplies-content-supplier-box-info-address">
              Super mega long addres to se how it will integrate in the future
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Add Supplier</button>
      </div>
    </div>
  );
};

export default SuppliesContent;
