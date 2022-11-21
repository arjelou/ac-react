import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Header/header.css';


export default function header() {
    return (
     
        <div className='container-fluid' id='header'>
            <div class="row header" id='home'>
                <div
                    class="row text-center justify-content-md-center justify-content-around position-absolute top-50 start-50 translate-middle"
                >
                    <div class="col">
                        <h3 className="text-center text-white">Arjelou Carampatana</h3>
                        <h5 className="text-white">I am <b>Web Developer</b></h5>
                        <i
                            className="fa fa-facebook p-2 headerIcons"

                        ></i>
                        <i
                            className="fa fa-instagram p-2 headerIcons"

                        ></i>
                        <i
                            className="fa fa-github p-2 headerIcons"

                        ></i>
                        <br />
                        <a href="https://calendly.com/carampatana/30min" class="btn btn-primary btn-lg btn-block tnScheduleDemoHeader" role="button">Schedule a Meeting</a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col"></div>
                </div>
            
            </div>
            
        </div>
    )
}
