import React from "react";
import './Menu.css';
import img1 from '../images/3.jpg';

function Menu() {
    return (
        <>
            <div id="menu" className="container-fluid bg-menu">
                <div className="menu mx-5">
                    <h3>Menu</h3>
                    <p>Check Our Tasty Menu</p>

                </div>
                <div className="row mx-5 ms-5">
                    <div className="col-12 col-sm-6 col-lg-6 col-md-6 Menu-item">
                        <img className="img-menu" src={img1} />
                        <a className="item">Lobster Bisque</a>
                        <span>$5.95</span>
                        <div className="item-content">
                        <i>Lorem, deren, trataro, filede, nerada</i>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-6 col-md-6 Menu-item">
                        <img className="img-menu" src={img1} />
                        <a className="item">Lobster Bisque</a>
                        <span>$5.95</span>
                        <div className="item-content">
                        <i>Lorem, deren, trataro, filede, nerada</i>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-6 col-md-6 Menu-item">
                        <img className="img-menu" src={img1} />
                        <a className="item">Lobster Bisque</a>
                        <span>$5.95</span>
                        <div className="item-content">
                        <i>Lorem, deren, trataro, filede, nerada</i>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-6 col-md-6 Menu-item">
                        <img className="img-menu" src={img1} />
                        <a className="item">Lobster Bisque</a>
                        <span>$5.95</span>
                        <div className="item-content">
                        <i>Lorem, deren, trataro, filede, nerada</i>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-6 col-md-6 Menu-item">
                        <img className="img-menu" src={img1} />
                        <a className="item">Lobster Bisque</a>
                        <span>$5.95</span>
                        <div className="item-content">
                        <i>Lorem, deren, trataro, filede, nerada</i>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-6 col-md-6 Menu-item">
                        <img className="img-menu" src={img1} />
                        <a className="item">Lobster Bisque</a>
                        <span>$5.95</span>
                        <div className="item-content">
                        <i>Lorem, deren, trataro, filede, nerada</i>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-6 col-md-6 Menu-item">
                        <img className="img-menu" src={img1} />
                        <a className="item">Lobster Bisque</a>
                        <span>$5.95</span>
                        <div className="item-content">
                        <i>Lorem, deren, trataro, filede, nerada</i>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-6 col-md-6 Menu-item">
                        <img className="img-menu" src={img1} />
                        <a className="item">Lobster Bisque</a>
                        <span>$5.95</span>
                        <div className="item-content">
                        <i>Lorem, deren, trataro, filede, nerada</i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Menu;