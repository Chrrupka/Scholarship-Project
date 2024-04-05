import React, {useState} from 'react';
import styles from './Criteria.module.css';
import { criteria, scholarshipTypes } from "../../../data/criteriaData"; // Ensure you have this data file with a similar structure
import TopMenu from "../TopMenu/TopMenu";
import {useAuth} from "../../../hooks/useAuth"; // Ensure you have the AdminTopMenu component

const CriteriaComponent = () => {
    useAuth();

    // State to track the selected option
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (optionId) => {
        setSelectedOption(optionId);
    };

    const filteredCriteria = criteria.filter(item =>
        item.typeId && Array.isArray(item.typeId) && item.typeId.includes(selectedOption)
    );

    return (
        <div className="application-container">
            <TopMenu/>
            {selectedOption === null ? (
                <div className={styles.criteriaContainer}>
                    <h2 className={styles.instructionsHeader}>Instrukcje i wzory niezbędne do złożenia wniosku o:</h2>
                    {scholarshipTypes.map(option => (
                        <div
                            key={option.id}
                            className={styles.optionText}
                            onClick={() => handleOptionSelect(option.id)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            ) : (
            <div className={styles.criteriaContainer}>
                <button
                    className={styles.backButton}
                    onClick={() => setSelectedOption(null)}
                >
                    Powrót
                </button>
                {filteredCriteria.map(item => (
                    <div key={item.id} className={styles.criteriaItem}>
                        <h3>{item.title}</h3>
                        {item.pdfLink ? (
                            <a href={item.pdfLink} target="_blank" rel="noopener noreferrer">{item.description}</a>
                        ) : (
                            <p>{item.description}</p>
                        )}
                    </div>
                ))}
            </div>
                )}
        </div>
    );
};

export default CriteriaComponent;
