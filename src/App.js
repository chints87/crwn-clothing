import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

// const ShopPage = () => {
//   return (
//     <h2>SHOP PAGE</h2>
//   )
// }

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      currentUser : null
    }
    
  }  

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})      
    }) 
    
  } 

  componentWillUnmount(){
    this.unsubscribeFromAuth()
    console.log('am here')
  }
  

  render(){    
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );

  }
}
  


export default App;
