<template>
  <div class="w-full">
    <div class="border rounded-lg p-8">
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
            <TableRow v-for="(row, index) in rows" :key="index">
              <TableCell class="text-left w-1/2">
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
                  <CircleX :size="24" class="hover:scale-105" />
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

export default {
  name: "ManualEmissionFactors",
  components: {
    SelectItem,
    SelectLabel,
    SelectGroup,
    SelectContent,
    SelectValue,
    SelectTrigger,
    Select, TableCell, TableBody, TableHead, Button, Input, TableRow, TableHeader, TableCaption},
  data() {
    return {
      energyTypes: [
        "Purchased Electricity (Grid)",
        "Natural Gas",
        "Solar Energy",
        "Wind Energy",
        "Hydropower"
      ],
      rows: [
        {
          energyType: "Purchased Electricity (Grid)",
          factor: 2,
        },
        {
          energyType: "Natural Gas",
          factor: 1.25,
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
