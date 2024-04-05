import '../../../../setupTests';
import React from 'react';
import { mount } from 'enzyme';
import PersonalInformation from "../../../../components/StudentPanel/ScholarshipForm/PersonalInformation";
import { MemoryRouter } from 'react-router-dom';

describe('PersonalInformation Component Integration Tests', () => {
    let mockFormik;

    beforeEach(() => {
        mockFormik = {
            values: {
                firstName: '',
                lastName: '',
                pesel: '',
                albumNumber: '',
                email: '',
                phoneNumber: '',
                address: '',
                type: 'Rektorskie',
            },
            errors: {},
            touched: {},
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
            isSubmitting: false,
        };
    });

    it('disables the "Next" button when the form is submitting', () => {
        mockFormik.isSubmitting = true;

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        expect(wrapper.find('button[type="button"]').props().disabled).toBe(true);
    });

    it('calls handleSubmit function when the "Next" button is clicked', () => {
        const mockHandleNext = jest.fn();

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={mockHandleNext} />
            </MemoryRouter>
        );

        wrapper.find('button[type="button"]').simulate('click');
        expect(mockHandleNext).toHaveBeenCalledTimes(1);
    });

    it('correctly updates the formik values when the input fields are changed', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        const input = wrapper.find('input[name="firstName"]');
        input.simulate('change', { target: { name: 'firstName', value: 'Jan' } });
        expect(mockFormik.handleChange).toHaveBeenCalled();
    });

    it('shows error message when there is an error in a field and it was touched', () => {
        mockFormik.errors.firstName = 'Imię jest wymagane';
        mockFormik.touched.firstName = true;

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        const errorMessage = wrapper.find('.errorMessage').first().text();
        expect(errorMessage).toContain('Imię jest wymagane');
    });

    it('renders radio buttons for scholarship types and allows selection', () => {
        mockFormik.values.type = '';

        const wrapper = mount(
            <MemoryRouter>
                <PersonalInformation formik={mockFormik} handleNext={() => {}} />
            </MemoryRouter>
        );

        const rektorskieRadio = wrapper.find('input[value="rectors"]');
        rektorskieRadio.simulate('change', { target: { name: 'type', value: 'rectors' } });

        expect(mockFormik.handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: expect.objectContaining({ value: 'rectors' }) }));
    });
});
