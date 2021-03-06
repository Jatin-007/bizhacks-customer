import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PartnerMain from './components/PartnerMain';
import BestbuyRewards from './components/BestbuyRewards';
import Rewards from './components/Rewards';
import Login from './components/Login';
import Transaction from './components/Transaction';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import { database } from './firebase/config'

class App extends Component {
  constructor(props){
    super(props);
      this.state={
        val: "",
        isLoginOpen: true,
        isRegisterOpen: false
      };
  }
  componentDidMount() {
    database.ref('/Vendor').on('value',(snapshot) => {
      this.setState({
        val: snapshot.val()
      });
 })
}; 

  render() {
    return (
      <div>
        {
          this.state.val &&

          <Navbar img={this.state.val.image}/>
        }
        <BrowserRouter>
        <div>
          <Route exact path="/" component= {PartnerMain}/>
          <Route exact path="/rewards" component={Rewards}/>
          <Route exact path="/login" component= {Login}/>
          <Route exact path="/bestbuy" component= {BestbuyRewards} test={this.state.val.point}/>
          <Route exact path="/productDetails" component= {ProductDetail}/>
          <Route exact path="/Transaction" component= {Transaction}/>
          </div>
        </BrowserRouter>
        <div className="root-container">
 
          </div>
      </div>
      
    );
  }
}

export default App;
