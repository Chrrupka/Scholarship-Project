import '../../../../setupTests';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import EducationalInformation from "../../../../components/StudentPanel/ScholarshipForm/EducationalInformation";
import { educationLevels, specializations, studyYears, studySystems } from '../../../../data/formData';

describe('EducationalInformation Component Integration Tests', () => {
    let mockFormik;

    beforeEach(() => {
        mockFormik = {
            values: {
                specialization: '',
                educationLevel: '',
                studyYear: '',
                studySystem: '',
            },
            errors: {},
            touched: {},
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
        };
    });

    it('invokes handleChange when the education level select field is changed', () => {
        const wrapper = mount(
            <MemoryRouter>
                <EducationalInformation formik={mockFormik} handlePrevious={() => {}} />
            </MemoryRouter>
        );

        wrapper.find('#educationLevel').simulate('change', { target: { name: 'educationLevel', value: educationLevels[0] } });
        expect(mockFormik.handleChange).toHaveBeenCalled();
    });

    it('renders specialization select with all options provided', () => {
        const wrapper = mount(
            <MemoryRouter>
                <EducationalInformation formik={mockFormik} handlePrevious={() => {}} />
            </MemoryRouter>
        );

        expect(wrapper.find('#specialization option')).toHaveLength(specializations.length + 1);
    });

    it('shows error message for studyYear when it is touched and there is an error', () => {
        mockFormik.touched.studyYear = true;
        mockFormik.errors.studyYear = 'Study year is required';

        const wrapper = mount(
            <MemoryRouter>
                <EducationalInformation formik={mockFormik} handlePrevious={() => {}} />
            </MemoryRouter>
        );

        expect(wrapper.text()).toContain('Study year is required');
    });

    it('correctly updates the formik state when the study system is changed', () => {
        const wrapper = mount(
            <MemoryRouter>
                <EducationalInformation formik={mockFormik} handlePrevious={() => {}} />
            </MemoryRouter>
        );

        wrapper.find('#studySystem').simulate('change', { target: { name: 'studySystem', value: studySystems[0] } });
        expect(mockFormik.handleChange).toHaveBeenCalled();
    });

    it('displays all education level options correctly based on provided data', () => {
        const wrapper = mount(
            <MemoryRouter>
                <EducationalInformation formik={mockFormik} handlePrevious={() => {}} />
            </MemoryRouter>
        );

        expect(wrapper.find('#educationLevel option')).toHaveLength(educationLevels.length + 1);
    });
});
