import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Contact/contact.css';

export default function contact() {
  return (
    <div className="container-fluid contact" id="contact">
            <div className="row text-center">
                <h1 className="contactHero p-5">Get In Touch</h1>
                <div className="container">
                  <div className="row">
                   <div className="col">
                   </div>
                   <div className="col">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <i className="fa fa-map"></i>
                          <p>Davao City PH GT+8000 </p>
                        </div>
                        <div className="col">
                          <i className="fa fa-envelope"></i>
                        <p  className='cont'><a href="mailto:contact@technolei.com">contact@tehnolei.com</a></p>
                        <a href="https://calendly.com/carampatana/30min" className="btn btn-primary btn-lg btn-block btnScheduleDemo" role="button">Schedule Demo</a>
                        </div>
                        <div className="col">
                          <i className="fa fa-phone"></i>
                        <p>(+63) 955-770-2539</p>
                        </div>
                      </div>
                    </div>
                   </div>
                   <div className="col">
                   </div>
                </div> 
                
                <div className="container">
                  <div className="row">
                    <div className="col mt-5">
                      <h1>Newsletter</h1>
                      <div className="input-group btnSubscriberEmail">
                        <input type="email" className="form-control" placeholder="Enter your email address" required />
                        <div className="input-group-append">
                          <button className="btn btn-outline-primary" type="submit">Subscribe</button>
                        </div>
                        <span id="errorrs"></span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>  
            </div>
        </div>
  )
}
