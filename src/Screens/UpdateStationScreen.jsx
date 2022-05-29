import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import backArrow from '../assests/back-arrow.png'

const arrowStyle = {
    width: "20px",
    height: "50%"
}
const UpdateStationScreen = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            frequency: ""
        }
    });
    // console.log(id)

    //### GET/READ ALL RADIO CHANNEL
    useEffect(() => {
        fetch(`https://warm-temple-06913.herokuapp.com/channel/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    // console.log(data);

    const onSubmit = values => {
        // console.log(values)
        fetch(`https://warm-temple-06913.herokuapp.com/channel/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(values),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                resetField("name")
                resetField("frequency")
                alert("Update Channel. Reload App.")
            })
    };

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="d-flex justify-content-center mt-3">
                    <div className="col-sm-4" style={{ marginTop: 9 }}>

                        <div style={{ backgroundColor: '#edad61', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                            <h3 className="text-center text-white mb-0" style={{ padding: 30 }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                    <button onClick={() => handleBack()} style={{ backgroundColor: "transparent", border: "none" }} type="button">
                                        <img title="Station Settings" style={arrowStyle} src={backArrow} alt="Back Arrow" />
                                    </button>
                                    <h3>Update Station</h3>
                                </div>
                            </h3>
                        </div>

                        <div style={{ height: 380, overflowY: 'auto', backgroundColor: "#2b2b35" }}>

                            <div style={{ color: "#a3acbe" }}>
                                <div className="mt-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <h4>Station Name:</h4>
                                        <h4>{data.name}</h4>
                                    </div>
                                </div>
                                <div className="mt-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <h4>Frequency:</h4>
                                        <h4>{data.frequency}</h4>
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-white" />

                            <form className="mx-2 py-4" onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" className="form-control mb-2" placeholder='Update Channel Name' {...register("name", { required: true })} />
                                {errors.name && <span className="text-danger">* Email field is required</span>}

                                <input type="text" className="form-control mb-2" placeholder='Update Frequency' {...register("frequency", { required: true })} />
                                {errors.frequency && <span className="text-danger">* Password field is required</span>}

                                <br />
                                <input type="submit" className='btn btn-info' />
                            </form>
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

export default UpdateStationScreen;