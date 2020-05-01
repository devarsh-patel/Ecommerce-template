import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Popup from 'reactjs-popup';

import userAction from '../../../../actions/user_action';

class TpCart extends Component {

    state = {
        rerender : false
    }

    removeCart = (cart, item) => {
        for(let i=0;i<cart.length;i++){
            if(cart[i].productid == item.productid){
                cart.splice(i,1)
            }
        }
        return cart;
    }

    remove = (user, item) => {
        this.props.userAction({
            ...user,
            "cart" : this.removeCart(user.cart, item)
        })
    }

    render() {
        if(this.props.user.urlpathname !== window.location.pathname){
            this.props.userAction({...this.props.user, "urlpathname" : window.location.pathname})
        }
        return (
            <div className="TpCart">
                <div className="container pt-3">
                    <main>
                        <h1 className="mb-sm-4 text-center">My Cart</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mauris sed massa vehicula lobortis. Fusce at justo ante. Morbi mollis urna a luctus efficitur. Aenean consectetur ipsum nec pellentesque euismod. Nullam mollis, massa non porttitor luctus, ipsum mauris consectetur ex, non facilisis augue turpis vitae orci. Aenean eu mattis quam.</p>
                        <div className="row">
                            {this.props.user.cart.map((item,key)=>(
                                <div key={key} className="col-12 col-md-6 col-lg-4 mb-3">
                                    <figure className="figure">
                                    <Link to={{
                                        pathname : `/singleproducts/${item.productid}`,
                                        state : {
                                            data : item
                                        }
                                    }}>
                                        <img 
                                            src={item.productimage} 
                                            className="figure-img img-fluid img-thumbnail" 
                                            alt="Figure"
                                            style={{height : "250px"}}/>
                                    </Link>
                                    <figcaption className="figure-caption">
                                        <h5>{item.productname}</h5>
                                        <h6 className="text-muted">Rs.{item.productprice}</h6>
                                        <p>{item.productdesc}</p>
                                    </figcaption>
                                    </figure>
                                    <div className="p-2 bg-light mt-1"><h6 className="d-inline">Quantity :</h6> {item.quantity}</div>
                                    <div className="p-2 bg-light mt-1"><h6 className="d-inline">Total : </h6>Rs. {item.quantity * parseInt(item.productprice.replace(',',""))}</div>
                                    
                                    <Popup trigger={<button className="btn btn-danger mt-2"> Remove </button>} position="right center">
                                        <div className="text-dark d-block">Do you really want to remove the product ?
                                        <button
                                            type="button p-0"
                                            className="btn btn-danger d-inline"
                                            onClick={()=> this.remove(this.props.user, item)}
                                        >Yes</button>
                                        </div>
                                        <small className="text-muted d-block">Else click outside the box...</small>
                                    </Popup>
                                </div>
                            ))}
                        </div>
                    </main>
                    <Link 
                        to="/checkout"
                        className="btn btn-info mt-2 mb-3"
                        style={this.props.user.cart.length === 0 ? {display : "none"} : {}}>Proceed to Checkout</Link>
                    <Link 
                        to="/products"
                        className="btn btn-danger mb-3"
                        style={this.props.user.cart.length === 0 ? {} : {display : "none"}}>Shop Now!!!</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.userReducer
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userAction : userAction
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TpCart)
