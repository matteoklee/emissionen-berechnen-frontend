<template>
  <div class="w-full">

    <div class="mt-2 mb-6">
      <p>1: {{this.calculationStore.isLaundryOutsourced}}</p>
      <p>2: {{this.calculationStore.isPrivateSpace}}</p>
      <p>3: {{this.calculationStore.doesKnowPrivateSpaceEnergy}}</p>
      <p>4: {{this.calculationStore.getPrivateSpaceAreaPercentage}}</p>
      <p>5: {{this.calculationStore.getIncludeVehicles}}</p>
      <p>6: {{this.calculationStore.getIncludeLeakedRefrigerants}}</p>
      <p>7: {{this.calculationStore.doesUseCommonRefrigerants}}</p>
    </div>

    <div class="mt-2 mb-6">
      <p>Step: {{this.currentStepConfiguration}}</p>
      <p>1: {{this.hasOutsourcedLaundry}}</p>
      <p>2: {{this.hasPrivateSpace}}</p>
      <p>3: {{this.knowsPrivateSpaceEnergy}}</p>
      <p>4: {{this.privateSpaceAreaPercentage}}</p>
      <p>5: {{this.includeVehicles}}</p>
      <p>6: {{this.includeLeakedRefrigerants}}</p>
      <p>7: {{this.usesCommonRefrigerants}}</p>
    </div>

    <!-- Frage 1: Nutzen Sie eine externe Wäscherei? -->
    <div v-if="currentStepConfiguration === 1">
      <p class="text-lg font-medium">{{this.currentStepConfiguration}}. Nutzen Sie eine externe Wäscherei?</p>
      <div class="flex items-center space-x-2 my-4">
        <Switch v-model:checked="hasOutsourcedLaundry" id="hasOutsourcedLaundry" @update:checked="calculationStore.setHasOutsourcedLaundry(hasOutsourcedLaundry)" />
        <Label for="hasOutsourcedLaundry">Ja/Nein</Label>
      </div>
      <Button @click="nextStep">Weiter</Button>
    </div>

    <!-- Frage 2: Haben Sie private Räumlichkeiten? -->
    <div v-if="currentStepConfiguration === 2">
      <p class="text-lg font-medium">{{this.currentStepConfiguration}}. Haben Sie private Räumlichkeiten, welche nicht für den Hotelbetrieb genutzt werden?</p>
      <div class="flex items-center space-x-2 my-4">
        <Switch id="hasPrivateSpace" v-model:checked="hasPrivateSpace" @update:checked="calculationStore.setHasPrivateSpace(hasPrivateSpace)" />
        <Label for="hasPrivateSpace">Ja/Nein</Label>
      </div>
      <Button @click="nextStep">Weiter</Button>
    </div>

    <!-- Frage 3: Kennen Sie den Energieverbrauch der privaten Räumlichkeiten? -->
    <div v-if="currentStepConfiguration === 3"> <!--  && calculationStore.hasPrivateSpace -->
      <p class="text-xl">DEBUG: {{calculationStore.hasPrivateSpace}}</p>
      <p class="text-lg font-medium">{{this.currentStepConfiguration}}. Kennen Sie den Energieverbrauch der privaten Räumlichkeiten?</p>
      <div class="flex items-center space-x-2 my-4">
        <Switch id="knowsPrivateSpaceEnergy" v-model:checked="knowsPrivateSpaceEnergy" @update:checked="calculationStore.setKnowsPrivateSpaceEnergy(knowsPrivateSpaceEnergy)" />
        <Label for="knowsPrivateSpaceEnergy">Ja/Nein</Label>
      </div>
      <Button @click="nextStep">Weiter</Button>
    </div>

    <!-- Frage 4: Prozent der klimatisierten Fläche privat -->
    <div v-if="currentStepConfiguration === 4"> <!-- && calculationStore.knowsPrivateSpaceEnergy -->
      <p class="text-xl">DEBUG: {{calculationStore.knowsPrivateSpaceEnergy}}</p>
      <p class="text-lg font-medium">{{this.currentStepConfiguration}}. Bitte geben Sie an, wie viel Prozent der klimatisierten Fläche privat ist:</p>
      <Input class="w-1/2 my-4" type="number" v-model="privateSpaceAreaPercentage" placeholder="0" @change="calculationStore.setPrivateSpaceAreaPercentage(privateSpaceAreaPercentage)"/>
      <Button @click="nextStep">Weiter</Button>
    </div>

    <!-- Fahrzeuge und Equipment einbeziehen -->
    <div v-if="currentStepConfiguration === 5">
      <p class="text-lg font-medium">{{this.currentStepConfiguration}}. Wie möchten Sie Fahrzeug- und Equipmentemissionen einbeziehen?</p>
      <div class="flex flex-col items-start space-y-4 my-4">
        <!--
        <Button @click="setAnswer('includeVehicles', 'Manuell')">Manuell</Button>
        <Button @click="setAnswer('includeVehicles', 'Default')">Standard nutzen</Button>
        <Button @click="setAnswer('includeVehicles', 'Ignorieren')">Ignorieren</Button>
         -->
        <Select v-model="includeVehicles" @change="calculationStore.setIncludeVehicles(includeVehicles)" class="w-1/2 border rounded px-2 py-1">
          <SelectTrigger>
            <SelectValue placeholder="Wähle eine Option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Optionen</SelectLabel>
              <SelectItem v-for="option in options" :key="option" :value="option">
                {{ option }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button @click="nextStep">Weiter</Button>
      </div>

    </div>

    <!-- Kältemittelemissionen einbeziehen -->
    <div v-if="currentStepConfiguration === 6">
      <p class="text-lg font-medium">{{this.currentStepConfiguration}}. Wie möchten Sie Kältemittelemissionen einbeziehen?</p>
      <div class="flex flex-col items-start space-y-4 my-4">
        <!--
        <Button @click="setAnswer('includeLeakedRefrigerants', 'Manuell')">Manuell</Button>
        <Button @click="setAnswer('includeLeakedRefrigerants', 'Default')">Standard nutzen</Button>
        <Button @click="setAnswer('includeLeakedRefrigerants', 'Ignorieren')">Ignorieren</Button>
        -->
        <Select v-model="includeLeakedRefrigerants" @change="calculationStore.setIncludeLeakedRefrigerants(includeLeakedRefrigerants)" class="w-1/2 border rounded px-2 py-1">
          <SelectTrigger>
            <SelectValue placeholder="Wähle eine Option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Optionen</SelectLabel>
              <SelectItem v-for="option in options" :key="option" :value="option">
                {{ option }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button @click="nextStep">Weiter</Button>
      </div>
    </div>

    <!-- Nutzung von spezifischen Kältemitteln -->
    <div v-if="currentStepConfiguration === 7"> <!-- && calculationStore.includeLeakedRefrigerants === 'Manuell' -->
      {{calculationStore.includeLeakedRefrigerants}}
      <p class="text-lg font-medium">{{this.currentStepConfiguration}}. Nutzen Sie eines der folgenden Kältemittel (HCFC-22/R22, HFC-134a/R-134A, R-404A, oder R-410A)?</p>
      <div class="flex items-center space-x-2 my-4">
        <Switch id="usesCommonRefrigerants" v-model:checked="usesCommonRefrigerants" @update:checked="calculationStore.setUsesCommonRefrigerants(usesCommonRefrigerants)" />
        <Label for="usesCommonRefrigerants">Ja/Nein</Label>
      </div>
      <Button @click="nextStep">Weiter</Button>
    </div>

    <!-- Abschlussnachricht -->
    <div v-if="currentStepConfiguration === 8">
      <p>Danke! Ihre Antworten wurden gespeichert.</p>
    </div>
  </div>
</template>

<script>
import Label from "@/components/ui/label/Label.vue";
import Switch from "@/components/ui/switch/Switch.vue";
import {useCalculationStore} from "@/stores/calculationStore.js";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import Select from "@/components/ui/select/Select.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectGroup from "@/components/ui/select/SelectGroup.vue";
import SelectLabel from "@/components/ui/select/SelectLabel.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";

export default {
  name: "ConfigurationQuestions",
  components: {
    SelectItem,
    SelectLabel, SelectGroup, SelectContent, SelectValue, SelectTrigger, Select, Input, Button, Switch, Label},
  setup() {
    const calculationStore = useCalculationStore();
    return {
      calculationStore
    };
  },
  data() {
    return {
      currentStepConfiguration: 1,
      hasOutsourcedLaundry: false,
      hasPrivateSpace: false,
      knowsPrivateSpaceEnergy: false,
      privateSpaceAreaPercentage: 0,
      includeVehicles: 'Default',
      includeLeakedRefrigerants: 'Default',
      usesCommonRefrigerants: false,

      options: [
          "Manuell",
          "Default/Standard",
          "Ignorieren"
      ]
    }
  },
  methods: {
    setAnswer(key, value) {
      this.calculationStore.setAnswer(key, value);
      this.nextStep();
    },
    nextStep() {
      this.currentStepConfiguration += 1;
    }
  }
}
</script>

<style scoped>

</style>
