import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoFound = () => {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className="row">
                <div className="d-flex justify-content-center mt-5">
                    <div>
                        <h3>No Found Page</h3>
                        <button className="btn btn-primary" onClick={() => navigate('/')}>Home</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NoFound;