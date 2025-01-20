<template>
  <div class="w-full">
    <div class="border rounded-lg p-8">
      <EnergyTable
          :rows="energyConsumptions"
          :energyTypes="energyTypes"
          :units="units"
          @add-row="addRow"
          @delete-row="deleteRow"
      />
    </div>
  </div>
</template>

<script>
import Table from "@/components/ui/table/Table.vue";
import TableCaption from "@/components/ui/table/TableCaption.vue";
import TableHeader from "@/components/ui/table/TableHeader.vue";
import TableRow from "@/components/ui/table/TableRow.vue";
import TableHead from "@/components/ui/table/TableHead.vue";
import TableBody from "@/components/ui/table/TableBody.vue";
import TableCell from "@/components/ui/table/TableCell.vue";
import Button from "@/components/ui/button/Button.vue";
import { CircleX } from "lucide-vue-next";
import Select from "@/components/ui/select/Select.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectGroup from "@/components/ui/select/SelectGroup.vue";
import SelectLabel from "@/components/ui/select/SelectLabel.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import Input from "@/components/ui/input/Input.vue";
import EnergyTable from "@/components/calculation/util/EnergyTable.vue";
import {useFootprintStore} from "@/stores/footprintStore.js";

export default {
  name: "EnergyConsumption",
  components: {
    EnergyTable,
    Input,
    SelectItem,
    SelectLabel,
    SelectGroup,
    SelectContent,
    SelectValue,
    SelectTrigger,
    Select,
    Button, TableCell, TableBody, TableHead, TableRow, TableHeader, TableCaption, Table, CircleX
  },
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      energyConsumptions: this.footprintStore.formData.energyConsumptions,

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
          type: "Purchased Electricity (Grid)", // Energy Type
          unit: "kWh",                                // Unit
          totalConsumption: 1000,                     // Total Consumption
          actualPrivateSpaceConsumption: 200,                    // Private Space Consumption - Actual
        },
        {
          type: "Natural Gas",                  // Energy Type
          unit: "m³",                                 // Unit
          totalConsumption: 500,                      // Total Consumption
          actualPrivateSpaceConsumption: 100,                    // Private Space Consumption - Actual
        }
      ]
    };
  },
  methods: {
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
    },
  },
};
</script>

<style scoped>
</style>
