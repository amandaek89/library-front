import axios from 'axios';

// Konfigurera grundläggande inställningar för Axios
const apiClient = axios.create({
    baseURL: 'http://webbooks-env.eba-v82kmmpj.eu-north-1.elasticbeanstalk.com:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Funktion för att hämta böcker
export const getAllBooks = async () => {
    try {
        const response = await apiClient.get('/books');
        return response.data; // Returnera data
    } catch (error) {
        console.error('Error fetching books:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Funktion för att hämta författare
export const getAllAuthors = async () => {
    try {
        const response = await apiClient.get('/authors');
        return response.data;
    } catch (error) {
        console.error('Error fetching authors:', error);
        throw error;
    }
};
