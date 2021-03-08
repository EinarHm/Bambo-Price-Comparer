import MenuPage from "../components/MenuPage";
import Helmet from "react-helmet";
function Checkout() {
  return (
    <MenuPage>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bamboo :: Schedule Delivery</title>
        </Helmet>
        <div>Schedule Delivery</div>
      </div>
    </MenuPage>
  );
}

export default Checkout;
