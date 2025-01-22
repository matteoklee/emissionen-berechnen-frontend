<template>
  <div class="w-full">
    <div class="border rounded-lg p-8">
      <div class="mb-4">
        <p class="font-medium mb-2">Have you conducted maintenance on your air conditioning systems/refrigeration units
          during the reporting year and do you need to add refrigerant leakage fugitive emissions?</p>
        <Select id="select" class="" v-model="includeLeakedRefridgerants" @update:model-value="updateIncludeLeakedRefridgerants($event)"> <!-- @update:model-value="update(item, $event)"  -->
          <SelectTrigger>
            <SelectValue placeholder="Wähle eine Option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Optionen</SelectLabel>
              <SelectItem v-for="item in items" :key="item.value" :value="item.value">
                {{ item.label }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div v-if="includeLeakedRefridgerants === 'MANUAL'">
        <div class="flex justify-between items-center mb-4">
          <p class="font-medium">Do you use common refrigerants in your systems?</p>
          <div class="flex justify-end items-center">
            <Label for="submit" class="">Nein</Label>
            <Switch id="submit" v-model:checked="usesCommonRefridgerants" @update:checked="updateUsesCommonRefridgerants($event)" class="data-[state=checked]:bg-black mx-2" />
            <Label for="submit" class="">Ja</Label>
          </div>
        </div>
      </div>
      <div v-if="includeLeakedRefridgerants === 'MANUAL' && usesCommonRefridgerants === true">
        <div class="border rounded-lg">
          <Table class="w-full overflow-x-scroll">
            <TableCaption class="hidden">Table of your renewable energy.</TableCaption>
            <TableHeader class="w-full">
              <TableRow class="w-full">
                <TableHead>Kühlmittel</TableHead>
                <TableHead class="text-center">Menge (kg)</TableHead>
                <TableHead class="text-right text-xs">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="(row, index) in refridgerants" :key="index">
                <TableCell class="text-center">
                  <Select v-model="row.type" class="w-full border rounded px-2 py-1">
                    <SelectTrigger>
                      <SelectValue placeholder="Wähle ein Kühlmittel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Kühlmittel</SelectLabel>
                        <SelectItem  v-for="refrigerant in refrigerantTypes" :key="refrigerant.value" :value="refrigerant.value">
                          {{ refrigerant.label }}
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell class="text-center">
                  <Input
                      type="number"
                      v-model="row.amount"
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
            Kühlmittel hinzufügen
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useFootprintStore} from "@/stores/footprintStore.js";
import Label from "@/components/ui/label/Label.vue";
import Select from "@/components/ui/select/Select.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectGroup from "@/components/ui/select/SelectGroup.vue";
import SelectLabel from "@/components/ui/select/SelectLabel.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import Switch from "@/components/ui/switch/Switch.vue";
import Button from "@/components/ui/button/Button.vue";
import Table from "@/components/ui/table/Table.vue";
import TableCaption from "@/components/ui/table/TableCaption.vue";
import TableHeader from "@/components/ui/table/TableHeader.vue";
import TableRow from "@/components/ui/table/TableRow.vue";
import TableHead from "@/components/ui/table/TableHead.vue";
import TableBody from "@/components/ui/table/TableBody.vue";
import TableCell from "@/components/ui/table/TableCell.vue";
import Input from "@/components/ui/input/Input.vue";
import {Trash2} from "lucide-vue-next";

export default {
  name: "Refrigerant",
  components: {
    Input,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    TableHeader,
    TableCaption,
    Table,
    Button,
    Switch, SelectItem, SelectLabel, SelectGroup, SelectContent, SelectValue, SelectTrigger, Select, Label, Trash2},
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      includeLeakedRefridgerants: this.footprintStore.formData.configuration.includeLeakedRefridgerants,
      usesCommonRefridgerants: this.footprintStore.formData.configuration.usesCommonRefridgerants,
      refridgerants: this.footprintStore.formData.refridgerants,

      items: [
        { label: 'Ja (manuell)', value: 'MANUAL' },
        { label: 'Nein', value: 'IGNORE' }
      ],
      refrigerantTypes: [
        { value: "HCFC22", label: "HCFC-22/R22 (chlorodifluoromethane)" },
        { value: "HFC134A", label: "HFC-134a/R-134A" },
        { value: "R404A", label: "R-404A" },
        { value: "R410A", label: "R-410A" },
        { value: "HFC23", label: "HFC-23" },
        { value: "HFC32", label: "HFC-32" },
        { value: "HFC125", label: "HFC-125" },
        { value: "HFC134", label: "HFC-134" },
        { value: "HFC143", label: "HFC-143" },
        { value: "HFC143A", label: "HFC-143a" },
        { value: "HFC152A", label: "HFC-152a" },
        { value: "HFC227EA", label: "HFC-227ea" },
        { value: "HFC236FA", label: "HFC-236fa" },
        { value: "HFC245FA", label: "HFC-245fa" },
        { value: "HFC4310MEE", label: "HFC-43-10mee" },
        { value: "HFC152", label: "HFC-152" },
        { value: "HFC161", label: "HFC-161" },
        { value: "HFC236CB", label: "HFC-236cb" },
        { value: "HFC236EA", label: "HFC-236ea" },
        { value: "HFC245CA", label: "HFC-245ca" },
        { value: "HFC365MFC", label: "HFC-365mfc" },
        { value: "R407A", label: "R407A" },
        { value: "R407C", label: "R407C" },
        { value: "R407F", label: "R407F" },
        { value: "R408A", label: "R408A" },
        { value: "R507A", label: "R507A" },
        { value: "R508B", label: "R508B" },
        { value: "R403A", label: "R403A" },
        { value: "HCFC123", label: "HCFC-123" },
        { value: "HCFC124", label: "HCFC-124" },
        { value: "HCFC141B", label: "HCFC-141b" },
        { value: "HCFC142B", label: "HCFC-142b" },
        { value: "HCFC225CA", label: "HCFC-225ca" },
        { value: "HCFC225CB", label: "HCFC-225cb" },
        { value: "HCFC21", label: "HCFC-21" },
        { value: "R290", label: "R290 (propane)" },
        { value: "R600A", label: "R600A (isobutane)" },
        { value: "R406A", label: "R406A" },
        { value: "R409A", label: "R409A" },
        { value: "R502", label: "R502" },
      ],
    }
  },
  methods: {
    updateIncludeLeakedRefridgerants(value) {
      this.footprintStore.formData.configuration.includeLeakedRefridgerants = value;
    },
    updateUsesCommonRefridgerants(value) {
      this.footprintStore.formData.configuration.usesCommonRefridgerants = value;
    },

    addRow() {
      this.footprintStore.formData.refridgerants.push({
        amount: 0.0,
        type: "",
      });
    },
    deleteRow(index) {
      this.footprintStore.formData.refridgerants.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>
