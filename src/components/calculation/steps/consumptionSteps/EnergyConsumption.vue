<template>
  <div class="w-full">
    <div class="border rounded-lg p-8">
      <EnergyTable
          :rows="rows"
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
  data() {
    return {
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
          totalConsumption: 1000,                     // Total Consumption
          privateSpaceActual: 200,                    // Private Space Consumption - Actual
        },
        {
          energyType: "Natural Gas",                  // Energy Type
          unit: "m³",                                 // Unit
          totalConsumption: 500,                      // Total Consumption
          privateSpaceActual: 100,                    // Private Space Consumption - Actual
        }
      ]
    };
  },
  methods: {
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
  },
};
</script>

<style scoped>
</style>
