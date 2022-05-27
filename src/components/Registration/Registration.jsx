import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Registration = () => {
    const [mode, setMode] = useState(false)
    // console.log(mode)

    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            retypePassword: ""
        }
    });
    const onSubmit = values => {
        console.log(values)
        resetField("email")
        resetField("password")
        resetField("retypePassword")
    };


    return (
        <div className='container'>
            <div className="row">
                <div className="d-flex justify-content-center mt-3">
                    <div className="col-sm-4" style={{ marginTop: 25 }}>

                        {/* Registration Top */}
                        <div style={{ backgroundColor: '#edad61', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                            <h3 className="text-center text-white mb-0" style={{ padding: 30 }}>
                                {mode ? "Registration" : "Login"}
                            </h3>
                        </div>

                        {/* Registration Middle Form */}
                        <div style={{ height: 360, backgroundColor: "#2b2b35" }}>
                            <form className="mx-2 pt-4" onSubmit={handleSubmit(onSubmit)}>
                                <input type="email" className="form-control mb-2" placeholder='E-Mail' {...register("email", { required: true })} />
                                {errors.email && <span className="text-danger">* Email field is required</span>}

                                <input type="password" className="form-control mb-2" placeholder='Password' {...register("password", { required: true })} />
                                {errors.password && <span className="text-danger">* Password field is required</span>}

                                {
                                    mode && <><input type="password" className="form-control" placeholder='Retype Password' {...register("retypePassword", { required: true })} />
                                        {errors.retypePassword && <span className="text-danger">* Retype password field is required</span>}</>
                                }

                                <br />
                                <input type="submit" className='btn btn-info' />
                            </form>

                            <button className="btn text-white btn-outline-0 mt-3" onClick={() => setMode(s => !s)}>
                                {mode ? "Want to Login!" : "Want to Registration!"}
                            </button>
                        </div>

                        {/* Registration Bottom  */}
                        <div style={{ backgroundColor: '#21212b', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                            <h3 className="text-center text-white p-4">Radio-Widget</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;