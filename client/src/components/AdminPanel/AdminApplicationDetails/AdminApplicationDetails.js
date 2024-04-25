import React, { useEffect, useState } from 'react';
import styles from './AdminApplicationDetails.module.css';
import AdminTopMenu from "../AdminTopMenu/AdminTopMenu";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../services/axiosConfig";
import { useAuth } from "../../../hooks/useAuth";
import ApiInfo from "../../../utils/apiInfo";
import { Modal, Button, Form } from 'react-bootstrap';

const AdminApplicationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    useAuth();

    const [scholarshipApplication, setScholarshipApplication]=useState({});
    const [scholarshipDetails, setScholarshipDetails]=useState([])
    const [scholarshipAttachment, setScholarshipAttachment]=useState([])
    const [scholarshipStudent, setScholarshipStudent]=useState([])

    const [showModal, setShowModal] = useState(false);
    const [newStatus, setNewStatus] = useState('');
    const [feedback, setFeedback] = useState('');

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
                setScholarshipDetails(response.data.det[0]);
                setScholarshipAttachment(response.data.att);
                setScholarshipStudent(response.data.stu[0])
            } catch (error) {
                console.error("There was an error fetching the application details:", error);
            }
        };
        fetchData();
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    const handlePrint = () => {
        window.print();
    };

    const handleChangeStatus = () => {
        setShowModal(true);
    };

    const saveChanges = async () => {
        try {
            const authToken = sessionStorage.getItem('authToken');
            const endpoint = ApiInfo.applicationEndpoints.updateById.replace('{id}', id);
            await axios.post(`${ApiInfo.baseUrl}${endpoint}`, {
                status: newStatus,
                other_details: feedback
            }, {
                headers: { Authorization: `Bearer ${authToken}` }
            });
            setShowModal(false);
            navigate(-1); // refresh or navigate away
        } catch (error) {
            console.error("Failed to save changes:", error);
        }
    };
    if (!scholarshipApplication) {
        return <div>Loading...</div>;
    }
    return (
        <div className="application-container">
            <AdminTopMenu/>
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
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Informacje dodatkowe:</span>
                        <span className={styles.dynamic}>{scholarshipDetails.other_details || 'Brak'}</span>
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
                    <Button onClick={handlePrint} variant="primary" className={styles.button}>Drukuj</Button>
                    <Button onClick={() => setShowModal(true)} variant="primary" className={styles.button}>Zmień status</Button>
                </div>

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Zmień status aplikacji</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="statusSelect">
                                <Form.Label>Status</Form.Label>
                                <Form.Control as="select" value={newStatus} onChange={e => setNewStatus(e.target.value)}>
                                    <option value="Wysłany">Wysłany</option>
                                    <option value="W trakcie rozpatrywania">W trakcie rozpatrywania</option>
                                    <option value="Odrzucony">Odrzucony</option>
                                    <option value="Zaakceptowany">Zaakceptowany</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="feedbackTextarea">
                                <Form.Label>Wpisz informacje dodatkowe</Form.Label>
                                <Form.Control as="textarea" rows={3} value={feedback} onChange={e => setFeedback(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>Zakmnij</Button>
                        <Button variant="primary" onClick={saveChanges}>Zapisz zmiany</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default AdminApplicationDetails;
