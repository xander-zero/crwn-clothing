import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch,Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.componen';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {setCurrentUser} from './redux/user/user.action'
class App extends React.Component  {
  render(){
    return (
      <div >
        <Header />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
        <Route  path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}


export default App;
