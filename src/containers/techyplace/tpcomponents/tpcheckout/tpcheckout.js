import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class TpCheckout extends Component {
    render() {
        console.log(this.props.user.cart)

        const cart = this.props.user.cart;
        return (
            <div className="TpCheckout">
                <div className="container pt-4 pb-5">
                    <div className="mt-4 mb-4" style={ cart.length === 0 ? {} : {display : "none"}}>
                        <div className="display-4">No items in Checkout</div>
                        <Link to="/products">
                            <button type="button" className="btn btn-info p-2 mt-2 mb-2">Shop Now</button>
                        </Link>
                    </div>  
                    <div className="row" style={ cart.length === 0 ? {display : "none"} : {}}>
                        <div className="col-md-7">
                            {cart.map((item, key)=>(
                                <div key={key} className="container mb-2 p-2 border border-info">
                                    <div className="row">
                                        <div className="col-5">
                                            <img className="img-fluid" src={item.productimage} alt={item.productname}/>
                                        </div>
                                        <div className="col-7">
                                            <h3 className="h3 mb-2">{item.productname}</h3>
                                            <div><span className="text-muted">Quantity : </span>{item.quantity}</div>
                                            <div><span className="text-muted">Total : </span>{item.quantity * parseInt(item.productprice.replace(',',""))}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}                         
                        </div>
                        <div className="col-md-5">
                            <div className="border border-info p-3">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="prepend-1" style={{width : "100px"}}>Name</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Full Name" aria-label="Full Name" aria-describedby="prepend-1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="prepend-1" style={{width : "100px"}}>Mobile</span>
                                    </div>
                                    <input type="tel" className="form-control" placeholder="Mobile" aria-label="Full Name" aria-describedby="prepend-1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="prepend-1" style={{width : "100px"}}>Email</span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Email" aria-label="Full Name" aria-describedby="prepend-1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="prepend-1" style={{width : "100px"}}>Address</span>
                                    </div>
                                    <textarea className="form-control" placeholder="Address" aria-label="Full Name" aria-describedby="prepend-1"/>
                                </div>

                                <Link to="/checkout">
                                    <button type="button" className="btn btn-primary p-2">
                                        Proceed to Payment
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.userReducer
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TpCheckout)
