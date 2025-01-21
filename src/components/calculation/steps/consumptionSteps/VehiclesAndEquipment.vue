<template>
  <div class="w-full">
    <div class="border rounded-lg p-8">
      <div class="mb-4">
        <p class="font-medium mb-4">Möchten Sie den Kraftstoffverbrauch aller Fahrzeuge und anderer Geräte (z. B. Gartengeräte) berücksichtigen?</p>
        <Select id="select" class="" v-model="includeVehicles" @update:model-value="update($event)"> <!-- @update:model-value="update(item, $event)"  -->
          <SelectTrigger>
            <SelectValue placeholder="Wähle eine Option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Optionen</SelectLabel>
              <SelectItem v-for="item in items" :key="item.value" :value="item.value">
                {{ item.label }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div v-if="includeVehicles === 'MANUAL'">
        <EnergyTable
            :rows="energyConsumptions"
            :energyTypes="energyTypes"
            :units="energyUnits"
            @add-row="addRow"
            @delete-row="deleteRow"
        />
      </div>
      <div class="hidden" v-else-if="includeVehicles === 'DEFAULT'">
        <p class="text-gray-700 my-2">Your total carbon footprint will be uplifted by 1%.</p>
      </div>
    </div>
  </div>

</template>

<script>
import Select from "@/components/ui/select/Select.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectGroup from "@/components/ui/select/SelectGroup.vue";
import SelectLabel from "@/components/ui/select/SelectLabel.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import {useFootprintStore} from "@/stores/footprintStore.js";
import EnergyTable from "@/components/calculation/util/EnergyTable.vue";
export default {
  name: "VehiclesAndEquipment",
  components: {EnergyTable, SelectItem, SelectLabel, SelectGroup, SelectContent, SelectValue, SelectTrigger, Select},
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      includeVehicles: this.footprintStore.formData.configuration.includeVehicles,
      energyConsumptions: this.footprintStore.formData.energyConsumptions,

      items: [
        { label: 'Ja (manuell)', value: 'MANUAL' },
        { label: 'Ja (Standardwert)', value: 'DEFAULT' },
        { label: 'Nein', value: 'IGNORE' }
      ],
      energyTypes: this.footprintStore.energyTypes,
      energyUnits: this.footprintStore.energyUnits,
    }
  },
  methods: {
    update(value) {
      //this.includeVehicles = value;
      this.footprintStore.formData.configuration.includeVehicles = value;
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
