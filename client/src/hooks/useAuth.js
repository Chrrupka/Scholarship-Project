import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (!token) {
            navigate('/signin');
        }
    }, [navigate]);
};
