<template>
  <div class="w-full">
    <div class="border rounded-lg p-8">
      <div class="flex justify-end mb-4 space-x-4">
        <Button type="button" variant="outline" size="" class="bg-black text-white" @click="setDummyData()">
          <Upload class="w-4 h-4 mr-2" />
          Test-Energieverbrauch
        </Button>
        <Button type="button" variant="outline" size="" class="bg-red-500 text-white" @click="reset()">
          <Trash2 class="w-4 h-4 mr-2" />
          Eingaben löschen
        </Button>
      </div>
      <EnergyTable
          :rows="energyConsumptions"
          :energyTypes="energyTypes"
          :units="energyUnits"
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
import { CircleX, Trash2, Upload } from "lucide-vue-next";
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
    Button, TableCell, TableBody, TableHead, TableRow, TableHeader, TableCaption, Table, CircleX, Trash2, Upload
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
      energyTypes: this.footprintStore.energyTypes,
      energyUnits: this.footprintStore.energyUnits,
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
    setDummyData() {
      this.footprintStore.formData.energyConsumptions = [
        {
          type: "PURCHASED_ENERGY_GRID",
          unit: "KILOWATT_HOURS",
          totalConsumption: 1200000.0,
          actualPrivateSpaceConsumption: 0
        },
        {
            type: "DIESEL_STATIONARY",
            unit: "KILOWATT_HOURS",
            totalConsumption: 1200.0,
            actualPrivateSpaceConsumption: 0
        },
        {
          type: "NATURAL_GAS",
          unit: "KILOWATT_HOURS",
          totalConsumption: 8000.0,
          actualPrivateSpaceConsumption: 0
        }
      ];
      this.updateEnergyConsumption();
    },
    reset() {
      this.footprintStore.formData.energyConsumptions = [];
      this.updateEnergyConsumption();
    },
    updateEnergyConsumption() {
      this.energyConsumptions = this.footprintStore.formData.energyConsumptions;
    }
  },
};
</script>

<style scoped>
</style>
