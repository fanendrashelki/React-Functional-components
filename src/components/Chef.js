import react from "react";
import './Chefs.css';
import chef1 from '../images/chefs-1.jpg';
import chef2 from '../images/chefs-2.jpg';
import chef3 from '../images/chefs-3.jpg';

function Chef() {
    return (
        <>
            <div id='chefs' className="container-fluid bg-chefs ">
                <div className="menu mx-5">
                    <h3>CHEFS</h3>
                    <p>Our Proffesional Chefs</p>
                </div>
                <div class="row mx-5">

                    <div class="col-lg-4 col-md-4">
                        <div className="member">
                            <img src={chef1} class="img-fluid" alt="" />
                            <div class="member-info">
                                <div class="member-info-content ">
                                    <h4>Walter White</h4>
                                    <span>Master Chef</span>
                                </div>
                                <div class="social">
                                    <a  href=""><i class="fab fa-2x fa-facebook"></i></a>
                                    <a href=""><i class="fab fa-2x fa-instagram"></i></a>
                                    <a href=""><i class="fab fa-2x fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-2x fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                        <div className="member">
                            <img src={chef2} class="img-fluid" alt="" />
                            <div class="member-info">
                                <div class="member-info-content active-socia">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Patissier</span>
                                </div>
                                <div class="social">
                                    <a href=""><i class="fab fa-2x fa-facebook"></i></a>
                                    <a href=""><i class="fab fa-2x fa-instagram"></i></a>
                                    <a href=""><i class="fab fa-2x fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-2x fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                        <div className="member">
                            <img src={chef3} class="img-fluid" alt="" />
                            <div class="member-info">
                                <div class="member-info-content">
                                    <h4>William Anderson</h4>
                                    <span>Cook</span>
                                </div>
                                <div class="social">
                                    <a href=""><i class="fab fa-2x fa-facebook"></i></a>
                                    <a href=""><i class="fab fa-2x fa-instagram"></i></a>
                                    <a href=""><i class="fab fa-2x fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-2x fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
} export default Chef;