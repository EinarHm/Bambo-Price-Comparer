import logo from "../assets/images/logo.svg";
import SearchPage from "../components/SearchPage";
function Checkout() {
  return (
    <SearchPage>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Checkout
          </a>
        </header>
      </div>
    </SearchPage>
  );
}

export default Checkout;
