import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api/v1/hcmi',
    timeout: 5000
});

const footprintService = {
    async calculateFootprint(payload) {
        try {
            const response = await axiosInstance.post('', payload);
            return response.data;
        } catch (error) {
            console.error('error calculating carbon footprint:', error);
            throw error;
        }
    }
}

export default footprintService;
