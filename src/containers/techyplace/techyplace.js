import React, { Component } from 'react'

import './techyplace.css';
import TpHeader from './tpheader/tpheader';
import TpFooter from './tpfooter/tpfooter';
import { Switch, Route } from 'react-router-dom';
import TpHome from './tpcomponents/tphome/tphome';
import TpProduct from './tpcomponents/tpproduct/tpproduct';
import TpSingleProduct from './tpcomponents/tpsingleproduct/tpsingleproduct';
import TpCart from './tpcomponents/tpcart/tpcart';
import TpCheckout from './tpcomponents/tpcheckout/tpcheckout';

class TechyPlace extends Component {
    render() {
        // console.log(this.props.data)
        return (
            <div className="TechyPlace">
                <TpHeader data={this.props.data}/>
                    <Switch>
                        <Route path="/" exact component={()=>(<TpHome data={this.props.data}/>)}/>
                        <Route path="/products" exact component={TpProduct}/>
                        <Route path="/singleproducts/:id" exact component={TpSingleProduct}/>
                        <Route path="/cart" exact component={TpCart}/>
                        <Route path="/checkout" exact component={TpCheckout}/>                        
                    </Switch>
                <TpFooter data={this.props.data}/>
            </div>
        )
    }
}

export default TechyPlace;