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
      <TableCaption>Table of your renewable energy.</TableCaption>
      <TableHeader class="w-full">
        <TableRow class="w-full">
          <TableHead>Beschreibung</TableHead>
          <TableHead class="text-center">Kilowattstunden</TableHead>
          <TableHead class="text-center">Kommentar</TableHead>
          <TableHead class="text-right text-xs">Aktionen</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(row, index) in rows" :key="index">
          <TableCell class="text-center hidden">
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
          <TableCell class="text-center w-2/5">
            <Input
                type="text"
                v-model="row.energyTypeDescription"
                class="w-full border rounded px-2 py-1 text-center"
            />
          </TableCell>
          <TableCell class="text-center">
            <Input
                type="number"
                v-model.number="row.kwh"
                class="w-full border rounded px-2 py-1 text-center"
            />
          </TableCell>
          <TableCell class="text-center w-2/5">
            <Input
                type="text"
                v-model="row.comment"
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
</template>

<script>
import Input from "@/components/ui/input/Input.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import SelectLabel from "@/components/ui/select/SelectLabel.vue";
import SelectGroup from "@/components/ui/select/SelectGroup.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import Select from "@/components/ui/select/Select.vue";
import Button from "@/components/ui/button/Button.vue";
import TableCell from "@/components/ui/table/TableCell.vue";
import TableBody from "@/components/ui/table/TableBody.vue";
import TableHead from "@/components/ui/table/TableHead.vue";
import TableRow from "@/components/ui/table/TableRow.vue";
import TableHeader from "@/components/ui/table/TableHeader.vue";
import TableCaption from "@/components/ui/table/TableCaption.vue";
import Table from "@/components/ui/table/Table.vue";
import {CircleX} from "lucide-vue-next";

export default {
  name: "RenewableEnergy",
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
          energyTypeDescription: "Grüner Strom",
          kwh: 42,
          comment: "keine Braunkohle",
        },
        {
          energyTypeDescription: "Grüner Strom2",
          kwh: 52,
          comment: "",
        },
      ]
    };
  },
  methods: {
    addRow() {
      this.rows.push({
        energyTypeDescription: "",
        kwh: 0,
        comment: "",
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
