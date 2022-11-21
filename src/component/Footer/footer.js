import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Footer/footer.css';

export default function footer() {
    return (       
        <div className="container-fluid footer">
            <div className="row">
                <div className="col text-center justify-content-md-center mt-5">
                    <i className="fa fa-copyright copyright"></i>
                    <span>TECHNOLEI Inc 2022 </span>
                    <span>MIT License</span>
                </div>
                <div className="col">

                </div>
                <div className="col justify-content-md-center mt-5">
                    <span>Follow Us  </span>
                    <i
                        className="fa fa-facebook footerIcons"

                    ></i>
                    <i href="#"
                        className="fa fa-instagram footerIcons"

                    ></i>
                    <i
                        className="fa fa-github footerIcons"

                    ></i
                    ><br />
                    
                </div>
            </div>
        </div>
    )
}
