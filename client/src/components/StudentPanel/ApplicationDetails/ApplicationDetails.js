import React, {useEffect, useState} from 'react';
import styles from './ApplicationDetails.module.css';
import TopMenu from "../TopMenu/TopMenu";
import {useNavigate, useParams} from "react-router-dom";
import axios from "../../../services/axiosConfig";
import {useAuth} from "../../../hooks/useAuth";
import ApiInfo from "../../../utils/apiInfo"; // CSS module import

const ApplicationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Używamy useNavigate tutaj

    useAuth();
    const [scholarshipApplication, setScholarshipApplication]=useState([]);
    const [scholarshipDetails, setScholarshipDetails]=useState([])
    const [scholarshipAttachment, setScholarshipAttachment]=useState([])
    const [scholarshipStudent, setScholarshipStudent]=useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = sessionStorage.getItem('authToken');
                const endpoint = ApiInfo.applicationEndpoints.getByIdAndRemoveAndUpdate.replace('{id}', id);
                const response = await axios.get(`${ApiInfo.baseUrl}${endpoint}`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                // Przypisanie odpowiedzi do stanów
                setScholarshipApplication(response.data.app);
                setScholarshipDetails(response.data.det[0]); // Założenie, że `det` to tablica zawierająca tylko jeden obiekt
                setScholarshipAttachment(response.data.att);
                setScholarshipStudent(response.data.stu[0])// `att` jest już tablicą
            } catch (error) {
                console.error("There was an error fetching the application details:", error);
            }
        };
        fetchData();
    }, [id]);

    const handleBack = () => {
        navigate(`/news`); // Użyj ścieżki zgodnej z konfiguracją Twojego routingu
    };

    const handlePrint = () => {
        window.print();
    };
    if (!scholarshipApplication) {
        return <div>Loading...</div>; // Ekran ładowania, gdy dane są jeszcze pobierane
    }
    return (
        <div className="application-container">
            <TopMenu/>
            <div className={styles.detailsContainer}>
                <div className={styles.header}>
                    <div className={styles.actions}>
                        <button onClick={handleBack} className={styles.button}>Powrót</button>
                    </div>
                    <h1 className={styles.title}>
                        Wniosek o stypendium numer <span className={styles.dynamic}>{scholarshipApplication.id}</span>
                    </h1>
                    <div className={styles.dateStatusContainer}>
                        <p className={styles.date}>
                            Data: <span
                            className={styles.dynamic}>{new Date(scholarshipApplication.createdAt).toLocaleDateString()}</span>
                        </p>
                        <p className={styles.status}>
                            Status: <span className={styles.dynamic}>{scholarshipApplication.status}</span>
                        </p>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Imię:</span>
                        <span className={styles.dynamic}>{scholarshipStudent.name}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Nazwisko:</span>
                        <span className={styles.dynamic}>{scholarshipStudent.surname}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Pesel:</span>
                        <span className={styles.dynamic}>{scholarshipStudent.pesel}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Numer albumu:</span>
                        <span className={styles.dynamic}>{scholarshipStudent.album_id}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Adres email:</span>
                        <span className={styles.dynamic}>{scholarshipStudent.email}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Numer telefonu:</span>
                        <span className={styles.dynamic}>{scholarshipStudent.phone_number}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Adres:</span>
                        <span className={styles.dynamic}>{scholarshipStudent.address}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Specjalizacja:</span>
                        <span className={styles.dynamic}>{scholarshipDetails.specialization}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Poziom kształcenia:</span>
                        <span className={styles.dynamic}>{scholarshipDetails.education_level}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Rok studiów:</span>
                        <span className={styles.dynamic}>{scholarshipDetails.current_study_year}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>System studiów:</span>
                        <span className={styles.dynamic}>{scholarshipDetails.study_system}</span>
                    </div>
                    <div className={styles.attachments}>
                        <div className={styles.attachmentItem}>
                            <span className={styles.label}>Załączniki:</span>
                            {/* This will be a list when you have dynamic data */}
                            <ul className={styles.attachmentList}>
                                {scholarshipAttachment.map((attachment, index) => (
                                    <li key={index}>
                                        <a href={`/api/attachment/file/${attachment.id}`} className={styles.dynamic}
                                           target="_blank" rel="noopener noreferrer">
                                            {attachment.file_name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.actions}>
                    <button onClick={handlePrint} className={styles.button}>Drukuj</button>

                    <button className={styles.button}>Złóż wniosek ponownie</button>
                </div>
            </div>
        </div>
    );
}
export default ApplicationDetails;
