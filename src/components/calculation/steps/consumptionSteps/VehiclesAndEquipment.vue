<template>
  <div class="w-full">
    <div class="border rounded-lg p-8">
      <div class="">
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
            :rows="rows"
            :energyTypes="energyTypes"
            :units="units"
            @add-row="addRow"
            @delete-row="deleteRow"
        />
      </div>
      <div v-else-if="includeVehicles === 'DEFAULT'">
        <p class="text-gray-700 my-2">Your total carbon footprint will be uplifted by 1%.</p>
      </div>

      <div class="text-primary">
        STORE: {{this.footprintStore.formData.configuration.includeVehicles}}
        LOKAL: {{this.includeVehicles}}
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
      items: [
        { label: 'Ja (manuell)', value: 'MANUAL' },
        { label: 'Ja (Standardwert)', value: 'DEFAULT' },
        { label: 'Nein', value: 'IGNORE' }
      ],
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
          energyType: "Purchased Electricity (Grid)", // Energy Type
          unit: "kWh",                                // Unit
          totalConsumption: 99,                     // Total Consumption
          privateSpaceActual: 200,                    // Private Space Consumption - Actual
        },
        {
          energyType: "Natural Gas",                  // Energy Type
          unit: "m³",                                 // Unit
          totalConsumption: 88,                      // Total Consumption
          privateSpaceActual: 100,                    // Private Space Consumption - Actual
        }
      ]
    }
  },
  methods: {
    update(value) {
      //this.includeVehicles = value;
      this.footprintStore.formData.configuration.includeVehicles = value;
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
