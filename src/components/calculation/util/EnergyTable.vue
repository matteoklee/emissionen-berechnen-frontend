<template>
  <div class="max-w-screen-lg">
    <div class="border rounded-lg">
      <Table class="w-full overflow-x-scroll">
        <TableCaption class="hidden">{{ caption }}</TableCaption>
        <TableHeader class="w-full">
          <TableRow class="w-full">
            <TableHead>Energieträger</TableHead>
            <TableHead class="text-center">Verbrauch</TableHead>
            <TableHead class="text-center">Einheit</TableHead>
            <TableHead v-if="privateSpace" class="text-center">aus privaten Räumlichkeiten</TableHead>
            <TableHead class="text-right text-xs">Aktionen</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="(row, index) in rows" :key="index">
            <TableCell class="w-1/2">
              <Select v-model="row.type" class="w-full border rounded px-2 py-1">
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
              <Input
                  type="number"
                  v-model.number="row.totalConsumption"
                  class="w-full border rounded px-2 py-1 text-center"
              />
            </TableCell>
            <TableCell class="text-center">
              <Select v-model="row.unit" class="w-full border rounded px-2 py-1">
                <SelectTrigger>
                  <SelectValue placeholder="Wähle eine Einheit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Einheit</SelectLabel>
                    <SelectItem v-for="unit in units" :key="unit" :value="unit">
                      {{ unit }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell v-if="privateSpace" class="text-center">
              <Input
                  type="number"
                  v-model.number="row.actualPrivateSpaceConsumption"
                  class="w-full border rounded px-2 py-1 text-center"
              />
            </TableCell>
            <TableCell class="text-right">
              <Button
                  variant="outlined"
                  class="text-red-500 inline-flex"
                  @click="$emit('delete-row', index)"
              >
                <Trash2 :size="24" class="hover:scale-105" />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <div class="flex justify-end">
      <Button class="px-4 py-2 mt-4 bg-black text-white" size="lg" variant="outline" @click="$emit('add-row')">
        {{ addRowLabel }}
      </Button>
    </div>
  </div>
</template>

<script>
import TableCaption from "@/components/ui/table/TableCaption.vue";
import Table from "@/components/ui/table/Table.vue";
import TableHeader from "@/components/ui/table/TableHeader.vue";
import TableRow from "@/components/ui/table/TableRow.vue";
import TableHead from "@/components/ui/table/TableHead.vue";
import TableBody from "@/components/ui/table/TableBody.vue";
import TableCell from "@/components/ui/table/TableCell.vue";
import Select from "@/components/ui/select/Select.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectGroup from "@/components/ui/select/SelectGroup.vue";
import SelectLabel from "@/components/ui/select/SelectLabel.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import Input from "@/components/ui/input/Input.vue";
import Button from "@/components/ui/button/Button.vue";
import {Trash2} from "lucide-vue-next";
export default {
  name: "EnergyTable",
  components: {
    Button,
    Input,
    Trash2,
    SelectItem,
    SelectLabel,
    SelectGroup,
    SelectContent,
    SelectValue,
    SelectTrigger, Select, TableCell, TableBody, TableHead, TableRow, TableHeader, Table, TableCaption},
  props: {
    privateSpace: {
      type: Boolean,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    energyTypes: {
      type: Array,
      required: true,
    },
    units: {
      type: Array,
      required: true,
    },
    caption: {
      type: String,
      default: "Table of your energy consumption.",
    },
    addRowLabel: {
      type: String,
      default: "Energieträger hinzufügen",
    },
  },
}
</script>

<style scoped>

</style>
