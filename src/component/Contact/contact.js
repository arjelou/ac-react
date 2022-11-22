import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Contact/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fortawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


export default function contact() {
  const element = <FontAwesomeIcon icon={faEnvelope} size="xl"/>
  const map = <FontAwesomeIcon icon={faMap} size="xl"/>
  const ffacontact = <FontAwesomeIcon icon={faPhone} size="xl"/>


  return (
    <div className="container-fluid contact" id="contact">
            <div className="row text-center">
            
                <h1 className="contactHero p-5">Get In Touch</h1>
                <div className="container">
                  <div className="row">
                 <p> {element}</p>
                   <div className="col">
                    
                   </div>
                   <div className="col">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                        {map}
                          <p>Davao City PH GT+8000 </p>
                        </div>
                        <div className="col">
                        <p className='contact-link'><a href="mailto:contact@technolei.com">contact@tehnolei.com</a></p>
                        <a href="https://calendly.com/carampatana/30min" className="btn btn-primary btn-lg btn-block btnScheduleDemo" role="button">Schedule Demo</a>
                        </div>
                        <div className="col">
                        {ffacontact}
                          <i></i>
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
