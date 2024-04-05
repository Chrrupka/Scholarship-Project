/*
import React from 'react';
import styles from './AdminApplicationDetails.module.css';
import TopMenu from "../../TopMenu/TopMenu";

const AdminApplicationDetails = () => {
    // Hardcoded data as placeholders for the backend data
    const applicationData = {
        number: '0032300023', // Placeholder, will be dynamic
        status: 'Pending', // Placeholder for status, will be dynamic
        date: '02.02.2021', // Placeholder, will be dynamic
        name: 'Anna', // Placeholder, will be dynamic
        surname: 'Kowal', // Placeholder, will be dynamic
        pesel: '95091502222', // Placeholder, will be dynamic
        albumNumber: 'Kowal', // Placeholder, will be dynamic
        email: 'kowal@example.com', // Placeholder, will be dynamic
        phone: 'Kowal', // Placeholder, will be dynamic
        address: 'Kowal', // Placeholder, will be dynamic
        specialization: 'Kowal', // Placeholder, will be dynamic
        levelOfEducation: 'Kowal', // Placeholder, will be dynamic
        yearOfStudy: 'Kowal', // Placeholder, will be dynamic
        systemOfStudy: 'Kowal', // Placeholder, will be dynamic
        attachments: [
            {id: 1, name: 'Załącznik 1', link: '#'}, // Placeholder, will be dynamic
            {id: 2, name: 'Załącznik 2', link: '#'}, // Placeholder, will be dynamic
        ],
    };

    return (
        <div className="application-container">
            <TopMenu/>
            <div className={styles.detailsContainer}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Wniosek o stypendium socjalne numer <span className={styles.dynamic}>0032300023</span>
                    </h1>
                    <div className={styles.dateStatusContainer}>
                        <p className={styles.date}>
                            Data: <span className={styles.dynamic}>02.02.2021</span>
                        </p>
                        <p className={styles.status}>
                            Status: <span className={styles.dynamic}>{applicationData.status}</span>
                        </p>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Imię:</span>
                        <span className={styles.dynamic}>Anna</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>Nazwisko:</span>
                    <span className={styles.dynamic}>Kowal</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>Pesel:</span>
                    <span className={styles.dynamic}>95091502222</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>Numer albumu:</span>
                    <span className={styles.dynamic}>Kowal</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>Adres email:</span>
                    <span className={styles.dynamic}>kowal@example.com</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>Numer telefonu:</span>
                    <span className={styles.dynamic}>Kowal</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>Adres:</span>
                    <span className={styles.dynamic}>Kowal</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>Specjalizacja:</span>
                    <span className={styles.dynamic}>Kowal</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>Poziom kształcenia:</span>
                    <span className={styles.dynamic}>Kowal</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>Rok studiów:</span>
                    <span className={styles.dynamic}>Kowal</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>System studiów:</span>
                    <span className={styles.dynamic}>Kowal</span>
                </div>
                <div className={styles.attachments}>
                    <div className={styles.attachmentItem}>
                        <span className={styles.label}>Załączniki:</span>
                        <ul className={styles.attachmentList}>
                            <li>
                                <a href="#" className={styles.dynamic}>Załącznik 1</a>
                            </li>
                            <li>
                                <a href="#" className={styles.dynamic}>Załącznik 2</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.button}>Powrót</button>
                <button className={styles.button}>Złóż wniosek ponownie</button>
            </div>
            </div>
        </div>
    );
}
export default AdminApplicationDetails;
*/
