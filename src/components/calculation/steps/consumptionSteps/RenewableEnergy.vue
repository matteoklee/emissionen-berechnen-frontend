<template>
  <div class="w-full">
    <div class="border rounded-lg p-8">
      <div class="border rounded-lg">
        <Table class="w-full overflow-x-scroll">
          <TableCaption class="hidden">Table of your renewable energy.</TableCaption>
          <TableHeader class="w-full">
            <TableRow class="w-full">
              <TableHead>Beschreibung</TableHead>
              <TableHead class="text-center">Kilowattstunden</TableHead>
              <TableHead class="text-center">Kommentar</TableHead>
              <TableHead class="text-right text-xs">Aktionen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(row, index) in renewableEnergyPurchases" :key="index">
              <TableCell class="text-center">
                <Input
                    type="text"
                    v-model="row.description"
                    class="w-full border rounded px-2 py-1 text-center"
                />
              </TableCell>
              <TableCell class="text-center">
                <Input
                    type="number"
                    v-model.number="row.amount"
                    class="w-full border rounded px-2 py-1 text-center"
                />
              </TableCell>
              <TableCell class="text-center">
                <Input
                    type="text"
                    v-model="row.comments"
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
import {Trash2} from "lucide-vue-next";
import {useFootprintStore} from "@/stores/footprintStore.js";

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
    Button, TableCell, TableBody, TableHead, TableRow, TableHeader, TableCaption, Table, Trash2
  },
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      renewableEnergyPurchases: this.footprintStore.formData.renewableEnergyPurchases,
    };
  },
  methods: {
    addRow() {
      this.footprintStore.formData.renewableEnergyPurchases.push({
        description: "",
        amount: 0,
        comments: "",
      });
    },
    deleteRow(index) {
      this.footprintStore.formData.renewableEnergyPurchases.splice(index, 1);
    }
  },
}
</script>

<style scoped>

</style>
