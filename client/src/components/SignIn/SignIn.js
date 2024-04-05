import React, { useState } from 'react';
import styles from './SignIn.module.css';
import logo from "../../assets/logo.png";
import axios from "axios";
import ApiInfo from "../../utils/apiInfo";
import {useNavigate} from "react-router-dom";


const SignIn = () => {
    const [error, setError] = useState("");
    const [loginData, setLoginData] = useState({
        login: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);
        axios.post(ApiInfo.baseUrl + ApiInfo.userEndpoint.auth, loginData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

            .then(response => {
                if(response.data.token) {
                    console.log("Login success", response.data);
                    sessionStorage.setItem('authToken', response.data.token);
                    //sessionStorage.removeItem()
// Zapisz token w sessionStorage
                    if(loginData.login === 'admin@gmail.com') {
                        navigate('/admin_applications');
                    } else {
                        navigate('/news');
                    }                } else {
                    console.error("Login failed: No token received");
                    setError("Błąd logowania: nie otrzymano tokena.");
                }
            })
            .catch(error => {
                if (error.response) {
                    console.error("Login failed", error.response.status, error.response.data);
                    setError(`Logowanie nieudane. Sprawdź swoją nazwę użytkownika i hasło.`);
                } else if (error.request) {
                    console.error("No response received", error.request);
                    setError("Logowanie nieudane. Serwer nie odpowiada.");
                } else {
                    console.error("Error", error.message);
                    setError("Logowanie nieudane. Nieoczekiwany błąd.");
                }
            });
    };


    return (
        <div className="application-container">
            <nav className={styles.topMenu}>
                <img src={logo} className={styles.logo} alt="Akademia Tarnowska Logo"/>
            </nav>
            <div className={styles.applicationFormContainer}>
                <h2>Logowanie</h2>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.formRow}>
                        <label htmlFor="login">Nazwa użytkownika</label>
                        <input
                            id="login"
                            name="login"
                            type="text"
                            value={loginData.login}
                            onChange={handleChange}
                            placeholder="Nazwa użytkownika"
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label htmlFor="password">Hasło</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={loginData.password}
                            onChange={handleChange}
                            placeholder="Hasło"
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formActions}>
                        <button type="submit" className={styles.button}>Zaloguj się</button>

                    </div>
                    {error && <div className={styles.error}>{error}</div>}
                </form>
            </div>
        </div>
    );
};



export default SignIn;
