<template>
  <div class="px-8 my-4">
    {{this.footprintStore.formData.contactInfo}}
  </div>
  <div class="px-8 my-4">
    {{this.footprintStore.formData.hotelDetails}}
  </div>
  <div class="px-8 my-4">
    {{this.footprintStore.formData.configuration}}
  </div>
  <div class="px-8 my-4">
    {{this.footprintStore.formData.energyConsumptions}}
  </div>
  <div class="px-8 my-4">
    {{this.footprintStore.formData.renewableEnergyPurchases}}
  </div>
  <div class="px-8 my-4">
    {{this.footprintStore.formData.outsourcedLaundry}}
  </div>
  <div class="px-8 my-4">
    {{this.footprintStore.formData.refridgerants}}
  </div>
  <div class="px-8 my-4">
    {{this.footprintStore.formData.manualEmissionFactors}}
  </div>
  <div class="bg-green-100 p-8 text-lg mb-4">
    {{result}}
  </div>
  <div class="bg-green-100 p-8 text-lg">
    {{this.footprintStore.result}}
  </div>
</template>

<script>
import {useFootprintStore} from "@/stores/footprintStore.js";

export default {
  name: "CalculationResult",
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      result: this.footprintStore.result,
    }
  }
}
</script>

<style scoped>

</style>
