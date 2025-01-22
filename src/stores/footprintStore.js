import { defineStore } from 'pinia';
import footprintService from "@/services/footprintService.js";
import {toast} from "vue-sonner";

export const useFootprintStore = defineStore('footprintStore', {
    state: () => ({
        energyTypes: [
            "PURCHASED_ENERGY_GRID",
            "DIESEL_STATIONARY",
            "PURCHASED_STEAM",
            "NATURAL_GAS",
            "PURCHASED_ELECTRICITY_PPA"
        ],
        energyUnits: ["KILOWATT_HOURS", "CUBIC_METERS", "GIGAJOULES", "LITERS"],
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
                includeVehicles: null,
                includeLeakedRefridgerants: null,
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
                toast.success('Berechnung erfolgreich durchgeführt.', {
                    description: this.getCurrentDate(),
                    duration: 5000,
                    action: {
                        label: 'Ok',
                        onClick: () => {
                        }
                    }
                });
            } catch (error) {
                this.error = 'Fehler bei der Berechnung des CO2-Fußabdrucks.';
            } finally {
                this.loading = false;
            }
        },
        getCurrentDate() {
            const currentDate = new Date();
            const options = {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            };
            return currentDate.toLocaleDateString('de-DE', options);
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
