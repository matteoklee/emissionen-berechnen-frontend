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
              <TableRow v-for="(row, index) in rows" :key="index">
                <TableCell class="text-center">
                  <Select v-model="row.refrigerants" class="w-full border rounded px-2 py-1">
                    <SelectTrigger>
                      <SelectValue placeholder="Wähle ein Kühlmittel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Kühlmittel</SelectLabel>
                        <SelectItem  v-for="refrigerant in refrigerants" :key="refrigerant" :value="refrigerant">
                          {{ refrigerant }}
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
            Kühlmittel hinzufügen
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<!--
 "includeLeakedRefridgerants": "IGNORE",
    "usesCommonRefridgerants": true
-->
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
    Switch, SelectItem, SelectLabel, SelectGroup, SelectContent, SelectValue, SelectTrigger, Select, Label},
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
      items: [
        { label: 'Ja (manuell)', value: 'MANUAL' },
        { label: 'Nein', value: 'IGNORE' }
      ],

      refrigerants: ["HCFC-22/R22 (chlorodifluoromethane)", "HFC-134a/R-134A", "R-404A", "R-410A", "HFC-23", "HFC-32",
        "HFC-4",
        "HFC-125",
        "HFC-134",
        "HFC-143",
        "HFC-143a",
        "HFC-152a",
        "HFC-227ea",
        "HFC-236fa",
        "HFC-245fa",
        "HFC-43-10mee",
        "HFC-152",
        "HFC-161",
        "HFC-236cb",
        "HFC-236ea",
        "HFC-245ca",
        "HFC-365mfc",
        "R407A",
        "R407C",
        "R407F",
        "R408A",
        "R507A",
        "R508B",
        "R403A",
        "HCFC-123",
        "HCFC-124",
        "HCFC-141b",
        "HCFC-142b",
        "HCFC-225ca",
        "HCFC-225cb",
        "HCFC-21",
        "R290 (propane)",
        "R600A (isobutane)",
        "R406A",
        "R409A",
        "R502"
      ],
      rows: [
        {
          refrigerant: "R-404A",
          amount: 42,
        },
        {
          refrigerant: "HFC-134a/R-134A",
          amount: 90,
        },
      ]
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
      this.rows.push({
        energyTypeDescription: "",
        kwh: 0,
        comment: "",
      });
    },
    deleteRow(index) {
      this.rows.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>
