import React, { useState } from 'react';
import styles from './ScholarshipForm.module.css';
import TopMenu from "../TopMenu/TopMenu";
import PersonalInformation from './PersonalInformation';
import EducationalInformation from './EducationalInformation';
import {educationalInformationSchema,personalInformationSchema} from "../../../utils/validation";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {useAuth} from "../../../hooks/useAuth";
import {convertBase64} from "../../../utils/fileUtils";
import ApiService from "../../../services/apiService";

const authToken = sessionStorage.getItem('authToken');

function getCurrentValidationSchema(step) {
    switch (step) {
        case 1:
            return Yup.object().shape({
                ...personalInformationSchema.fields,
            });
        case 2:
            return Yup.object().shape({
                ...educationalInformationSchema.fields,
            });
        default:
            return Yup.object().shape({});
    }
}


const ScholarshipForm = () => {
    useAuth();
    const [step, setStep] = useState(1);
    const [submissionStatus, setSubmissionStatus] = useState({ success: null, message: '' });


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            pesel: '',
            albumNumber: '',
            email: '',
            phoneNumber: '',
            address: '',
            specialization: '',
            studyYear: '',
            educationLevel: '',
            studySystem: '',
            type:'',
            status:'Wysłany',
            attachments: null,
        },

        validationSchema: getCurrentValidationSchema(step),
        onSubmit: async (values) => {
            try {
                const student = await submitStudent(values);
                const details = await submitDetails(values);
                const attachments = await submitAttachments(values);

                const detailsId = details.id;
                const attachmentsIds = attachments.files.map(file => file.id);
                const applicationPayload = {
                    album_id: values.albumNumber,
                    type: values.type,
                    status: values.status,
                    details_Id: detailsId,
                    attachments_Ids: attachmentsIds
                };

                const result = await ApiService.createApplication(applicationPayload);
                setSubmissionStatus({ success: true, message: 'Formularz został pomyślnie wysłany!' });

            } catch (e) {
                setSubmissionStatus({ success: false, message: 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.' });

                console.error(e);
            }
        }
    });

    const submitStudent = async (values) => {
        const studentPayload = {
            name: values.firstName,
            surname: values.lastName,
            pesel: values.pesel,
            email: values.email,
            phone_number: values.phoneNumber,
            address: values.address,
            album_id: values.albumNumber,
        };

        return await ApiService.createStudent(studentPayload);
    };

    const submitDetails = async (values) => {
        const detailsPayload = {
            specialization: values.specialization,
            education_level: values.educationLevel,
            study_system: values.studySystem,
            current_study_year: values.studyYear
        };

        return await ApiService.createDetails(detailsPayload);
    };

    const submitAttachments = async (values) => {
        const attachments = [];
        for (const file of values.attachments) {
            const base64Encoded = await convertBase64(file);
            attachments.push({file_name: file.name, file_data: base64Encoded});
        }

        const attachmentPayload = {files: attachments}
        return await ApiService.createAttachment(attachmentPayload);
    };


    const handleNext = () => {
        formik.validateForm().then((errors) => {
            console.log(errors);
            if (Object.keys(errors).length === 0) {
                setStep(currentStep => currentStep + 1);
            } else {
                formik.setTouched(
                    Object.keys(formik.values).reduce((touched, key) => {
                        touched[key] = true;
                        return touched;
                    }, {})
                );
            }
        });
    };


    const handlePrevious = () => {
        setStep(currentStep => currentStep - 1);
    };


    return (
        <div className="application-container">
            <TopMenu/>
            <div className={styles.applicationFormContainer}>

                <h2>Wniosek o stypendium</h2>
                <form onSubmit={formik.handleSubmit}>
                    {step === 1 && (
                        <PersonalInformation
                            formik={formik}
                            handleNext={handleNext}
                        />
                    )}
                    {step === 2 && (
                        <EducationalInformation
                            formik={formik}
                            handlePrevious={handlePrevious}
                        />
                    )}
                    {submissionStatus.success !== null && (
                        <div className={submissionStatus.success ? styles.successMessage : styles.errorMessage}>
                            {submissionStatus.message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};


export default ScholarshipForm;
