<template>
  <section
    class="min-h-[50vh] flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black"
  >
    <div class="bg-white w-full">

      <div class="flex flex-row space-x-8 mt-8">
        <div class="">
          <form @submit.prevent="onSubmit">
            <Stepper orientation="vertical" class="flex w-full max-w-md flex-col justify-start gap-10" v-model="stepIndex">
              <StepperItem
                  v-for="step in steps"
                  :key="step.step"
                  v-slot="{ state }"
                  class="relative flex w-full items-start gap-6"
                  :step="step.step"
              >
                <StepperSeparator
                    v-if="step.step !== steps[steps.length - 1].step"
                    class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
                />

                <StepperTrigger as-child>
                  <Button
                      :variant="state=== 'completed' || state === 'active' ? 'default' : 'outline'"
                      size="icon"
                      class="z-10 rounded-full shrink-0"
                      :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                  >
                    <Check v-if="state === 'completed'" class="size-5" />
                    <Circle v-if="state === 'active'" />
                    <Dot v-if="state === 'inactive'" />
                  </Button>
                </StepperTrigger>

                <div class="flex flex-col gap-1">
                  <StepperTitle
                      :class="[state === 'active' && 'text-primary']"
                      class="text-sm font-semibold transition lg:text-base"
                  >
                    {{ step.title }}
                  </StepperTitle>
                  <StepperDescription
                      :class="[state === 'active' && 'text-primary']"
                      class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm"
                  >
                    {{ step.description }}
                  </StepperDescription>
                </div>
              </StepperItem>
              <div class="flex justify-between">
                <Button variant="outline" type="button" size="sm" @click="prevStep()">Zurück</Button>

                <div class="">
                  <Button v-if="stepIndex !== steps.length" type="button" size="sm" @click="nextStep()">
                    Nächster Schritt
                  </Button>
                  <Button v-if="stepIndex === steps.length" size="sm" type="submit"> Berechnen </Button>
                </div>
              </div>
            </Stepper>
          </form>
        </div>

        <div class="w-full rounded-lg border-l px-8">
          <div v-motion-slide-bottom :duration="1000" :key="stepIndex">
            <template v-if="stepIndex === 1">
              <div class="max-w-screen-lg">
                <h3 class="text-lg font-semibold mb-4">Hotel Details</h3>
                <HotelDetails class="w-full" />
              </div>
            </template>

            <template v-if="stepIndex === 2">
              <div class="max-w-screen-lg">
                <h3 class="text-lg font-semibold mb-4">Energy Consumption</h3>
                <EnergyConsumption />
              </div>
            </template>


            <template v-if="stepIndex === 3">
              <div class="max-w-screen-lg mx-auto">
                <h3 class="text-lg font-semibold mb-4">Outsourced Laundry</h3>
                <!-- Add input fields for outsourced laundry -->
              </div>
            </template>

            <template v-if="stepIndex === 4">
              <div class="max-w-screen-lg mx-auto">
                <h3 class="text-lg font-semibold mb-4">Refrigerants</h3>
                <!-- Add input fields for refrigerants -->
              </div>
            </template>

            <template v-if="stepIndex === 5">
              <div class="max-w-screen-lg mx-auto">
                <h3 class="text-lg font-semibold mb-4">Client Report</h3>
                <!-- Add input fields or summary for client report -->
              </div>
            </template>

            <template v-if="stepIndex === 6">
              <div class="max-w-screen-lg mx-auto">
                <h3 class="text-lg font-semibold mb-4">Result</h3>
                <!-- Display calculation results -->
              </div>
            </template>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import Stepper from '@/components/ui/stepper/Stepper.vue';
import StepperItem from '@/components/ui/stepper/StepperItem.vue';
import StepperSeparator from '@/components/ui/stepper/StepperSeparator.vue';
import StepperTrigger from '@/components/ui/stepper/StepperTrigger.vue';
import StepperTitle from '@/components/ui/stepper/StepperTitle.vue';
import StepperDescription from '@/components/ui/stepper/StepperDescription.vue';
import Button from '@/components/ui/button/Button.vue';
import { Check, Circle, Dot } from 'lucide-vue-next';
import HotelDetails from "@/components/calculation/HotelDetails.vue";
import EnergyConsumption from "@/components/calculation/EnergyConsumption.vue";

export default {
  name: 'CalculationForm',
  components: {
    EnergyConsumption,
    HotelDetails,
    Button,
    StepperDescription,
    StepperTitle,
    StepperTrigger,
    StepperSeparator,
    StepperItem,
    Stepper,
    Check,
    Circle,
    Dot
  },
  data() {
    return {
      stepIndex: 1,
      steps: [
        {
          step: 1,
          title: 'Hotel Details',
          description: 'Basic information'
        },
        {
          step: 2,
          title: 'Energy Consumption',
          description: 'Enter energy usage data'
        },
        {
          step: 3,
          title: 'Outsourced Laundry',
          description: 'Laundry service details'
        },
        {
          step: 4,
          title: 'Refrigerants',
          description: 'Refrigerant usage information'
        },
        {
          step: 5,
          title: 'Client Report',
          description: 'Summary for client'
        },
        {
          step: 6,
          title: 'Result',
          description: 'CO2 calculation result - CO2 calculation result'
        }
      ]
    };
  },
  methods: {
    nextStep() {
      if (this.stepIndex < this.steps.length) {
        this.stepIndex++;
      }
    },
    setActiveStep(step) {
      this.stepIndex = step;
    },
    prevStep() {
      if (this.stepIndex > 1) {
        this.stepIndex--;
      }
    },
    getStepState(step) {
      if (step < this.stepIndex) return 'completed';
      if (step === this.stepIndex) return 'active';
      return 'inactive';
    },
    onSubmit() {
      alert('Form submitted successfully!');
      console.log('Form submitted');
    }
  }
};
</script>

<style scoped></style>
