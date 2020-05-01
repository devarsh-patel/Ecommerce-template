import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactImageMagnify from 'react-image-magnify';

import './tpsingleproduct.css';
import userAction from '../../../../actions/user_action';
import { Link } from 'react-router-dom';

export class TpSingleProduct extends Component {

    state = {
        cart : this.props.user.cart,
        addToCart : "Add To Cart",
        "number" : 1
    }

    render() {

        const addProductToCart = (item, qt) => {
            let crt = this.state.cart;
            let flag = true;
            for(let i=0;i<crt.length; i++){
                if(crt[i].productid === item.productid){
                    flag = false;
                    break;
                }
            }
            if(flag){    
                let temp = { ...this.props.user , "cart" : [...this.props.user.cart, { ...item, "quantity" : qt}]};
                this.props.userAction(temp);
                this.setState({
                    "cart" : [...this.props.user.cart, { ...item, "quantity" : qt}]
                })
            }
        }
        // console.log(this.props.location.state.item)
        // console.log(this.props.user);
        if(this.props.user.urlpathname !== window.location.pathname){
            this.props.userAction({...this.props.user, "urlpathname" : window.location.pathname})
        }
        
        for(let i=0;i<this.props.user.cart.length; i++){
            if(this.props.user.cart[i].productid === this.props.location.state.data.productid){
                if(this.state.addToCart === "Add To Cart"){
                    this.setState({
                        addToCart : "Added To Cart"
                    })
                    break;
                }
            }
        }

        const imgsrc = this.props.location.state.data.productimage
        return (
            <div className="container mt-3 mb-3">
                <div className="row ml-2">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="d-flex flex-md-column">
                                    <div className="p-2">
                                        <img
                                            src={this.props.location.state.data.productimage}
                                            alt={this.props.location.state.data.productname}
                                            className="img-fluid d-block"
                                        />
                                    </div>
                                    <div className="p-2">
                                        <img
                                            src={this.props.location.state.data.productimage}
                                            alt={this.props.location.state.data.productname}
                                            className="img-fluid d-block"
                                        />
                                    </div>
                                    <div className="p-2">
                                        <img
                                            src={this.props.location.state.data.productimage}
                                            alt={this.props.location.state.data.productname}
                                            className="img-fluid d-block"
                                        />
                                    </div>
                                    <div className="p-2">
                                        <img
                                            src={this.props.location.state.data.productimage}
                                            alt={this.props.location.state.data.productname}
                                            className="img-fluid d-block"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: imgsrc,
                                        height : 400,
                                        width : 400
                                    },
                                    largeImage: {
                                        src: imgsrc,
                                        width: 1200,
                                        height: 1200
                                    }
                                }} 
                                className="img-fluid"
                                style={{height:"400px"}}
                                enlargedImageContainerStyle={{backgroundColor : "#fff", zIndex : 10}}
                                enlargedImagePosition="over"/>
                            </div> 
                        </div>         
                        
                    </div>
                    <div className="col-md-6">
                        <h1 className="ml-3">
                            {this.props.location.state.data.productname}<br/>
                            <small>Rs. {this.props.location.state.data.productprice}</small>
                        </h1>
                        <p className="lead ml-3">{this.props.location.state.data.productdesc}</p>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="btn-group rounded mb-2" style={{backgroundColor : "lightcoral", textAlign : "center"}}>
                                        <button 
                                            type="button" 
                                            className="btn btn-danger"
                                            onClick={()=> {
                                                if(this.state.number > 1){
                                                    this.setState({
                                                        number : this.state.number -1
                                                    })
                                                }
                                            }}>-</button>
                                        <div className="p-2">{this.state.number}</div>
                                        <button 
                                            type="button" 
                                            className="btn btn-danger"
                                            onClick={()=> {
                                                this.setState({
                                                    number : this.state.number +1
                                                })
                                            }}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <button 
                                        type="button" 
                                        className="btn btn-primary btn-block mb-2"
                                        onClick={()=>{addProductToCart(this.props.location.state.data, this.state.number)}}>{this.state.addToCart}</button>
                                </div>
                                <div className="col-sm-4">
                                    <Link to="/checkout">
                                        <button type="button" className="btn btn-danger btn-block mb-2">Checkout</button>
                                    </Link>
                                </div>
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userAction : userAction
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TpSingleProduct)
