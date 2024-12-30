<template>
  <div class="w-full">
    <div class="border border-blue-500 rounded-lg p-8">
      <div class="flex justify-end mb-4">
        <Button
            class="px-4 py-2 bg-primary"
            @click="addRow"
        >
          Add Row
        </Button>
      </div>
      <Table class="w-full overflow-x-scroll">
        <TableCaption>Table of your energy consumption.</TableCaption>
        <TableHeader class="w-full">
          <TableRow class="w-full">
            <TableHead>Energieträger</TableHead>
            <TableHead class="text-center">Einheit</TableHead>
            <TableHead class="text-center">Verbrauch</TableHead>
            <TableHead class="text-center">Davon aus privaten Räumlichkeiten</TableHead>
            <TableHead class="text-right text-xs">Aktionen</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="(row, index) in rows" :key="index">
            <TableCell class="w-1/2">
              <Select v-model="row.energyType" class="w-full border rounded px-2 py-1">
                <SelectTrigger>
                  <SelectValue placeholder="Wähle einen Energieträger" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Energieträger</SelectLabel>
                    <SelectItem v-for="type in energyTypes" :key="type" :value="type">
                      {{ type }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell class="text-center">
              <Select v-model="row.unit" class="w-full border rounded px-2 py-1">
                <SelectTrigger>
                  <SelectValue placeholder="Wähle eine Einheit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Einheit</SelectLabel>
                    <SelectItem  v-for="unit in units" :key="unit" :value="unit">
                      {{ unit }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell class="text-center">
              <Input
                  type="number"
                  v-model.number="row.totalConsumption"
                  class="w-full border rounded px-2 py-1 text-center"
              />
            </TableCell>
            <TableCell class="text-center">
              <Input
                  type="number"
                  v-model.number="row.privateSpaceActual"
                  class="w-full border rounded px-2 py-1 text-center"
              />
            </TableCell>
            <TableCell class="text-right">
              <Button
                  variant="outlined"
                  class="text-red-500 inline-flex"
                  @click="deleteRow(index)"
              >
                <CircleX :size="24" class="hover:scale-105" />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
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

export default {
  name: "EnergyConsumptionNew",
  components: {
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
