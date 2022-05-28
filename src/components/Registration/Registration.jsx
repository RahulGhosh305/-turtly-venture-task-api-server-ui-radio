import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../navigation/AuthContext';

const Registration = () => {
    const { isLoggedIn, setIsLoggedIn, storeToken } = useContext(AuthContext)
    const [mode, setMode] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    // console.log(mode)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            retypePassword: ""
        }
    });


    const onSubmit = values => {
        // console.log(values)
        if (mode) {
            if (values.password.length < 5) {
                return alert("Passwords minimum 4 characters")
            }
            else if (values.password !== values.retypePassword) {
                return alert("Password Not Match")
            }
        }

        const data = {
            email: values.email,
            password: values.password
        }
        // console.log(data)

        if (mode) {
            // Register
            fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(res => res.json())
                .then(data => {
                    alert(data)
                    setMode(s => !s)
                    resetField("email")
                    resetField("password")
                    resetField("retypePassword")
                })

        } else {
            // Login
            fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data.token)
                    let token = data.token
                    if (token) {
                        localStorage.setItem('idToken', token)
                        storeToken()
                    }

                    navigate('/')
                    setErrorMessage(data.message)
                    resetField("email")
                    resetField("password")
                    resetField("retypePassword")
                })
        }

    };

    const handleMode = () => {
        setMode(s => !s)
        setErrorMessage("")
        resetField("email")
        resetField("password")
        resetField("retypePassword")
    }

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

                            <button className="btn text-white btn-outline-0 mt-3" onClick={() => handleMode()}>
                                {mode ? "Want to Login!" : "Want to Registration!"}
                            </button>


                            {
                                errorMessage && <h5 className="text-center text-white mt-5">{errorMessage}</h5>
                            }

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