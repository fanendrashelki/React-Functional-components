import React from 'react';
import './Special.css';
import img1 from '../images/7.jpg';


function special() {
    return (
        <>
            <div id='special' className="container-fluid bg-Special ">
                <div className="menu mx-5">
                    <h3>SPECIAL</h3>
                    <p>Check Our Specials</p>
                </div>
                <div className='row mx-5'>
                    <div class="col-lg-3 line pt-5">
                        <ul class="nav nav-tabs flex-column">
                            <li class="nav-item">
                                <a class="nav-link show active" data-bs-toggle="tab" >Modi sit est</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show " data-bs-toggle="tab" >Unde praesentium sed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show " data-bs-toggle="tab" href="#tab-2">Pariatur explicabo vel</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show " data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link show " data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-9 '>
                        <div id='tab-1' class="row pt-5" >
                            <div  class="col-lg-8 col-md-8 text-white order-2 order-lg-1" >
                                <h3>Architecto ut aperiam autem id</h3>
                                <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                            </div>
                            <div class="col-lg-4 col-md-4 pb-5  text-center order-1 order-lg-2 order-md-2">
                                <img src={img1} alt="" class="img-fluid rounded-circle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default special;