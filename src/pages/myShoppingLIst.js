import MenuPage from "../components/MenuPage";
import Helmet from "react-helmet";
function Checkout() {
  return (
    <MenuPage>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bamboo :: My Shopping List</title>
        </Helmet>
        <div>My Shopping List</div>
      </div>
    </MenuPage>
  );
}

export default Checkout;
