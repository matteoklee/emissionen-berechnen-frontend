import axios from 'axios';
import {toast} from "vue-sonner";

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
            toast.error('Berechnung fehlgeschlagen.', {
                duration: 5000,
                action: {
                    label: 'Ok',
                    onClick: () => {
                    }
                }
            });
            console.error('error calculating carbon footprint:', error);
            throw error;
        }
    }
}

export default footprintService;
