import React from 'react';
import './Gallery.css';

import img1 from '../../../image/1.jpg';
import img2 from '../../../image/2.jpg';
import img3 from '../../../image/3.jpg';
import img4 from '../../../image/4.jpg';
import img5 from '../../../image/5.jpg';
import img6 from '../../../image/6.jpg';
import img7 from '../../../image/7.jpg';
import img8 from '../../../image/8.jpg';

const Gallery = () => {
    return (
        <div className='gallery-wrap'>
            <div className='mb-5 pt-5 gallery'>
                <h3 className='text-uppercase mb-3'>Out gallery</h3>
                <hr />                
            </div>
            <div class="container-fluid gallery-images">
                <div class="row">
                    <div class="col-md-3 p-0 overflow-hidden">
                        <img class="img-fluid" src={img1} alt=""/>
                
                    </div>
                    <div class="col-md-3 p-0 overflow-hidden">
                        <img class="img-fluid" src={img2} alt=""/>
                    </div>
                    <div class="col-md-3 p-0 overflow-hidden">
                        <img class="img-fluid" src={img3} alt=""/>
                    </div>
                    <div class="col-md-3 p-0 overflow-hidden">
                        <img class="img-fluid" src={img4} alt=""/>
                    </div>
                    <div class="col-md-3 p-0 overflow-hidden">
                        <img class="img-fluid" src={img5} alt=""/>
                    </div>
                    <div class="col-md-3 p-0 overflow-hidden">
                        <img class="img-fluid" src={img6} alt=""/>
                    </div>
                    <div class="col-md-3 p-0 overflow-hidden">
                        <img class="img-fluid" src={img7} alt=""/>
                    </div>
                    <div class="col-md-3 p-0 overflow-hidden">
                        <img class="img-fluid" src={img8} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;