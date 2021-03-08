import MenuPage from "../components/MenuPage";
import Helmet from "react-helmet";
import SuppliesContent from "../components/SuppliesContent";
import SuppliesMap from "../components/SuppliesMap";

function MySuppliers() {
  return (
    <MenuPage>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bamboo :: My Suppliers</title>
        </Helmet>
        <div className="my-supplies__page">
          <div className="my-supplies__page-container">
            <SuppliesContent />
            <SuppliesMap />
          </div>
        </div>
      </div>
    </MenuPage>
  );
}

export default MySuppliers;
