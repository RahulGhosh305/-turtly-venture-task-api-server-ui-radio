import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        repassword: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    console.log("DATA: ", data)




    const handleSubmit = async (e) => {
        e.preventDefault();

        if (data.password.length && data.repassword.length < 7) {
            setError("Passwords minimum 7 characters")
            return
        }
        else if (data.password !== data.repassword) {
            setError("Password Not Match")
            return
        }

        try {
            const url = "http://localhost:5000/auth/register";
            const { data: res } = await axios.post(url, data);
            // console.log(" Response DATA: ", data)

            navigate("/login");
            // console.log(res.message, res.token);
            console.log(res);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-4 mx-auto">
                    <div className={styles.signup_container}>
                        <div className={styles.signup_form_container}>
                            <div className={styles.right}>
                                <form className={styles.form_container} onSubmit={handleSubmit}>
                                    <h1>Create Account</h1>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        onChange={handleChange}
                                        value={data.email}
                                        required
                                        className={styles.input}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange}
                                        value={data.password}
                                        required
                                        className={styles.input}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Retype-Password"
                                        name="repassword"
                                        onChange={handleChange}
                                        value={data.repassword}
                                        required
                                        className={styles.input}
                                    />
                                    {error && <div className={styles.error_msg}>{error}</div>}
                                    <button type="submit" className={styles.green_btn}>
                                        Sing Up
                                    </button>
                                    <Link to="/login">
                                        <button type="button" className={styles.white_btn}>
                                            Sing in
                                        </button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;