import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ScheduleDelivery from "./pages/ScheduleDelivery";
import MySuppliers from "./pages/mySuppliers";
import MyShoppingList from "./pages/myShoppingLIst";
import MyAccount from "./pages/myAccount";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/schedule-delivery" component={ScheduleDelivery} />
        <Route path="/my-suppliers" component={MySuppliers} />
        <Route path="/my-shopping-list" component={MyShoppingList} />
        <Route path="/my-account" component={MyAccount} />
        <Route paht="/auth" component={Login} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
