import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Project/project.css';

export default function project() {
    return (

        <div className="container-fluid about" id="project">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger navTagList" href="#home">Home</a>
                    <a className="nav-link js-scroll-trigger navTagList" href="#about">About</a>
                    <a className="nav-link js-scroll-trigger navTagList" href="#project">Project</a>
                    <a className="nav-link js-scroll-trigger navTagList" href="#experience">Experience</a>
                    <a className="nav-link js-scroll-trigger navTagList" href="#contact">Contact</a>

                </li>
            </ul>
            <div className="row text-black p-5">
                <div className="col"></div>
                <div className="col-6">
                    <h1 className="text-center aboutMe">Mega Project</h1>
                    <p className="text-center mt-2">
                        At TECHNOLEI, we believe that every project should be treated with respect and integrity, from start to finish. That’s why we’re here: to provide you with top-notch design services that are both creative and professional, as well as ethical thinking.
                    </p>
                    <div className="col">
                        <div className="col mt-5">
                            <button className="btn btn-primary m-1">eCommerce</button>
                            <button className="btn btn-outline-primary m-1">CMS</button>
                            <button className="btn btn-outline-primary m-1">Web3 NFT</button>
                            <button className="btn btn-outline-primary m-1">Personal</button>
                            <button className="btn btn-outline-primary m-1">Business</button>
                        </div>
                        <div className="row text-center mt-5">
                            <div className="col-md-4">
                                <img src="https://media.istockphoto.com/id/513544018/vector/young-programmer-coding-a-new-project.jpg?s=1024x1024&w=is&k=20&c=cEss7Vo6UM66osHtQcfZVrIJKEKue2JoBgDpdBxUss8=" alt="HTML ICONS" height={250} class="Iconss img-fluid" />
                            </div>
                            <div class="col-md-4">
                                <img src="https://media.istockphoto.com/id/1226444511/vector/mobile-website-development-technology-conceptual-illustration-design-of-internet-pages-of.jpg?s=1024x1024&w=is&k=20&c=2YAtkgta7MnPiuovy9oYRwoxxUFG4SHvyTBkIjHhDOM=" alt="CSS ICONS" height={250} class="Iconss img-fluid" />
                            </div>
                            <div class="col-md-4">
                                <img src='https://media.istockphoto.com/id/1372764637/photo/coding-language-development-icon-on-yellow-background-software-development-concept.jpg?s=1024x1024&w=is&k=20&c=xrd3DmSy6SpYMPwcVtxeWg8TJJvcy8DGU7TxgVcqK2s=' height={250} alt="JavaScript ICONS" className="Iconss img-fluid" />
                                <br />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>

    )
}
