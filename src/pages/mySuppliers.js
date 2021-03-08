import MenuPage from "../components/MenuPage";
import Helmet from "react-helmet";
function Checkout() {
  return (
    <MenuPage>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bamboo :: My Suppliers</title>
        </Helmet>
        <div>My Suppliers</div>
      </div>
    </MenuPage>
  );
}

export default Checkout;
