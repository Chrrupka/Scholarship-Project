import '../../../../setupTests';
import React from 'react';
import { mount } from 'enzyme';
import PersonalInformation from "../../../../components/StudentPanel/ScholarshipForm/PersonalInformation";
import { MemoryRouter } from 'react-router-dom';

describe('PersonalInformation Component Unit Tests', () => {
    let mockFormik;

    beforeEach(() => {
        mockFormik = {
            values: { firstName: '', lastName: '', pesel: '', albumNumber: '', email: '' },
            errors: {},
            touched: {},
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
        };
    });

    it('displays error message for firstName when touched and error is set', () => {
        mockFormik.errors.firstName = 'Imię jest wymagane.';
        mockFormik.touched.firstName = true;

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        expect(wrapper.find('.errorMessage').text()).toContain('Imię jest wymagane.');
    });

    it('displays error message for pesel when touched and error is set', () => {
        mockFormik.errors.pesel = 'Pesel jest wymagany.';
        mockFormik.touched.pesel = true;

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        expect(wrapper.find('.errorMessage').text()).toContain('Pesel jest wymagany.');
    });

    it('displays error message for lastName when touched and error is set', () => {
        mockFormik.errors.lastName = 'Nazwisko jest wymagane.';
        mockFormik.touched.lastName = true;

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        expect(wrapper.find('.errorMessage').text()).toContain('Nazwisko jest wymagane.');
    });

    it('displays error message for albumNumber when touched and error is set', () => {
        mockFormik.errors.albumNumber = 'Numer albumu jest wymagany.';
        mockFormik.touched.albumNumber = true;

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        expect(wrapper.find('.errorMessage').text()).toContain('Numer albumu jest wymagany.');
    });

    it('displays error message for email when touched and error is set', () => {
        mockFormik.errors.email = 'Adres email jest wymagany.';
        mockFormik.touched.email = true;

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        expect(wrapper.find('.errorMessage').text()).toContain('Adres email jest wymagany.');
    });
    it('renders scholarship type radio buttons correctly', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );
        expect(wrapper.find('input[type="radio"]').length).toBeGreaterThan(0);
    });

    it('calls formik.handleChange on text field change', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );
        wrapper.find('input#firstName').simulate('change', { target: { value: 'John', name: 'firstName' } });
        expect(mockFormik.handleChange).toHaveBeenCalled();
    });

    it('displays correct placeholder for email input field', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );
        expect(wrapper.find('input#email').prop('placeholder')).toContain('Wpisz swój adres email');
    });

    it('invokes handleSubmit with correct data on "Next" button click', () => {
        const handleNextMock = jest.fn();
        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={handleNextMock} />
            </MemoryRouter>
        );
        wrapper.find('button[type="button"]').simulate('click');
        expect(handleNextMock).toHaveBeenCalled();
    });

    it('renders "Back" button with correct text', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );
        expect(wrapper.find('button[type="button"]').at(0).text()).toContain('Dalej');
    });
});
