import { defineStore } from 'pinia';

export const useCalculationStore = defineStore('calculation', {
    state: () => ({
        //configuration questions
        hasOutsourcedLaundry: null,
        hasPrivateSpace: null,
        knowsPrivateSpaceEnergy: null,
        privateSpaceAreaPercentage: 0,
        includeVehicles: 'Default',
        includeLeakedRefrigerants: 'Default',
        usesCommonRefrigerants: null,
    }),
    actions: {
        resetConfigurationAnswers() {
            this.hasOutsourcedLaundry = null;
            this.hasPrivateSpace = null;
            this.knowsPrivateSpaceEnergy = null;
            this.privateSpaceAreaPercentage = 0;
            this.includeVehicles = 'Default';
            this.includeLeakedRefrigerants = 'Default';
            this.usesCommonRefrigerants = null;
        },
    },
});
