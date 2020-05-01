import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import data from '../../../../product_data.json';
import { bindActionCreators } from 'redux';
import userAction from '../../../../actions/user_action';

export class TpProduct extends Component {

    state = {
        data : [],
        filter : "",
        refilter : true
    }

    render() {
        // console.log(this.props.location.state)
        if(this.props.user.filter !== this.state.filter){
            this.setState({
                filter : this.props.user.filter,
                data : this.state.data.filter((item)=>{
                    return item.productname.toLowerCase().indexOf(this.props.user.filter.toLowerCase()) !== -1;
                }),
                refilter : !this.state.refilter
            })
        }
        // console.log(this.state.filter);
        if(this.state.data.length === 0 || (this.props.user.filter === "" &&  this.state.refilter)){
            if(this.props.location.state === undefined || this.props.location.state === null){
                this.setState({
                    data : data,
                    refilter : false
                })
            }
            else {
                let temp = this.props.location.state.filter((item) => {
                    let str = this.props.user.filter;
                    // console.log(str)
                    return item.productname.toLowerCase().indexOf(str) !== -1;
                })
                if(!(temp.length === 0)){
                    this.setState({
                        data : temp,
                        refilter : false
                    })
                }
            }
        }
        // item.productname.toLowerCase().indexOf(this.props.user.filter.toLowerCase()) !== -1
        if(this.props.user.urlpathname !== window.location.pathname){
            this.props.userAction({...this.props.user, "urlpathname" : window.location.pathname})
        }
        return (
            <div className="mt-4">
                <div className="container">
                    <main>
                        <h1 className="mb-sm-4 text-center">Products</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mauris sed massa vehicula lobortis. Fusce at justo ante. Morbi mollis urna a luctus efficitur. Aenean consectetur ipsum nec pellentesque euismod. Nullam mollis, massa non porttitor luctus, ipsum mauris consectetur ex, non facilisis augue turpis vitae orci. Aenean eu mattis quam.</p>
                        <nav aria-label="Photo gallery">
                            <ul className="pagination justify-content-center">
                                <li className="page-item"><a href="#" className="page-link">Previous</a></li>
                                <li className="page-item active">
                                <a href="#" className="page-link">
                                    1 <span className="sr-only">(current)</span>
                                </a>
                                </li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">Next</a></li>
                            </ul>
                        </nav>
                        <div className="row">
                            {this.state.data.map((item,key)=>(
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
                        <nav aria-label="Photo gallery">
                            <ul className="pagination justify-content-center">
                                <li className="page-item"><a href="#" className="page-link">Previous</a></li>
                                <li className="page-item active">
                                <a href="#" className="page-link">
                                    1 <span className="sr-only">(current)</span>
                                </a>
                                </li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">Next</a></li>
                            </ul>
                        </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(TpProduct);