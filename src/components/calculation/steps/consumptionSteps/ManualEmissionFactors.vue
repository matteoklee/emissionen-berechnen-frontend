<template>
  <div class="w-full">
    <div class="border rounded-lg p-8">
      <div class="flex justify-end mb-4 space-x-4">
        <Button type="button" variant="outline" size="" class="bg-black text-white" @click="setDummyData()">
          <Upload class="w-4 h-4 mr-2" />
          Test-Manuelle EF
        </Button>
        <Button type="button" variant="outline" size="" class="bg-red-500 text-white" @click="reset()">
          <Trash2 class="w-4 h-4 mr-2" />
          Eingaben löschen
        </Button>
      </div>
      <div class="border rounded-lg">
        <Table class="w-full overflow-x-scroll">
          <TableCaption class="hidden">Table of your renewable energy.</TableCaption>
          <TableHeader class="w-full">
            <TableRow class="w-full">
              <TableHead>Energieträger</TableHead>
              <TableHead class="text-center">Umrechnungsfaktor</TableHead>
              <TableHead class="text-right text-xs">Aktionen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(row, index) in manualEmissionFactors" :key="index">
              <TableCell class="text-left w-1/2">
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
              <TableCell class="text-center w-2/5">
                <Input
                    type="number"
                    v-model="row.factor"
                    class="w-full border rounded px-2 py-1 text-center"
                />
              </TableCell>
              <TableCell class="text-right">
                <Button
                    variant="outlined"
                    class="text-red-500 inline-flex"
                    @click="deleteRow(index)"
                >
                  <Trash2 :size="24" class="hover:scale-105" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div class="flex justify-end mt-4">
        <Button
            class="bg-black text-white" size="lg"
            @click="addRow"
            variant="outline"
        >
          Energieträger hinzufügen
        </Button>
      </div>
    </div>

  </div>
</template>

<script>
import TableCaption from "@/components/ui/table/TableCaption.vue";
import TableHeader from "@/components/ui/table/TableHeader.vue";
import TableRow from "@/components/ui/table/TableRow.vue";
import Input from "@/components/ui/input/Input.vue";
import Button from "@/components/ui/button/Button.vue";
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
import {useFootprintStore} from "@/stores/footprintStore.js";
import {Trash2, Upload} from "lucide-vue-next";
import Table from "@/components/ui/table/Table.vue";

export default {
  name: "ManualEmissionFactors",
  components: {
    Table,
    SelectItem,
    SelectLabel,
    SelectGroup,
    SelectContent,
    SelectValue,
    SelectTrigger,
    Select, TableCell, TableBody, TableHead, Button, Input, TableRow, TableHeader, TableCaption, Trash2, Upload},
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      manualEmissionFactors: this.footprintStore.formData.manualEmissionFactors,
      energyTypes: this.footprintStore.energyTypes,
    }
  },
  methods: {
    addRow() {
      this.footprintStore.formData.manualEmissionFactors.push({
        type: "",
        factor: 0,
      });
    },
    deleteRow(index) {
      this.footprintStore.formData.manualEmissionFactors.splice(index, 1);
    },
    setDummyData() {
      this.footprintStore.formData.manualEmissionFactors = [
        {
          type: "PURCHASED_ENERGY_GRID",
          factor: 0.25
        },
        {
          type: "NATURAL_GAS",
          factor: 0.2
        }
      ];
      this.updateManualEmissionFactors();
    },
    reset() {
      this.footprintStore.formData.manualEmissionFactors = [];
      this.updateManualEmissionFactors();
    },
    updateManualEmissionFactors() {
      this.manualEmissionFactors = this.footprintStore.formData.manualEmissionFactors;
    }
  }
}
</script>

<style scoped>

</style>
