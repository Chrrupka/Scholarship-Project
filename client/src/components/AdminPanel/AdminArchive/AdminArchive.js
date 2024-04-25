import React, {useEffect, useState} from 'react';
import styles from './AdminArchive.module.css';
import AdminTopMenu from "../AdminTopMenu/AdminTopMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import {useAuth} from "../../../hooks/useAuth";
import axios from "axios";
import ApiInfo from "../../../utils/apiInfo";
import {useNavigate} from "react-router-dom";

const AdminArchive = () => {
    useAuth();
    const navigate = useNavigate();
    const [applications, setApplications] = useState([]);
    const [sortConfig, setSortConfig] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = sessionStorage.getItem('authToken');
                const config = { headers: { Authorization: `Bearer ${authToken}` } };
                // Fetch applications
                const applicationsResponse = await axios.get(`${ApiInfo.baseUrl}${ApiInfo.applicationEndpoints.all}`, config);

                if (applicationsResponse.data) {
                    const filteredApplications = applicationsResponse.data.filter(app =>
                        app.status === 'Zaakceptowany' || app.status === 'Odrzucony'
                    );
                    const studentsResponse = await axios.get(`${ApiInfo.baseUrl}/students`, config);
                    const detailsResponse = await axios.get(`${ApiInfo.baseUrl}/details`, config);

                    const students = studentsResponse.data;
                    const details = detailsResponse.data;


                    const applicationsWithStudentInfo = filteredApplications.map(application => {

                        const student = students.find(s => {
                            return s.applicationId === application.id;
                        });
                        const studentDetails = details.find(s => {
                            return s.applicationId === application.id;
                        }); // Adapt this line to match how you access the details

                        const fullName = student ? `${student.surname} ${student.name}` : 'Nie przypisany';
                        const specialization = studentDetails ? studentDetails.specialization : 'Nie przypisana';

                        return {
                            ...application,
                            album_id: student ? student.album_id : 'Nie przypisany',
                            fullName: fullName,
                            specialization: specialization

                        };
                    });

                    setApplications(applicationsWithStudentInfo);
                }
            } catch (error) {
                console.error("Error fetching applications:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let sortedApplications = [...applications];

        if (sortConfig !== null) {
            sortedApplications.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }

        if (searchQuery) {
            sortedApplications = sortedApplications.filter(application =>
                Object.values(application).some(value =>
                    value.toString().toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }

        setApplications(sortedApplications);
    }, [sortConfig, searchQuery]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        } else if (sortConfig && sortConfig.key === key && sortConfig.direction === 'descending') {
            direction = null; // Reset sort when clicking third time
        }
        setSortConfig({ key, direction });
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const getSortIcon = (key) => {
        if (!sortConfig || sortConfig.key !== key) {
            return <FontAwesomeIcon icon={faSort} />;
        }
        return sortConfig.direction === 'ascending' ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />;
    };
    const handleViewDetails = (id) => {
        navigate(`/admin_details/${id}`);
    };

    return (
        <div className="admin-application-container">
            <AdminTopMenu/>
            <div className={styles.container}>
                <h2>Archiwalne wnioski stypendialne</h2>
                <input
                    type="text"
                    placeholder="Szukaj..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className={styles.searchInput}
                />

                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th className={styles.th} onClick={() => requestSort('id')}>Id
                            stypendium {getSortIcon('id')}</th>
                        <th className={styles.th} onClick={() => requestSort('date')}>Data {getSortIcon('date')}</th>
                        <th className={styles.th} onClick={() => requestSort('fullName')}>Imię i
                            Nazwisko {getSortIcon('fullName')}</th>
                        <th className={styles.th} onClick={() => requestSort('student.album_id')}>Numer
                            albumu {getSortIcon('student.album_id')}</th>
                        <th className={styles.th}
                            onClick={() => requestSort('specialization')}>Specjalizacja {getSortIcon('specialization')}</th>

                        <th className={styles.th} onClick={() => requestSort('type')}>Typ {getSortIcon('type')}</th>
                        <th className={styles.th}
                            onClick={() => requestSort('status')}>Status {getSortIcon('status')}</th>

                        <th className={styles.th}>Akcje</th>
                    </tr>
                    </thead>
                    <tbody>
                    {applications.map((application, index) => (
                        <tr key={index}>
                            <td>{application.id}</td>
                            <td>{new Date(application.createdAt).toLocaleDateString()}</td>
                            <td>{application.fullName}</td>
                            <td>{application.album_id}</td>
                            <td>{application.specialization}</td>
                            <td>{application.type}</td>
                            <td>{application.status}</td>

                            <td>
                                <button className={styles.button}
                                        onClick={() => handleViewDetails(application.id)}>Zobacz
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
export default AdminArchive;
