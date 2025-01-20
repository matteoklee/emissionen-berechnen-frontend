<template>
  <div class="w-full">
    <div class="p-4">
      <div class="flex flex-col lg:flex-row">

        <div class="lg:w-1/4 p-2">
          <h1 class="font-medium text-lg mx-2">Steps</h1>
          <div class="flex flex-col items-start">
            <button @click="setActiveStep(step.id)" v-for="step in steps" :key="step.id" class="w-full flex border rounded-lg items-center p-2 my-2" :class="(currentStep === step.id ? 'border-b-2 border-b-blue-500' : '')">
              <div class="mr-2">
                <div v-if="currentStep > step.id" class="mx-2 rounded-full border border-2 p-1 border-green-500">
                  <Check strokeWidth="2" class="text-green-500" :size="20" />
                </div>
                <div v-else-if="currentStep === step.id" class="mx-2 w-8 aspect-square flex items-center justify-center rounded-full border-blue-500 border-2">
                  <!-- <Circle strokeWidth="3" class="text-blue-500" :size="24" /> -->
                  {{ step.id }}
                </div>
                <div v-else class="mx-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500"
                >
                  <!-- class="mx-2" <Circle strokeWidth="2" class="text-gray-400" :size="24" /> -->
                  {{ step.id }}
                </div>
              </div>

              <div class="flex flex-col items-start text-left">
                <p class="font-medium mb-1"
                   :class="{
                      'text-green-500': currentStep > step.id,
                      'text-black': currentStep === step.id,
                      'text-gray-400': currentStep < step.id,
                    }">
                  {{step.id}}. {{step.title}}
                </p>
                <p class="text-sm text-gray-900">{{step.description}}</p>
              </div>
            </button>
          </div>
        </div>

        <div class="lg:w-3/4 p-3 flex flex-col">

          <div class="flex-grow">
            <div class="w-full mx-2">
              <div v-motion-slide-bottom :duration="1000" :key="currentStep">

                <template v-if="currentStep === 1">
                  <div class="max-w-screen-lg hidden">
                    <h3 class="font-medium mb-4 text-lg">{{steps[currentStep-1].title}}</h3>
                    <div class="flex justify-end mb-4">
                      <Button
                          class="px-4 py-2 bg-primary"
                          @click="addRow"
                      >
                        Energieträger hinzufügen
                      </Button>
                    </div>
                    <div class="border rounded-lg">
                      <Table class="w-full overflow-x-scroll">
                        <TableCaption class="hidden">Table of your energy consumption.</TableCaption>
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

                  <h3 class="font-medium mb-4 text-lg">{{steps[currentStep-1].title}}</h3>
                  <EnergyConsumption></EnergyConsumption>
                </template>

                <template v-if="currentStep === 2">
                  <div class="">
                    <h3 class="font-medium mb-4 text-lg">{{steps[currentStep-1].title}}</h3>
                    <VehiclesAndEquipment></VehiclesAndEquipment>
                  </div>
                </template>
                <template v-if="currentStep === 3">
                  <div class="">
                    <h3 class="font-medium mb-4 text-lg">{{steps[currentStep-1].title}}</h3>
                    <PrivateSpace></PrivateSpace>
                  </div>
                </template>
                <template v-if="currentStep === 4">
                  <div class="">
                    <h3 class="font-medium mb-4 text-lg">{{steps[currentStep-1].title}}</h3>
                    <RenewableEnergy></RenewableEnergy>
                  </div>
                </template>
                <template v-if="currentStep === 5">
                  <div class="">
                    <h3 class="font-medium mb-4 text-lg">{{steps[currentStep-1].title}}</h3>
                    <Laundry></Laundry>
                  </div>
                </template>
                <template v-if="currentStep === 6">
                  <div class="">
                    <h3 class="font-medium mb-4 text-lg">{{steps[currentStep-1].title}}</h3>
                    <Refrigerant></Refrigerant>
                  </div>
                </template>
                <template v-if="currentStep === 7">
                  <div class="">
                    <h3 class="font-medium mb-4 text-lg">{{steps[currentStep-1].title}}</h3>
                    <ManualEmissionFactors></ManualEmissionFactors>
                  </div>
                </template>

              </div>
            </div>

          </div>

          <div class="flex justify-between mt-4">
            <Button variant="outline" type="button" size="lg" @click="prevStep()">Zurück</Button>

            <div class="">
              <Button v-if="currentStep !== steps.length" variant="outline" class="bg-black text-white" type="button" size="lg" @click="nextStep()">
                Weiter
              </Button>
              <Button v-if="currentStep === steps.length" variant="outline" class="bg-black text-white" size="lg" type="submit">Bestätigen</Button>
            </div>
          </div>
        </div>
      </div>

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
import { CircleX, Circle, Check } from "lucide-vue-next";
import Select from "@/components/ui/select/Select.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectGroup from "@/components/ui/select/SelectGroup.vue";
import SelectLabel from "@/components/ui/select/SelectLabel.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import Input from "@/components/ui/input/Input.vue";
import RenewableEnergy from "@/components/calculation/steps/consumptionSteps/RenewableEnergy.vue";
import EnergyConsumption from "@/components/calculation/steps/consumptionSteps/EnergyConsumption.vue";
import VehiclesAndEquipment from "@/components/calculation/steps/consumptionSteps/VehiclesAndEquipment.vue";
import PrivateSpace from "@/components/calculation/steps/consumptionSteps/PrivateSpace.vue";
import Laundry from "@/components/calculation/steps/consumptionSteps/Laundry.vue";
import Refrigerant from "@/components/calculation/steps/consumptionSteps/Refrigerant.vue";
import ManualEmissionFactors from "@/components/calculation/steps/consumptionSteps/ManualEmissionFactors.vue";

export default {
  name: "EnergyConsumptionNew",
  components: {
    ManualEmissionFactors,
    Refrigerant,
    Laundry,
    PrivateSpace,
    VehiclesAndEquipment,
    EnergyConsumption,
    RenewableEnergy,
    Input,
    SelectItem,
    SelectLabel,
    SelectGroup,
    SelectContent,
    SelectValue,
    SelectTrigger,
    Select,
    Button, TableCell, TableBody, TableHead, TableRow, TableHeader, TableCaption, Table, CircleX, Check, Circle
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
      ],

      currentStep: 1,
      steps: [
        {
          id: 1,
          title: 'Energieverbrauch allgmein',
          description: 'verpflichtend'
        },
        {
          id: 2,
          title: 'Fahrzeuge & Equipment',
          description: 'optional'
        },
        {
          id: 3,
          title: 'Private Räumlickeiten',
          description: 'optional'
        },
        {
          id: 4,
          title: 'Erneuerbare Energien',
          description: 'optional'
        },
        {
          id: 5,
          title: 'Externe Wäscherei',
          description: 'optional'
        },
        {
          id: 6,
          title: 'Kühlmittel',
          description: 'optional'
        },
        {
          id: 7,
          title: 'Manuelle Emissionsfaktoren',
          description: 'optional'
        },
      ],
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
    },
    nextStep() {
      if (this.currentStep < this.steps.length) {
        this.currentStep++;
      }
    },
    setActiveStep(step) {
      this.currentStep = step;
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
  },
};
</script>

<style scoped>
</style>
