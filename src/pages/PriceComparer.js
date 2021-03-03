import logo from "../assets/images/logo.svg";

function PriceComparer() {
  return (
    <div className="PriceComparer">
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
          Price Comparer
        </a>
      </header>
    </div>
  );
}

export default PriceComparer;
