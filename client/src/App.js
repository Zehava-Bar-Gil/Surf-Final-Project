import React from 'react';
import './App.css';
import store from './shop/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SigninPage from './pages/signin';
import Shop from './shop/index'
import ProductScreen from './shop/screens/ProductScreen';
import CartScreen from './shop/screens/CartScreen';
import OrderScreen from './shop/screens/OrderScreen';
import ShippingScreen from './shop/screens/ShippingScreen';
import PaymentScreen from './shop/screens/PaymentScreen';
import UserListScreen from './shop/screens/UserListScreen'
import HomeScreen from './shop/screens/HomeScreen';


// import ProductListScreen from './shop/screens/ProductListScreen'

const App = () => {
  return <Router>
    <Provider store={store}>
      <Switch>
       
        <Route path='/signin' component={SigninPage} />
      
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/userlist' component={UserListScreen} />
        <Route path='/search/:keyword' component={HomeScreen} exact />
        <Route path='/page/:pageNumber' component={HomeScreen} exact />
        <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
        />
        

        <Route path='/' component={Home} exact />  
      </Switch>
      
    </Provider>

  </Router>
}

export default App;
