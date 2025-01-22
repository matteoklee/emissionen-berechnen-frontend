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
      <div v-if="hasPrivateSpace === true">
        <div class="flex justify-between items-center mb-4">
          <p class="font-medium">Sind Sie in der Lage den Energieverbrauch der privaten Räumlichkeiten anzugeben?</p>
          <div class="flex justify-end items-center">
            <Label for="submit" class="">Nein</Label>
            <Switch id="submit" v-model:checked="knowsPrivateSpaceEnergyConsumption" @update:checked="updateKnowsPrivateSpaceEnergyConsumption($event)" class="data-[state=checked]:bg-black mx-2" />
            <Label for="submit" class="">Ja</Label>
          </div>
        </div>
      </div>

      <div v-if="hasPrivateSpace === true && knowsPrivateSpaceEnergyConsumption" class="mb-4">
        <EnergyTable
            :rows="energyConsumptions"
            :energyTypes="energyTypes"
            :units="energyUnits"
            :privateSpace="false"
            @add-row="addRow"
            @delete-row="deleteRow"
        />
      </div>
      <div v-if="hasPrivateSpace === true && !knowsPrivateSpaceEnergyConsumption">
        <div class="flex flex-col">
          <p class="font-medium mb-4">Können Sie den Anteil der privaten Räumlichkeiten an der gesamten klimatisierten Fläche als Prozentsatz angeben?</p>
          <div class="flex items-center">
            <Input id="input" type="number" placeholder="5" v-model="privateSpacePercentage" @update:model-value="updatePrivateSpacePercentage($event)" class="mr-2" /> <!-- @update:model-value="answerQuestion(item, $event)" -->
            <Label for="input" class="">%</Label>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      energyConsumptions: this.footprintStore.formData.energyConsumptions,
      energyTypes: this.footprintStore.energyTypes,
      energyUnits: this.footprintStore.energyUnits,
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
      this.footprintStore.formData.energyConsumptions.push({
        type: "",
        unit: "",
        totalConsumption: 0,
        actualPrivateSpaceConsumption: 0,
      });
    },
    deleteRow(index) {
      this.footprintStore.formData.energyConsumptions.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>
