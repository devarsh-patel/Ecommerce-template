import React, { Component } from 'react'
import { connect } from 'react-redux'

import './app.css';
import productsData from '../product_data.json';
import TechyPlace from '../containers/techyplace/techyplace';

class App extends Component {

    state = {
        "username" : "Devarsh",
        "bannerimage" : "https://steemitimages.com/DQmSLDVGZNa4GzTiawaBSanjpzpd9YQHNC9Uti3aCiwVYS3/3058934373001_4015606789001_dell-xps-13-still-100565160-orig.jpg",
        "companyname" : "TechyPlace",
        "companyho" : "Ahmedabad, Gujarat",
        "companymobile" : "+91 9025601125",
        "companyaddress1" : "Empire State Building",
        "companyaddress2" : "350 5th Avenue",
        "companyaddress3" : "New York, NY 10118",
        "companyemail" : "info@techyplace.com",
        "products" : productsData
    }

    render() {
        // console.log(this.props.user)
        return (
            <div>
                <TechyPlace data={this.state}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.userReducer
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
