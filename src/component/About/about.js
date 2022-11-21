import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../About/about.css';
// import imgjs from './asset/JS.png';

export default function about() {
    return (
        <div className="container-fluid about" id="about">
            <div class="row" id="navbar">
            {/* <i class="i-nav" onclick="goTo('header')"><a href="#" id="navTag">Home</a></i> */}
            </div>
            <div className="row text-black p-5">
                <div className="col"></div>
                <div className="col-6">
                    <h1 className="text-center aboutMe">About Me from clone</h1>
                    <p className="text-center mt-2">
                        I’m a web designer/customization and digital marketer who enjoys assisting people in finding the best tools for their jobs. Since 2018, I’ve been designing and developing websites for clients all over the world.
                    </p>
                    <div className="col">
                        <h2 className="mt-5 mySkills" >My Skills</h2>
                        <hr className="hrAbout text-center" />
                        <br />
                        <div className="row text-center">
                            <div className="col-md-4">
                                <p>HTML</p>
                                <img src="https://media.istockphoto.com/id/513544018/vector/young-programmer-coding-a-new-project.jpg?s=1024x1024&w=is&k=20&c=cEss7Vo6UM66osHtQcfZVrIJKEKue2JoBgDpdBxUss8=" alt="HTML ICONS" height={250} class="Iconss img-fluid" />
                            </div>
                            <div class="col-md-4">
                                <p>CSS</p>
                                <img src="https://media.istockphoto.com/id/1226444511/vector/mobile-website-development-technology-conceptual-illustration-design-of-internet-pages-of.jpg?s=1024x1024&w=is&k=20&c=2YAtkgta7MnPiuovy9oYRwoxxUFG4SHvyTBkIjHhDOM=" alt="CSS ICONS" height={250} class="Iconss img-fluid" />
                            </div>
                            <div class="col-md-4">
                                <p>JavaScript</p>
                                <img src='https://media.istockphoto.com/id/1372764637/photo/coding-language-development-icon-on-yellow-background-software-development-concept.jpg?s=1024x1024&w=is&k=20&c=xrd3DmSy6SpYMPwcVtxeWg8TJJvcy8DGU7TxgVcqK2s=' height={250} alt="JavaScript ICONS" className="Iconss img-fluid" />
                                <br />
                            </div>
                        </div>
                        <p className="mt-5">
                            I also enjoy assisting my clients in building their own websites, which allows you to get exactly what you need without having to learn how to code or hire someone else!
                        </p>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
