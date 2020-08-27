import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import './App.css';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument, addCollectionsAndDocuments } from './firebase/firebase.utils';
import { setCurrentUser} from './redux/user/user-actions';
import { selectCurrentUser} from './redux/user/user-selector';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';
// const ShopPage = () => {
//   return (
//     <h2>SHOP PAGE</h2>
//   )
// }

class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state ={
  //     currentUser : null
  //   }
    
  // }  

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser, collectionsArray} = this.props;
    console.log('Mount')
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
         const userRef = await createUserProfileDocument(userAuth)
         
         userRef.onSnapshot(snapShot => {
           setCurrentUser({
               id: snapShot.id,
               ...snapShot.data()
             })
           }, () => console.log(this.state.currentUser))
         
        setCurrentUser(userAuth, () => console.log(this.state.currentUser));
        // Since firestore is giving ids and routename, we will remove from our array
        addCollectionsAndDocuments('collections', collectionsArray.map(({title, items}) => ({title,items})))
      } else {
        setCurrentUser(userAuth, () => console.log(this.state.currentUser))
      }
      
      // this.setState({currentUser: user})     
      // console.log(user); 
    }) 
    
  } 

  componentWillUnmount(){
    console.log('Unmount')
    this.unsubscribeFromAuth()
   
  }
  

  render(){    
    console.log("App Rendering");
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render ={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage/>  } />
        </Switch>
      </div>
    );

  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);

// 
// unsuscribefromAuth = null
// 
// 
// componentDidMount{
//   this.unsusscribefromAuth = auth.onAuthStateChanged(user => {
//     this.setState{()}
//   })
// }