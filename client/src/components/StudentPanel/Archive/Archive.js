// Archive.js
import React, { useEffect, useState } from 'react';
import styles from './Archive.module.css';
import TopMenu from "../TopMenu/TopMenu";
import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ApiInfo from "../../../utils/apiInfo";

const Archive = () => {
    const [scholarshipData, setScholarshipData] = useState([]);
    const navigate = useNavigate();
    useAuth();

    useEffect(() => {
        axios.get(ApiInfo.baseUrl + ApiInfo.applicationEndpoints.all)
            .then(response => {
                const filteredData = response.data.filter(item => item.status === 'Odrzucony' || item.status === 'Zaakceptowany');
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
            <div className={styles.archiveContainer}>
                <h2>Archiwum Stypendiów</h2>
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

export default Archive;
