import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import './tpheader.css';
import DivWithNot from '../../../components/divWithNot/divWithNot';
import { bindActionCreators } from 'redux';
import userAction from '../../../actions/user_action';

export class TpHeader extends Component {

    state = {
        number : this.props.user.cart.length
    }

    render() {
        // console.log(this.props.data)
        if(this.props.user.cart.length !== this.state.number){
            this.setState({
                number : this.props.user.cart.length
            })
        }
        // console.log(this.props.user.cart.length)
        // console.log(window.location.pathname);
        return (
            <div className="TpHeader">
                <nav className="navbar navbar-expand-md navbar-dark bg-info">
                    <Link className="navbar-brand" to="/">{this.props.data.companyname}</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={{
                                    pathname : "/products",
                                    state : this.props.data.products
                                }}>Products</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#contactus">Contact Us</a>
                            </li>
                        </ul>
                        <form 
                            className="form-inline my-2 my-lg-0">
                            <input 
                                className="form-control mr-sm-2" 
                                type="text" 
                                placeholder="Search"
                                style={this.props.user.urlpathname === "/products" ? {} : {display : "none"}}
                                onChange={(e)=> {this.props.userAction({...this.props.user, "filter" : e.target.value.toLowerCase()})}}/>
                            <Link to="/cart">
                                <DivWithNot 
                                    notText={this.props.user.cart.length}
                                    imageClass="fal fa-shopping-cart text-white p-2 cart-button"
                                />
                            </Link>
                        </form>
                    </div>
                </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(TpHeader);

// <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>