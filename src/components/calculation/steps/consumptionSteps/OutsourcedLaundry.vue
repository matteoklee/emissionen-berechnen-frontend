<template>
  <div class="w-full">
    <div class="border rounded-lg p-8">
      <div class="flex justify-between items-center mb-4">
        <p class="font-medium">Lassen Sie Ihre Wäsche extern waschen? </p>
        <div class="flex justify-end items-center">
          <Label for="submit" class="">Nein</Label>
          <Switch id="submit" v-model:checked="hasOutsourcedLaundry" @update:checked="updateHasOutsourcedLaundry($event)" class="data-[state=checked]:bg-black mx-2" />
          <Label for="submit" class="">Ja</Label>
        </div>
      </div>
      <div v-if="hasOutsourcedLaundry === true">
        <div class="flex justify-between items-center mb-4">
          <p class="font-medium">Can you get your share of the energy consumption from your laundry contractor for the reporting year?</p>
          <div class="flex justify-end items-center">
            <Label for="submit" class="">Nein</Label>
            <Switch id="submit" v-model:checked="knowsOutsourcedLaundryConsumption" class="data-[state=checked]:bg-black mx-2" />
            <Label for="submit" class="">Ja</Label>
          </div>
        </div>
      </div>

      <div v-if="hasOutsourcedLaundry === true && knowsOutsourcedLaundryConsumption" class="mb-4">
        <EnergyTable
            :rows="laundryEnergyConsumptions"
            :energyTypes="energyTypes"
            :units="units"
            @add-row="addRow"
            @delete-row="deleteRow"
        />
      </div>
      <div v-if="hasOutsourcedLaundry === true && !knowsOutsourcedLaundryConsumption">
        <div class="flex justify-between items-center mb-4">
          <p class="font-medium">Do you know your laundry tonnage?</p>
          <div class="flex justify-end items-center">
            <Label for="submit" class="">Nein</Label>
            <Switch id="submit" v-model:checked="knowsLaundryTonnage" class="data-[state=checked]:bg-black mx-2" />
            <Label for="submit" class="">Ja</Label>
          </div>
        </div>
      </div>
      <div v-if="hasOutsourcedLaundry && !knowsOutsourcedLaundryConsumption && knowsLaundryTonnage">
        <div class="flex flex-col">
          <p class="font-medium mb-4">Please enter your laundry tonnage.</p>
          <div class="flex items-center">
            <Input id="input" type="number" placeholder="5" v-model="laundryTonnage" @update:model-value="updateLaundryTonnage($event)" class="mr-2" /> <!-- @update:model-value="answerQuestion(item, $event)" -->
            <Label for="input" class="">m²</Label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Label from "@/components/ui/label/Label.vue";
import Switch from "@/components/ui/switch/Switch.vue";
import {useFootprintStore} from "@/stores/footprintStore.js";
import EnergyTable from "@/components/calculation/util/EnergyTable.vue";
import Input from "@/components/ui/input/Input.vue";

export default {
  name: "OutsourcedLaundry",
  components: {Input, EnergyTable, Switch, Label},
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      hasOutsourcedLaundry: this.footprintStore.formData.configuration.hasOutsourcedLaundry,
      knowsOutsourcedLaundryConsumption: false,
      knowsLaundryTonnage: false,
      laundryTonnage: this.footprintStore.formData.outsourcedLaundry.laundryTonnage,
      laundryEnergyConsumptions: this.footprintStore.formData.outsourcedLaundry.laundryEnergyConsumptions,

      energyTypes: [
        "Purchased Electricity (Grid)",
        "Natural Gas",
        "Solar Energy",
        "Wind Energy",
        "Hydropower"
      ],
      units: ["kWh", "m³", "GJ", "liters"],
    }
  },
  methods: {
    updateHasOutsourcedLaundry(value) {
      this.footprintStore.formData.configuration.hasOutsourcedLaundry = value;
    },
    updateLaundryTonnage(value) {
      this.footprintStore.formData.outsourcedLaundry.laundryTonnage = value;
    },

    addRow() {
      this.footprintStore.formData.outsourcedLaundry.laundryEnergyConsumptions.push({
        type: "",
        unit: "",
        totalConsumption: 0,
        actualPrivateSpaceConsumption: 0,
      });
    },
    deleteRow(index) {
      this.footprintStore.formData.outsourcedLaundry.laundryEnergyConsumptions.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>
