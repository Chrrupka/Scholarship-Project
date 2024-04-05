
import axios from './axiosConfig'; // Zaimportuj skonfigurowaną instancję axios

const apiService = {
    createStudent: async (data) => {
        try {
            const response = await axios.post('/student', data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createDetails: async (data) => {
        try {
            const response = await axios.post('/details', data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createAttachment: async (formData) => {
        try {
            const response = await axios.post('/attachment', formData)
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createApplication: async (data) => {
        try {
            const response = await axios.post('/application', data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

};

export default apiService;
