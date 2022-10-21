import React from 'react';
import { FaCommentMedical } from 'react-icons/fa';
const Cards = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center mb-4  experties-title'>Experties</h1>
            <div className="row g-3 mx-3">

                <div className="col-md-4 col-12">
                    <div className="card  border-0">
                        <div className='text-center experties-icon'><FaCommentMedical /></div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Intelligent IoT</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12">
                    <div className="card  border-0">
                        <div className='text-center experties-icon'><FaCommentMedical /></div>
                        <div className="card-body">
                            <h5 className="card-title">Medical Image Processing & ML</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12">
                    <div className="card  border-0">
                        <img className="card-img-top img-fluid rounded-circle" src="https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Academic and EDU. Research & Automation</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12">
                    <div className="card  border-0">
                        <img className="card-img-top img-fluid rounded-circle" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Training and Consultaton</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12">
                    <div className="card  border-0">
                        <img className="card-img-top img-fluid rounded-circle" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Robotics & Indestrial Automation</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12">
                    <div className="card  border-0">
                        <img className="card-img-top img-fluid rounded-circle" src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Future Research Area</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Cards;