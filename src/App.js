import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ChangePassword from "./component/auth/ChangePassword";
import Login from "./component/auth/Login";
import Client from "./component/client/Client";
import ClientView from "./component/client/ClientView";
import ContactRequest from "./component/contactRequest/ContactRequest";
import ContactRequestView from "./component/contactRequest/ContactRequestView";
import Dashboard from "./component/Dashboard";
import DemoRequest from "./component/demoRequest/DemoRequest";
import DemoRequestView from "./component/demoRequest/DemoRequestView";
import FooterAddress from "./component/footerSetting/FooterAddress";
import FooterLinks from "./component/footerSetting/FooterLinks";
import FooterLogo from "./component/footerSetting/FooterLogo";
import FooterSocialMedia from "./component/footerSetting/FooterSocialMedia";
import HomePageSettings from "./component/HomePageSettings";
import NewsLetters from "./component/NewsLetters";
import Orders from "./component/orders/Orders";
import OrdersView from "./component/orders/OrdersView";
import PaymentSettings from "./component/PaymentSettings";
import ClientAdd from "./component/client/ClientAdd";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/resetPassword" exact component={ChangePassword} />
        <Route path="/client" exact component={Client} />
        <Route path="/client/view/:id" exact component={ClientView} />
        <Route path="/client/add" exact component={ClientAdd} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/orders/view" exact component={OrdersView} />
        <Route path="/contacts/request" exact component={ContactRequest} />
        <Route
          path="/contacts/request/view/:id"
          exact
          component={ContactRequestView}
        />
        <Route path="/demo/request" exact component={DemoRequest} />
        <Route
          path="/demo/request/view/:id"
          exact
          component={DemoRequestView}
        />
        <Route path="/home/settings" exact component={HomePageSettings} />
        <Route path="/address" exact component={FooterAddress} />
        <Route path="/social" exact component={FooterSocialMedia} />
        <Route path="/logo" exact component={FooterLogo} />
        <Route path="/links" exact component={FooterLinks} />
        <Route path="/payment/settings" exact component={PaymentSettings} />
        <Route path="/newsletter" exact component={NewsLetters} />
      </Switch>
    </Router>
  );
}

export default App;
