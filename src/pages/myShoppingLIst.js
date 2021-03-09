import MenuPage from "../components/MenuPage";
import Helmet from "react-helmet";
function MyShoppingList() {
  return (
    <MenuPage>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bamboo :: My Shopping List</title>
        </Helmet>
        <div className="shopping-list__page">
          <div className="shopping-list__page-container">
            <div className="shopping-list__page-container-title">
              My Shopping List
            </div>
            <div className="shopping-list__page-products">
              <table>
                <tr className="table-header">
                  <th className="product-name">Product Name</th>
                  <th>Brand</th>
                  <th>Size</th>
                  <th>Supplier</th>
                  <th>Shopper Notes</th>
                  <th></th>
                </tr>
                <tr className="table-element">
                  <th className="product-name">Thai Holy Bassil</th>
                  <th>-</th>
                  <th>Bunch</th>
                  <th>Costco</th>
                  <th>
                    This is a test when you overflow the shopper notes with a
                    lot but a lot of stuff like fresh salmon at 8:00 in costco
                    and please Kosher
                  </th>
                  <th>
                    <button className="btn btn-danger btn-icon-small">
                      <span className="material-icons ">
                        remove_circle_outline
                      </span>
                    </button>
                  </th>
                </tr>
              </table>
              <button className="btn btn-primary">Add Product</button>
            </div>
          </div>
        </div>
      </div>
    </MenuPage>
  );
}

export default MyShoppingList;
