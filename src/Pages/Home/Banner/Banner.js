import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-overlay d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12 head_text">
                            <h1 className='mb-3'>GOODBYE JUNK FOOD.</h1>
                            <h1 className='mb-3'>HELLO SUPER HEALTHY FOOD.</h1>
                            <Link to='/menus'>
                                <button className="btn bg-color btn-lg mr-3 px-3 button-1">I'm hungry</button>
                                <button className="btn btn-lg border-color px-3 button-2">Show me more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;