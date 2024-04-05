import React, {useEffect, useState} from 'react';
import styles from './CurrentApplications.module.css';
import AdminTopMenu from "../AdminTopMenu/AdminTopMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import {useAuth} from "../../../hooks/useAuth";

const applicationsData = [
    { id: 1, date: '2023-01-01', type: 'Typee A', status: 'BPeending', name: 'AJohen Doe', albumNumber: '0021' },
    { id: 2, date: '2023-02-15', type: 'Type B', status: 'CAcecepted', name: 'ZJanee Smith', albumNumber: '0202' },
    { id: 1, date: '2023-01-01', type: 'Type A', status: 'Pending', name: 'BJohn Doe', albumNumber: '001' },
    { id: 2, date: '2023-02-15', type: 'Type B', status: 'Accepted', name: 'Jane Smith', albumNumber: '002' },
    // więcej danych...
];

const CurrentApplications = () => {
    useAuth();

    const [applications, setApplications] = useState(applicationsData);
    const [sortConfig, setSortConfig] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let sortedAndFilteredData = [...applicationsData];
        if (searchQuery) {
            sortedAndFilteredData = sortedAndFilteredData.filter(application => {
                return Object.values(application).some(field =>
                    field.toString().toLowerCase().includes(searchQuery.toLowerCase())
                );
            });
        }
        if (sortConfig !== null) {
            sortedAndFilteredData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }

        setApplications(sortedAndFilteredData);
    }, [sortConfig, searchQuery]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        } else if (sortConfig && sortConfig.key === key && sortConfig.direction === 'descending') {
            direction = null;
        }
        setSortConfig(direction ? { key, direction } : null);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const getSortIcon = (key) => {
        if (sortConfig && sortConfig.key === key) {
            return sortConfig.direction === 'ascending' ?
                <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />;
        }
        return <FontAwesomeIcon icon={faSort} />;
    };

    return (
        <div className="application-container">
            <AdminTopMenu/>
            <div className={styles.container}>
                <h2>Wnioski stypendialne</h2>
                <input
                    type="text"
                    placeholder="Search by any field..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className={styles.searchInput}
                />
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th className={styles.th} onClick={() => requestSort('date')}>
                            Date {getSortIcon('date')}
                        </th>
                        <th className={styles.th} onClick={() => requestSort('type')}>
                            Type {getSortIcon('type')}
                        </th>
                        <th className={styles.th} onClick={() => requestSort('status')}>
                            Status {getSortIcon('status')}
                        </th>
                        <th className={styles.th} onClick={() => requestSort('name')}>
                            Name {getSortIcon('name')}
                        </th>
                        <th className={styles.th} onClick={() => requestSort('albumNumber')}>
                            Album Number {getSortIcon('albumNumber')}
                        </th>
                        <th className={styles.th}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {applications.map((application, index) => (
                        <tr key={index}>
                            <td>{application.date}</td>
                            <td>{application.type}</td>
                            <td>{application.status}</td>
                            <td>{application.name}</td>
                            <td>{application.albumNumber}</td>
                            <td>
                                <button className={styles.button}>View</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CurrentApplications;
