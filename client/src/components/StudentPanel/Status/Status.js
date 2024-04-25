import React, {useEffect, useState} from 'react';
import styles from './Status.module.css';
import TopMenu from "../TopMenu/TopMenu";
import axios from "../../../services/axiosConfig";
import {useAuth} from "../../../hooks/useAuth";
import {useNavigate, useParams} from "react-router-dom";
import ApiInfo from "../../../utils/apiInfo";

const Status = () => {
    const { id } = useParams();
    const [scholarshipData, setScholarshipData] = useState([]);
    const [scholarshipStudent, setScholarshipStudent] = useState([]);
    const navigate = useNavigate();

    useAuth();

    useEffect(() => {
        axios.get(ApiInfo.baseUrl + ApiInfo.applicationEndpoints.all)
            .then(response => {
                const filteredData = response.data
                    .filter(item => item.status === 'Wysłany' || item.status === 'W takcie rozpatrywania')
                    .slice(0, 3);
                setScholarshipData(filteredData);
            })
            .catch(error => {
                console.error("There was an error fetching the scholarship data:", error);
            });
    }, []);


    const handleViewDetails = (id) => {
        navigate(`/details/${id}`);
    };

    return (
        <div className="application-container">
            <TopMenu/>
            <div className={styles.statusContainer}>
                <h2>Złożone aplikacje o stypendium</h2>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th className={styles.th}>Id stypendium</th>
                        <th className={styles.th}>Data</th>
                        <th className={styles.th}>Rodzaj</th>
                        <th className={styles.th}>Status</th>
                        <th className={styles.th}>Akcje</th>
                    </tr>
                    </thead>
                    <tbody>
                    {scholarshipData.map((item) => (
                        <tr key={item.id}>
                            <td className={styles.td}>{item.id}</td>
                            <td className={styles.td}>{new Date(item.createdAt).toLocaleDateString()}</td>
                            <td className={styles.td}>{item.type}</td>
                            <td className={styles.td}>{item.status}</td>
                            <td className={styles.td}>
                                <button className={styles.button}
                                        onClick={() => handleViewDetails(item.id)}>Zobacz
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Status;
