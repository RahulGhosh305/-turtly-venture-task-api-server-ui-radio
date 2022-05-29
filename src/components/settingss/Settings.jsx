import React from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assests/back-arrow.png'

const arrowStyle = {
    width: "20px",
    height: "50%"
}
const hrStyle = {
    backgroundColor: 'white',
    height: 3
}


const Settings = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    const handleNewStation = () => {
        navigate('/create')
    }
    const handleEditStation = () => {
        navigate('/edit')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center mt-3">
                    <div className="col-sm-4" style={{ marginTop: 9 }}>
                        {/* Settings Top */}
                        <div style={{ backgroundColor: '#edad61', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                            <h3 className="text-center text-white mb-0" style={{ padding: 30 }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                    <button onClick={() => handleBack()} style={{ backgroundColor: "transparent", border: "none" }} type="button">
                                        <img title="Station Settings" style={arrowStyle} src={backArrow} alt="Back Arrow" />
                                    </button>
                                    <h3 >Setting</h3>
                                </div>
                            </h3>
                        </div>

                        {/* Settings Middle */}
                        <div style={{ height: 380, backgroundColor: "#2b2b35", color: "#a3acbe", textAlign: "center" }}>
                            <div onClick={() => handleNewStation()}>
                                <h4 className="py-3">Create New Station</h4>
                                <hr style={hrStyle} />
                            </div>
                            <div onClick={() => handleEditStation()}>
                                <h4 className="py-3">Edit Station</h4>
                                <hr style={hrStyle} />
                            </div>
                        </div>

                        {/* Settings Bottom  */}
                        <div style={{ backgroundColor: '#21212b', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                            <h3 className="text-center text-white p-4">Radio-Widget</h3>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Settings;

