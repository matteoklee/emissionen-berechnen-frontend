import { defineStore } from 'pinia';
import footprintService from "@/services/footprintService.js";

export const useFootprintStore = defineStore('footprintStore', {
    state: () => ({
        formData: {
            contactInfo: {
                name: '',
                jobTitle: '',
                endOfReportingYear: '',
                hotelName: '',
                hotelGroupName: '',
                address: {
                    street: '',
                    hnr: '',
                    city: '',
                    state: '',
                    postcode: '',
                    country: '',
                },
            },
            configuration: {
                hasOutsourcedLaundry: false,
                hasPrivateSpace: false,
                knowsPrivateSpaceEnergyConsumption: false,
                includeVehicles: 'IGNORE',
                includeLeakedRefridgerants: 'IGNORE',
                usesCommonRefridgerants: false,
            },
            hotelDetails: {
                guestRoomArea: 0,
                meetingArea: 0,
                conditionedArea: 0,
                roomCount: 0,
                totalOccupiedRooms: 0,
                privateSpacePercentage: 0,
            },
            energyConsumptions: [],
            outsourcedLaundry: {
                laundryTonnage: 0,
                laundryEnergyConsumptions: [],
            },
            renewableEnergyPurchases: [],
            manualEmissionFactors: [],
            refridgerants: [],
        },
        result: null,
        loading: false,
        error: null,
    }),

    actions: {
        async calculateFootprint() {
            this.loading = true;
            this.error = null;
            try {
                const response = await footprintService.calculateFootprint(this.formData);
                this.result = response;
            } catch (error) {
                this.error = 'Fehler bei der Berechnung des CO2-Fußabdrucks.';
            } finally {
                this.loading = false;
            }
        },

        resetFormData() {
            this.formData = {
                contactInfo: { /* wie oben definiert */ },
                configuration: { /* wie oben definiert */ },
                hotelDetails: { /* wie oben definiert */ },
                energyConsumptions: [],
                outsourcedLaundry: { laundryTonnage: 0, laundryEnergyConsumptions: [] },
                renewableEnergyPurchases: [],
                manualEmissionFactors: [],
                refridgerants: [],
            };
        },
    },
});
