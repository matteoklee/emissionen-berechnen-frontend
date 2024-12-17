<template>
  <section class="min-h-[50vh] flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black">
    <div class="bg-white w-full">
      <div class="flex flex-col justify-center items-center">

          <Stepper v-model="stepIndex"  orientation="vertical" class="block w-full">
            <form @submit.prevent="onSubmit">
              <div class="flex w-full flex-start gap-2">
                <StepperItem
                    v-for="step in steps"
                    :key="step.step"
                    v-slot="{ state }"
                    class="relative flex w-full flex-col items-center justify-center"
                    :step="step.step"
                >
                  <StepperSeparator
                      v-if="step.step !== steps[steps.length - 1].step"
                      class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
                  />

                  <StepperTrigger as-child>
                    <Button
                        :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                        size="icon"
                        class="z-10 rounded-full shrink-0"
                        :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                        :disabled="state !== 'completed'"
                    >
                      <Check v-if="state === 'completed'" class="size-5" />
                      <Circle v-if="state === 'active'" />
                      <Dot v-if="state === 'inactive'" />
                    </Button>
                  </StepperTrigger>

                  <div class="mt-5 flex flex-col items-center text-center">
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
              </div>

              <div class="flex flex-col gap-4 mt-4 mx-4">
                <template v-if="stepIndex === 1">
                  <div class="max-w-screen-lg mx-auto my-4">
                    Step1
                  </div>
                </template>

                <template v-if="stepIndex === 2">
                  <div class="max-w-screen-lg mx-auto my-4">
                    Step2
                  </div>
                </template>

                <template v-if="stepIndex === 3">
                  <div class="max-w-screen-lg mx-auto my-4">
                    Step3
                  </div>
                </template>
              </div>

              <div class="flex items-center justify-between mt-4 max-w-screen-lg lg:mx-auto mx-8">
                <Button variant="outline" type="button" size="sm" @click="prevStep()">
                  Back
                </Button>
                <div class="flex items-center gap-3">
                  <Button v-if="stepIndex !== 3" type="button" size="sm" @click="nextStep()">
                    Next
                  </Button>
                  <Button
                      v-if="stepIndex === 3" size="sm" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </Stepper>

      </div>
    </div>
  </section>
</template>

<script>
import Stepper from "@/components/ui/stepper/Stepper.vue";
import StepperItem from "@/components/ui/stepper/StepperItem.vue";
import StepperSeparator from "@/components/ui/stepper/StepperSeparator.vue";
import StepperTrigger from "@/components/ui/stepper/StepperTrigger.vue";
import StepperTitle from "@/components/ui/stepper/StepperTitle.vue";
import StepperDescription from "@/components/ui/stepper/StepperDescription.vue";
import Button from "@/components/ui/button/Button.vue";
import {Check, Circle, Dot} from "lucide-vue-next";

export default {
  name: "CalculationForm",
  components: {Button, StepperDescription, StepperTitle, StepperTrigger, StepperSeparator, StepperItem, Stepper, Check, Circle, Dot},
  data() {
    return {
      stepIndex: 1,
      steps: [
        {
          step: 1,
          title: 'Your details',
          description: 'Provide your name and email',
        },
        {
          step: 2,
          title: 'Your password',
          description: 'Choose a password',
        },
        {
          step: 3,
          title: 'Your Favorite Drink',
          description: 'Choose a drink',
        }
      ]
    }
  },
  methods: {
    nextStep() {
      if (this.stepIndex < this.steps.length) {
        this.stepIndex++;
      }
    },
    prevStep() {
      if (this.stepIndex > 1) {
        this.stepIndex--;
      }
    },
    onSubmit() {
      alert("Form submitted successfully!");
      console.log("Form submitted");
    },
  },
}
</script>

<style scoped>

</style>
