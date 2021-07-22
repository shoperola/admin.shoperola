import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ChangePassword from './component/auth/ChangePassword';
import Login from './component/auth/Login';
import Client from './component/Client';
import ClientView from './component/ClientView';
import ContactRequest from './component/ContactRequest';
import ContactRequestView from './component/ContactRequestView';
import Dashboard from './component/Dashboard';
import DemoRequest from './component/DemoRequest';
import FooterAddress from './component/FooterAddress';
import FooterLinks from './component/FooterLinks';
import FooterLogo from './component/FooterLogo';
import FooterSocialMedia from './component/FooterSocialMedia';
import HomePageSettings from './component/HomePageSettings';
import NewsLetters from './component/NewsLetters';
import Orders from './component/Orders';
import OrdersView from './component/OrdersView';
import PaymentSettings from './component/PaymentSettings';

function App() {
  return (
    <Router>
 
      <Switch>
         <Route path="/" exact component={Dashboard}/>
         <Route path="/login" exact component={Login}/>
         <Route path="/resetPassword" exact component={ChangePassword}/>
         <Route path="/client" exact component={Client}/>
         <Route path="/client/view" exact component={ClientView}/>
         <Route path="/orders" exact component={Orders}/>
         <Route path="/orders/view" exact component={OrdersView}/>
         <Route path="/contacts/request" exact component={ContactRequest}/>
         <Route path="/contacts/request/view" exact component={ContactRequestView}/>
         <Route path="/demo/request" exact component={DemoRequest}/>
         <Route path="/home/settings" exact component={HomePageSettings}/>
         <Route path="/address" exact component={FooterAddress}/>
         <Route path="/social" exact component={FooterSocialMedia}/>
         <Route path="/logo" exact component={FooterLogo}/>
         <Route path="/links" exact component={FooterLinks}/>
         <Route path="/payment/settings" exact component={PaymentSettings}/>
         <Route path="/newsletter" exact component={NewsLetters}/>
        
      </Switch>
    </Router>
  );
}

export default App;
