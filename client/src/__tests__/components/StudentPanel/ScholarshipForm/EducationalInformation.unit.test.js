
import '../../../../setupTests';
import React from 'react';
import {mount, shallow} from 'enzyme';
import PersonalInformation from "../../../../components/StudentPanel/ScholarshipForm/PersonalInformation";
import { MemoryRouter } from 'react-router-dom';

describe('PersonalInformation Component', () => {
    it('displays error message for firstName when touched and error is set', () => {
        const mockFormik = {
            values: { firstName: '' },
            errors: { firstName: 'Imię jest wymagane.' },
            touched: { firstName: true },
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );
        expect(wrapper.find('.errorMessage').text()).toEqual('Imię jest wymagane.');
    });
    it('displays error message for pesel when touched and error is set', () => {
        const mockFormik = {
            values: { pesel: '' },
            errors: { pesel: 'Pesel jest wymagany.' },
            touched: { pesel: true },
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        const personalInformationWrapper = wrapper.find('PersonalInformation');

        expect(personalInformationWrapper.find('.errorMessage').text()).toEqual('Pesel jest wymagany.');
    });
    it('displays error message for lastName when touched and error is set', () => {
        const mockFormik = {
            values: { lastName: '' },
            errors: { lastName: 'Nazwisko jest wymagane.' },
            touched: { lastName: true },
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        const personalInformationWrapper = wrapper.find('PersonalInformation');

        expect(personalInformationWrapper.find('.errorMessage').text()).toEqual('Nazwisko jest wymagane.');
    });
    it('displays error message for albumNumber when touched and error is set', () => {
        const mockFormik = {
            values: { albumNumber: '' },
            errors: { albumNumber: 'Numer albumu jest wymagany.' },
            touched: { albumNumber: true },
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        const albumNumberErrorMessage = wrapper.find('.errorMessage').filterWhere(node => node.text() === 'Numer albumu jest wymagany.');
        expect(albumNumberErrorMessage).toHaveLength(1); // Ensure only one error message is found
    });

    it('displays error message for email when touched and error is set', () => {
        const mockFormik = {
            values: { email: '' },
            errors: { email: 'Adres email jest wymagany.' },
            touched: { email: true },
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        const emailErrorMessage = wrapper.find('.errorMessage').filterWhere(node => node.text() === 'Adres email jest wymagany.');
        expect(emailErrorMessage).toHaveLength(1); // Ensure only one error message is found
    });

});
