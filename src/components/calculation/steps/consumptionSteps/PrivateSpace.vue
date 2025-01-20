<template>
  <div class="w-full">
    <div class="border rounded-lg p-8">
      <div class="flex justify-between items-center mb-4">
        <p class="font-medium">Haben Sie private Räumlichkeiten, welche nicht für den Hotelbetrieb genutzt werden?</p>
        <div class="flex justify-end items-center">
          <Label for="submit" class="">Nein</Label>
          <Switch id="submit" v-model:checked="hasPrivateSpace" @update:checked="updateHasPrivateSpace($event)" class="data-[state=checked]:bg-black mx-2" />
          <Label for="submit" class="">Ja</Label>
        </div>
      </div>
      <div v-if="hasPrivateSpace">
        <div class="flex justify-between items-center mb-4">
          <p class="font-medium">Are you able to provide the energy consumption of the private space?</p>
          <div class="flex justify-end items-center">
            <Label for="submit" class="">Nein</Label>
            <Switch id="submit" v-model:checked="knowsPrivateSpaceEnergyConsumption" @update:checked="updateKnowsPrivateSpaceEnergyConsumption($event)" class="data-[state=checked]:bg-black mx-2" />
            <Label for="submit" class="">Ja</Label>
          </div>
        </div>
      </div>

      <div v-if="hasPrivateSpace && knowsPrivateSpaceEnergyConsumption" class="mb-4">
        <EnergyTable
            :rows="rows"
            :energyTypes="energyTypes"
            :units="units"
            @add-row="addRow"
            @delete-row="deleteRow"
        />
      </div>
      <div v-if="hasPrivateSpace && !knowsPrivateSpaceEnergyConsumption">
        <div class="flex flex-col">
          <p class="font-medium mb-4">Are you able to provide the area of private space as a % of the total conditioned area?</p>
          <div class="flex items-center">
            <Input id="input" type="number" placeholder="5" v-model="privateSpacePercentage" @update:model-value="updatePrivateSpacePercentage($event)" class="mr-2" /> <!-- @update:model-value="answerQuestion(item, $event)" -->
            <Label for="input" class="">m²</Label>
          </div>
        </div>
      </div>
    </div>
  </div>

  Store: {{this.footprintStore.formData.configuration.hasPrivateSpace}}
  Lokal: {{hasPrivateSpace}}
</template>

<script>
import Switch from "@/components/ui/switch/Switch.vue";
import Label from "@/components/ui/label/Label.vue";
import {useFootprintStore} from "@/stores/footprintStore.js";
import EnergyTable from "@/components/calculation/util/EnergyTable.vue";
import Input from "@/components/ui/input/Input.vue";

export default {
  name: "PrivateSpace",
  components: {Input, EnergyTable, Label, Switch},
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      hasPrivateSpace: this.footprintStore.formData.configuration.hasPrivateSpace,
      knowsPrivateSpaceEnergyConsumption: this.footprintStore.formData.configuration.knowsPrivateSpaceEnergyConsumption,
      privateSpacePercentage: this.footprintStore.formData.hotelDetails.privateSpacePercentage,

      energyTypes: [
        "Purchased Electricity (Grid)",
        "Natural Gas",
        "Solar Energy",
        "Wind Energy",
        "Hydropower"
      ],
      units: ["kWh", "m³", "GJ", "liters"],
      rows: [
        {
          energyType: "Purchased Electricity (Grid)",
          unit: "kWh",
          totalConsumption: 11,
          privateSpaceActual: 200,
        },
        {
          energyType: "Natural Gas",
          unit: "m³",
          totalConsumption: 88,
          privateSpaceActual: 100,
        }
      ]
    }
  },
  methods: {
    updateHasPrivateSpace(value) {
      this.footprintStore.formData.configuration.hasPrivateSpace = value;
    },
    updateKnowsPrivateSpaceEnergyConsumption(value) {
      this.footprintStore.formData.configuration.knowsPrivateSpaceEnergyConsumption = value;
    },
    updatePrivateSpacePercentage(value) {
      this.footprintStore.formData.hotelDetails.privateSpacePercentage = value;
    },

    addRow() {
      this.rows.push({
        energyType: "",
        unit: "",
        totalConsumption: 0,
        privateSpaceActual: 0,
      });
    },
    deleteRow(index) {
      this.rows.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>
