import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../assests/back-arrow.png'

const arrowStyle = {
    width: "20px",
    height: "50%"
}
const EditStationScreen = () => {
    const [appData, setAppData] = useState([])
    const navigate = useNavigate()

    //### GET/READ ALL RADIO CHANNEL
    useEffect(() => {
        fetch("https://warm-temple-06913.herokuapp.com/channel")
            .then(res => res.json())
            .then(data => {
                setAppData(data)
            })
    }, [])

    // DELETE SPECIFIC RADIO CHANNEL
    const handleDelete = (id) => {
        // console.log(id);
        fetch(`https://warm-temple-06913.herokuapp.com/channel/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                alert(data)
            })
    }


    const handleUpdate = (id) => {
        navigate(`/update/${id}`)
    }
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="d-flex justify-content-center mt-3">
                    <div className="col-sm-4" style={{ marginTop: 9 }}>

                        <div style={{ backgroundColor: '#edad61', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                            <div className="text-center text-white mb-0" style={{ padding: 30 }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                    <button onClick={() => handleBack()} style={{ backgroundColor: "transparent", border: "none" }} type="button">
                                        <img title="Station Settings" style={arrowStyle} src={backArrow} alt="Back Arrow" />
                                    </button>
                                    <h3>Edit Station</h3>
                                </div>
                            </div>
                        </div>

                        <div style={{ maxHeight: 380, overflowY: 'auto', backgroundColor: "#2b2b35" }}>
                            {appData.length === 0 && <h4 style={{ textAlign: 'center', color: "#a3acbe", padding: 10 }}>No Station Found</h4>}
                            {
                                appData.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            {/* Render Part */}
                                            <div>
                                                <div className="mt-4 d-flex justify-content-between mx-2 text-white">
                                                    <h4 style={{ color: "#a3acbe" }}>{item.name}</h4>
                                                    {/* <h4>{item.frequency}</h4> */}
                                                    <div>
                                                        <button onClick={() => handleUpdate(item._id)} className="btn btn-info me-1">Update</button>
                                                        <button onClick={() => handleDelete(item._id)} className="btn btn-danger">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="bg-white" />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div style={{ backgroundColor: '#21212b', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                            <h3 className="text-center text-white p-4">Radio-Widget</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditStationScreen;