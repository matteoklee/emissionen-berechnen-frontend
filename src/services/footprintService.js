import axiosInstance from "@/services/axiosInstance.js";

const footprintService = {
    async calculateFootprint(payload) {
        try {
            const response = await axiosInstance.post('/hcmi', payload);
            return response.data;
        } catch (error) {
            console.error('error calculating carbon footprint:', error);
            throw error;
        }
    }
}

export default footprintService;
