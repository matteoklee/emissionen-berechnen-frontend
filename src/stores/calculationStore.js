import { defineStore } from 'pinia';

export const useCalculationStore = defineStore('calculation', {
    state: () => ({
        //configuration questions
        hasOutsourcedLaundry: false,
        hasPrivateSpace: false,
        knowsPrivateSpaceEnergy: false,
        privateSpaceAreaPercentage: 0,
        includeVehicles: 'Default',
        includeLeakedRefrigerants: 'Default',
        usesCommonRefrigerants: false,
    }),
    getters: {
        isLaundryOutsourced: (state) => state.hasOutsourcedLaundry,
        isPrivateSpace: (state) => state.hasPrivateSpace,
        doesKnowPrivateSpaceEnergy: (state) => state.knowsPrivateSpaceEnergy,
        getPrivateSpaceAreaPercentage: (state) => state.privateSpaceAreaPercentage,
        getIncludeVehicles: (state) => state.includeVehicles,
        getIncludeLeakedRefrigerants: (state) => state.includeLeakedRefrigerants,
        doesUseCommonRefrigerants: (state) => state.usesCommonRefrigerants,
    },
    actions: {
        setHasOutsourcedLaundry(value) {
            this.hasOutsourcedLaundry = value;
        },
        setHasPrivateSpace(value) {
            this.hasPrivateSpace = value;
        },
        setKnowsPrivateSpaceEnergy(value) {
            this.knowsPrivateSpaceEnergy = value;
        },
        setPrivateSpaceAreaPercentage(value) {
            this.privateSpaceAreaPercentage = value;
        },
        setIncludeVehicles(value) {
            this.includeVehicles = value;
        },
        setIncludeLeakedRefrigerants(value) {
            this.includeLeakedRefrigerants = value;
        },
        setUsesCommonRefrigerants(value) {
            this.usesCommonRefrigerants = value;
        },

        setAnswer(key, value) {
            if (key in this) {
                this[key] = value;
            } else {
                console.warn(`Invalid key: ${key}`);
            }
        },
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
