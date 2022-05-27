import React from 'react';
import backArrow from '../assests/back-arrow.png'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const arrowStyle = {
    width: "20px",
    height: "50%"
}

const CreateStationScreen = () => {
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            frequency: ""
        }
    });

    // POST/CREATE A RADIO CHANNEL
    const onSubmit = values => {
        console.log(values)
        fetch('http://localhost:5000/channel', {
            method: 'POST',
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
                alert(data)
            })
    };

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center mt-3">
                    <div className="col-sm-4" style={{ marginTop: 9 }}>

                        <div style={{ backgroundColor: '#edad61', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                            <div className="text-center text-white mb-0" style={{ padding: 30 }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                    <button onClick={() => handleBack()} style={{ backgroundColor: "transparent", border: "none" }} type="button">
                                        <img title="Station Settings" style={arrowStyle} src={backArrow} alt="Back Arrow" />
                                    </button>
                                    <h3>Create New Station</h3>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ height: 380, backgroundColor: "#2b2b35" }}>
                                <form className="mx-2 pt-4" onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" className="form-control mb-2" placeholder='New Channel Name' {...register("name", { required: true })} />
                                    {errors.name && <span className="text-danger">* Email field is required</span>}

                                    <input type="text" className="form-control mb-2" placeholder='Set Frequency' {...register("frequency", { required: true })} />
                                    {errors.frequency && <span className="text-danger">* Password field is required</span>}

                                    <br />
                                    <input type="submit" className='btn btn-info' />
                                </form>
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#21212b', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                            <h3 className="text-center text-white p-4">Radio-Widget</h3>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default CreateStationScreen;

