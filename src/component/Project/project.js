import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Project/project.css';

export default function project() {
    return (
        <div classNameName="container-fluid">
            <div classNameName="row megaProject p-5" id="project">
                <div classNameName="col">

                </div>
                <div className="col">
                    <h2 className="text-center">Mega Project</h2>
                    <p className="text-center mt-2">
                        At TECHNOLEI, we believe that every project should be treated with respect and integrity, from start to finish. That’s why we’re here: to provide you with top-notch design services that are both creative and professional, as well as ethical thinking.
                    </p>
                    <div classNameName='col'>

                        <div className='row'>
                            <div className="col mt-3">
                                <button className="btn btn-primary">eCommerce</button>
                                <button className="btn btn-outline-primary">CMS</button>
                                <button className="btn btn-outline-primary">Web3 NFT</button>
                                <button className="btn btn-outline-primary">Personal</button>
                                <button className="btn btn-outline-primary">Business</button>
                            </div>
                            <div className="container mt-5">
                                <div className="row">
                                    <div className="column">
                                        <img src="https://media.istockphoto.com/id/1438185801/photo/asian-student-man-writing-notebook-with-laptop-in-education-learning-at-study-hall-desk-with.jpg?s=1024x1024&w=is&k=20&c=LsXwgSNkAjwy9myY6xSgD8PiJ_Rys0MKrwDMvP5DFYU=" alt="business" height={50} className="img-fluid" />
                                        <img src="./asset/Ecommerce.png" alt="business" width="250" height="250" className="img-fluid" />
                                        <img src="./asset/CMS.png" alt="business" width="250" height="250" className="img-fluid" />
                                        <img src="./asset/NFT.png" alt="business" width="250" height="250" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    )
}
