<template>
  <div class="w-full">
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
          <TableHead>
            Energy Type
          </TableHead>
          <TableHead>Unit</TableHead>
          <TableHead>Total Consumption</TableHead>
          <TableHead class="hidden">
            Private Space Consumption - Actual
            <div>
              <TableHead class="border-t border-r">Actual</TableHead>
              <TableHead class="border-t">Estimated</TableHead>
            </div>
          </TableHead>
          <TableHead class="w-[200px]">Private Space Consumption - Actual</TableHead>
          <TableHead style="width: 200px;">Private Space Consumption - Estimated</TableHead>
          <TableHead>Outsourced Laundry (kWh)</TableHead>
          <TableHead>Total (kWh)</TableHead>
          <TableHead class="w-1/2">Default or Manual CO2e Emission Factors (EFs)*</TableHead>
          <TableHead>Manual EFs (kg CO2e/kWh)</TableHead>
          <TableHead>Emissions (kg CO2e)</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(row, index) in rows" :key="index">
          <TableCell>{{ row.energyType }}</TableCell>
          <TableCell>{{ row.unit }}</TableCell>
          <TableCell>{{ row.totalConsumption }}</TableCell>
          <TableCell>{{ row.privateSpaceActual }}</TableCell>
          <TableCell>{{ row.privateSpaceEstimated }}</TableCell>
          <TableCell>{{ row.outsourcedLaundry }}</TableCell>
          <TableCell>{{ row.total }}</TableCell>
          <TableCell>{{ row.defaultEmissionFactors }}</TableCell>
          <TableCell>{{ row.manualEmissionFactors }}</TableCell>
          <TableCell>{{ row.emissions }}</TableCell>
          <TableCell>
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
import {CircleX} from "lucide-vue-next";
export default {
  name: "EnergyConsumption",
  components: {Button, TableCell, TableBody, TableHead, TableRow, TableHeader, TableCaption, Table, CircleX},
  data() {
    return {
      rows: [
        {
          energyType: "Purchased Electricity (Grid)", // Energy Type
          unit: "kWh",                                // Unit
          totalConsumption: 1000,                     // Total Consumption
          privateSpaceActual: 200,                    // Private Space Consumption - Actual
          privateSpaceEstimated: 150,                 // Private Space Consumption - Estimated
          outsourcedLaundry: 50,                      // Outsourced Laundry (kWh)
          total: 1200,                                // Total (kWh)
          defaultEmissionFactors: "0.233",            // Default or Manual CO2e Emission Factors (EFs)
          manualEmissionFactors: "0.25",              // Manual EFs (kg CO2e/kWh)
          emissions: 300                              // Emissions (kg CO2e)
        },
        {
          energyType: "Natural Gas",                  // Energy Type
          unit: "m³",                                 // Unit
          totalConsumption: 500,                      // Total Consumption
          privateSpaceActual: 100,                    // Private Space Consumption - Actual
          privateSpaceEstimated: 80,                  // Private Space Consumption - Estimated
          outsourcedLaundry: 20,                      // Outsourced Laundry (kWh)
          total: 700,                                 // Total (kWh)
          defaultEmissionFactors: "0.184",            // Default or Manual CO2e Emission Factors (EFs)
          manualEmissionFactors: "0.2",               // Manual EFs (kg CO2e/kWh)
          emissions: 150                              // Emissions (kg CO2e)
        }
      ]

    };
  },
  methods: {
    addRow() {
      this.rows.push({
        energyType: "Dummy",
        unit: "",
        totalConsumption: 0,
        privateSpaceActual: 0,
        privateSpaceEstimated: 0,
        outsourcedLaundry: 0,
        total: 0,
        defaultEmissionFactors: "",
        manualEmissionFactors: "",
        emissions: 0
      });
    },
    deleteRow(index) {
      this.rows.splice(index, 1);
    }
  },
}
</script>

<style scoped>

</style>
