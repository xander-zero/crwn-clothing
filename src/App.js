import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch,Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.componen';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
class App extends React.Component  {
  render(){
    return (
      <div >
        <Header />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}


export default App;
