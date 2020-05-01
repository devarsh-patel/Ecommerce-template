import React, { Component } from 'react';
import { connect } from 'react-redux'

import './tphome.css';
import { Link } from 'react-router-dom';
import userAction from '../../../../actions/user_action';
import { bindActionCreators } from 'redux';

export class TpHome extends Component {
    render() {
        let pdata = this.props.data.products.slice(0,6);
        if(this.props.user.urlpathname !== window.location.pathname){
            this.props.userAction({...this.props.user, "urlpathname" : window.location.pathname})
        }
        return (
            <div>
                <img 
                    src={this.props.data.bannerimage} 
                    alt="alte"
                    className="img-fluid mb-5"/>
                <div className="container">
                    <main>
                        <h1 className="mb-sm-4 text-left">Showcase</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mauris sed massa vehicula lobortis. Fusce at justo ante. Morbi mollis urna a luctus efficitur. Aenean consectetur ipsum nec pellentesque euismod. Nullam mollis, massa non porttitor luctus, ipsum mauris consectetur ex, non facilisis augue turpis vitae orci. Aenean eu mattis quam.</p>
                        <div className="row">
                            {pdata.map((item,key)=>(
                                <div key={key} className="col-12 col-md-6 col-lg-4">
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
                                </div>
                            ))}
                        </div>                
                    </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(TpHome)