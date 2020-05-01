import React, { Component } from 'react'

import './tpfooter.css';

class TpFooter extends Component {
    render() {
        return (
            <footer className="small bg-light" id="contactus">
              <div className="container py-3 py-sm-5">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-3">
                    <h6>Quick links</h6>
                    <ul className="list-unstyled">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">What's new?</a></li>
                      <li><a href="#">Featured products</a></li>
                      <li><a href="#">Newsletter</a></li>
                      <li><a href="#">My account</a></li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <h6>Information</h6>
                    <ul className="list-unstyled">
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Membership</a></li>
                      <li><a href="#">Shipping &amp; returns</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Sitemap</a></li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <h6>Follow us</h6>
                    <ul className="list-unstyled">
                      <li><a href="#">Facebook</a></li>
                      <li><a href="#">Instagram</a></li>
                      <li><a href="#">Twitter</a></li>
                      <li><a href="#">YouTube</a></li>
                      <li><a href="#">LinkedIn</a></li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <h6>Our location:</h6>
                    <address>
                      <strong>{this.props.data.companyaddress1}</strong><br/>
                      {this.props.data.companyaddress2}<br/>
                      {this.props.data.companyaddress3}<br/>
                      <abbr title="Telephone">T:</abbr> <a href="tel:+12127363100">{this.props.data.companymobile}</a><br/>
                      <abbr title="Mail">M:</abbr> <a href="mailto:info@domain.com">{this.props.data.companyemail}</a>
                    </address>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-9">
                    <ul className="list-inline">
                      <li className="list-inline-item">&copy; 2020 {this.props.data.companyname}, Inc.</li>
                      <li className="list-inline-item">All rights reserved.</li>
                      <li className="list-inline-item"><a href="#">Terms of use and privacy policy</a>.</li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="dropdown dropup">
                      <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Visit other sites:</button>
                      <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton">
                        <a href="#" className="dropdown-item small px-1">http://www.ourothersite.com</a>
                        <a href="#" className="dropdown-item small px-1">http://www.ouroldsite.com</a>
                        <a href="#" className="dropdown-item small px-1">http://www.ournewsite.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
        )
    }
}

export default TpFooter
