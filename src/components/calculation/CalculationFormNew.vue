<template>
  <Card
      class="min-h-screen flex flex-col items-center max-w-screen-xl mx-auto text-black bg-white my-4"
  >
    <div class="w-full min-h-screen mt-6">
      <!-- hidden -->
      <div class="flex lg:m-0 mx-6 lg:justify-end items-center lg:my-2 hidden">
        <button class="inline-flex justify-center items-center text-red-600 group">
          <X strokeWidth="2" :size="24" class="" />
          <p class="group-hover:underline">Eingaben zurücksetzen</p>
        </button>
      </div>

      <div class="flex lg:flex-row h-full flex-col items-center lg:m-4 xl:m-0 mx-6 my-2"> <!-- lg:h-[120px] -->


        <button @click="setActiveStep(step.id-1)" v-for="step in steps" :key="step.id" class="flex justify-start items-start h-full w-full mx-4 lg:my-0 my-1">
          <div v-if="step.status === 'Complete'" class="flex flex-col w-full p-4 lg:border-t-4 border-l-2 lg:border-l-0  border-green-500">
            <div class="inline-flex justify-between w-full items-center text-green-500">
              <p class="text-sm font-medium uppercase text-green-500">Abgeschlossen</p>
              <Check strokeWidth="2" class="" />
            </div>
            <div class="text-left">
              <p class="font-medium text-lg">{{ step.id }} {{ step.title }}</p>
              <p class="text-md text-gray-700">{{ step.subtitle }}</p>
            </div>
          </div>
          <div v-else-if="step.status === 'Current'" class="flex flex-col w-full p-4 lg:border-t-4 border-l-2 lg:border-l-0 border-blue-500">
            <div class="inline-flex justify-between w-full items-center text-blue-500">
              <p class="text-sm font-medium uppercase text-blue-500">in Bearbeitung</p>
            </div>
            <div class="text-left">
              <p class="font-medium text-lg">{{ step.id }} {{ step.title }}</p>
              <p class="text-md text-gray-700">{{ step.subtitle }}</p>
            </div>
          </div>
          <div v-else class="flex flex-col w-full p-4 lg:border-t-4 border-l-2 lg:border-l-0 border-gray-400">
            <div class="inline-flex justify-between w-full items-center text-gray-800">
              <p class="text-sm font-medium uppercase text-gray-400">Schritt {{ step.id }}</p>
              <!--<p class="text-sm">{{ step.status }}</p>-->
            </div>
            <div class="text-left">
              <p class="font-medium text-lg">{{ step.id }} {{ step.title }}</p>
              <p class="text-md text-gray-700">{{ step.subtitle }}</p>
            </div>
          </div>
        </button>


      </div>

      <div class="my-4 flex justify-between max-w-screen-lg mx-auto hidden">
        <h1 class="text-3xl font-medium">{{ this.steps[this.currentStep].id }}. {{ this.steps[this.currentStep].title }}</h1>
        <div class="">
          <Button variant="outline" class="bg-black text-white text-md p-5 lg:m-0 mt-4">Speichern & Beenden</Button>
        </div>
      </div>

      <div class="w-full mt-2 border-t">
        <div class="flex justify-center items-center mt-2">
          <div v-motion-slide-bottom :duration="1000" :key="currentStep" class="w-full">
            <div class="mx-12 mt-6">
              <h1 class="text-xl font-medium">{{this.steps[this.currentStep].id}}. {{this.steps[this.currentStep].title}}</h1>
            </div>
            <template v-if="currentStep === 0">
              <div class="mx-4">
                <HotelContact class="" />
              </div>
            </template>

            <template v-if="currentStep === 1">
              <div class="mx-4">
                <HotelDetails class="" />
              </div>
            </template>

            <template v-if="currentStep === 2">
              <div class="mx-4">
                <EnergyConsumptionStepper @next-step="nextStep" class="" />
              </div>
            </template>

            <template v-if="currentStep === 3">
              <div class="mx-4">
                <CalculationResult></CalculationResult>
              </div>
            </template>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full mt-auto border-t">
      <div class="flex justify-between items-center p-2">
        <div class="flex justify-center items-center p-2">
          <button :disabled="currentStep <= 0" class="" @click="prevStep()">
            <ChevronLeft strokeWidth="2" :size="28" />
            <p></p>
          </button>
        </div>
        <div class="h-full flex justify-center items-center p-2">
          <button v-if="currentStep === steps.length-1" class="" @click="resetResult()">
            <!--<Send  strokeWidth="2" class="text-primary" />-->
            <RotateCcw strokeWidth="2" class="text-red-500" />
          </button>
          <button v-else :disabled="currentStep >= steps.length" class="" @click="nextStep()">
            <ChevronRight strokeWidth="2" :size="28" />
          </button>
        </div>
      </div>
    </div>
  </Card>

</template>

<script>
import {X, Send, Check, ChevronRight, ChevronLeft, RotateCcw} from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import HotelDetails from "@/components/calculation/steps/HotelDetails.vue";
import HotelContact from "@/components/calculation/steps/HotelContact.vue";
import EnergyConsumptionStepper from "@/components/calculation/steps/EnergyConsumptionStepper.vue";
import Card from "@/components/ui/card/Card.vue";
import CalculationResult from "@/components/calculation/steps/result/CalculationResult.vue";
import {useFootprintStore} from "@/stores/footprintStore.js";
export default {
  name: "CalculationFormNew",
  components: {
    CalculationResult,
    Card,
    EnergyConsumptionStepper,
    HotelContact, HotelDetails, Button, X, Send, Check, ChevronRight, ChevronLeft, RotateCcw},
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      currentStep: 0,
      steps: [
        {
          id: 1,
          title: "Hotel",
          subtitle: "Kontaktinformationen",
          status: "Current",
        },
        {
          id: 2,
          title: "Hotelkonfiguration",
          subtitle: "Basisinformationen",
          status: "Upcoming",
        },
        {
          id: 3,
          title: "Energieverbrauch",
          subtitle: "Energieverbrauch",
          status: "Upcoming",
        },
        {
          id: 4,
          title: "Ergebnis",
          subtitle: "Ergebnis",
          status: "Upcoming",
        },
      ]
    }
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length) {
        this.currentStep++;
        this.updateStepStatus();
      }
    },
    setActiveStep(step) {
      this.currentStep = step;
      this.updateStepStatus();
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.updateStepStatus();
      }
    },
    updateStepStatus() {
      this.steps.forEach((step, index) => {
        if (index < this.currentStep) {
          step.status = "Complete";
        } else if (index === this.currentStep) {
          step.status = "Current";
        } else {
          step.status = "Upcoming";
        }
      });
    },
    resetResult() {
      //TODO: resetResult and resetInputs
      this.setActiveStep(0);
    }
  },
  mounted() {
    this.updateStepStatus();
  }
}
</script>

<style scoped>

</style>
