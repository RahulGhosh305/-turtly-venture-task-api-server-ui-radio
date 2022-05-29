import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://warm-temple-06913.herokuapp.com/auth/login";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.token);
            if (res.token) window.location = "/";
            setError(res.message);
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
                    <div className={styles.login_container}>
                        <div className={styles.login_form_container}>
                            <div className={styles.left}>
                                <form className={styles.form_container} onSubmit={handleSubmit}>
                                    <h1>Login</h1>
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
                                    {error && <div className={styles.error_msg}>{error}</div>}
                                    <button type="submit" className={styles.green_btn}>
                                        Sing In
                                    </button>

                                    <Link to="/signup">
                                        <button type="button" className={styles.white_btn}>
                                            Sing Up
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

export default Login;