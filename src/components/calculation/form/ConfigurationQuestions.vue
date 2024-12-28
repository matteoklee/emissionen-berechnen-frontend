<template>
  <div class="w-full">
    <!-- Frage 1: Nutzen Sie eine externe Wäscherei? -->
    <div v-if="currentStep === 1">
      <p class="text-lg font-medium">{{this.currentStep}}. Nutzen Sie eine externe Wäscherei?</p>
      <div class="flex items-center space-x-2 my-4">
        <Switch id="hasOutsourcedLaundry" v-model="calculationStore.hasOutsourcedLaundry" />
        <Label for="hasOutsourcedLaundry">Ja/Nein</Label>
      </div>
      <Button @click="nextStep">Weiter</Button>
    </div>

    <!-- Frage 2: Haben Sie private Räumlichkeiten? -->
    <div v-if="currentStep === 2">
      <p class="text-lg font-medium">{{this.currentStep}}. Haben Sie private Räumlichkeiten, welche nicht für den Hotelbetrieb genutzt werden?</p>
      <div class="flex items-center space-x-2 my-4">
        <Switch id="hasPrivateSpace" v-model="calculationStore.hasPrivateSpace" />
        <Label for="hasPrivateSpace">Ja/Nein</Label>
      </div>
      <Button @click="nextStep">Weiter</Button>
    </div>

    <!-- Frage 3: Kennen Sie den Energieverbrauch der privaten Räumlichkeiten? -->
    <div v-if="currentStep === 3"> <!--  && calculationStore.hasPrivateSpace -->
      <p class="text-xl">DEBUG: {{calculationStore.hasPrivateSpace}}</p>
      <p class="text-lg font-medium">{{this.currentStep}}. Kennen Sie den Energieverbrauch der privaten Räumlichkeiten?</p>
      <div class="flex items-center space-x-2 my-4">
        <Switch id="knowsPrivateSpaceEnergy" v-model="calculationStore.knowsPrivateSpaceEnergy" />
        <Label for="knowsPrivateSpaceEnergy">Ja/Nein</Label>
      </div>
      <Button @click="nextStep">Weiter</Button>
    </div>

    <!-- Frage 4: Prozent der klimatisierten Fläche privat -->
    <div v-if="currentStep === 4"> <!-- && calculationStore.knowsPrivateSpaceEnergy -->
      <p class="text-xl">DEBUG: {{calculationStore.knowsPrivateSpaceEnergy}}</p>
      <p class="text-lg font-medium">{{this.currentStep}}. Bitte geben Sie an, wie viel Prozent der klimatisierten Fläche privat ist:</p>
      <Input class="w-1/2 my-4" type="number" v-model="calculationStore.privateSpaceAreaPercentage" placeholder="0" />
      <Button @click="nextStep">Weiter</Button>
    </div>

    <!-- Fahrzeuge und Equipment einbeziehen -->
    <div v-if="currentStep === 5">
      <p class="text-lg font-medium">{{this.currentStep}}. Wie möchten Sie Fahrzeug- und Equipmentemissionen einbeziehen?</p>
      <div class="flex items-center space-x-4 my-4">
        <Button @click="setAnswer('includeVehicles', 'Manuell')">Manuell</Button>
        <Button @click="setAnswer('includeVehicles', 'Default')">Standard nutzen</Button>
        <Button @click="setAnswer('includeVehicles', 'Ignorieren')">Ignorieren</Button>
      </div>

    </div>

    <!-- Kältemittelemissionen einbeziehen -->
    <div v-if="currentStep === 6">
      <p class="text-lg font-medium">{{this.currentStep}}. Wie möchten Sie Kältemittelemissionen einbeziehen?</p>
      <div class="flex items-center space-x-4 my-4">
        <Button @click="setAnswer('includeLeakedRefrigerants', 'Manuell')">Manuell</Button>
        <Button @click="setAnswer('includeLeakedRefrigerants', 'Default')">Standard nutzen</Button>
        <Button @click="setAnswer('includeLeakedRefrigerants', 'Ignorieren')">Ignorieren</Button>
      </div>
    </div>

    <!-- Nutzung von spezifischen Kältemitteln -->
    <div v-if="currentStep === 7"> <!-- && calculationStore.includeLeakedRefrigerants === 'Manuell' -->
      {{calculationStore.includeLeakedRefrigerants}}
      <p class="text-lg font-medium">{{this.currentStep}}. Nutzen Sie eines der folgenden Kältemittel (HCFC-22/R22, HFC-134a/R-134A, R-404A, oder R-410A)?</p>
      <div class="flex items-center space-x-2 my-4">
        <Switch id="usesCommonRefrigerants" v-model="calculationStore.usesCommonRefrigerants" />
        <Label for="usesCommonRefrigerants">Ja/Nein</Label>
      </div>
      <Button @click="nextStep">Weiter</Button>
    </div>

    <!-- Abschlussnachricht -->
    <div v-if="currentStep === 8">
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

export default {
  name: "ConfigurationQuestions",
  components: {Input, Button, Switch, Label},
  setup() {
    const calculationStore = useCalculationStore();

    return {
      calculationStore
    };
  },
  data() {
    return {
      currentStep: 1,
    }
  },
  methods: {
    setAnswer(key, value) {
      this.calculationStore[key] = value;
      this.nextStep();
    },
    nextStep() {
      this.currentStep += 1;
    }
  }
}
</script>

<style scoped>

</style>
