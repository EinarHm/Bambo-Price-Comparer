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
        Schedule Delivery
      </div>
    </MenuPage>
  );
}

export default Checkout;
