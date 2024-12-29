<template>
  <section
      class="min-h-screen flex flex-col items-center max-w-screen-xl mx-auto text-black"
  >
    <div class="bg-white w-full">
      <div class="flex lg:flex-row border h-full flex-col items-center lg:border lg:divide-x lg:divide-y-0 divide-y lg:h-[120px] lg:m-0 m-6">

        <div v-for="step in steps" :key="step.id" class="h-full w-full flex justify-center items-center">
          <div v-if="step.status === 'cancel'" class="h-full flex justify-center items-center p-2">
            <X type="button" strokeWidth="1" />
          </div>
          <div v-else-if="step.status === 'submit'" class="w-full h-full flex justify-center items-center inline-flex">
            <Button class="w-full h-full rounded-none text-xl font-normal inline-flex items-center">
              <Send  strokeWidth="2" class="" />
              Berechnen
            </Button>
          </div>
          <div v-else-if="step.status === 'Complete'" class="flex flex-row items-center justify-between w-full p-4">
            <div class="">
              <p class="text-sm text-green-500">{{ step.status }}</p>
              <p class="font-medium">{{ step.id }} {{ step.title }}</p>
              <p class="text-sm">{{ step.subtitle }}</p>
            </div>
            <div class="">
              <Check strokeWidth="2" class="text-green-500" />
            </div>
          </div>
          <div v-else class="flex flex-row items-center justify-between w-full p-4">
            <div class="">
              <p class="text-sm">{{ step.status }}</p>
              <div class="">

              </div>
              <p class="font-medium">{{ step.id }} {{ step.title }}</p>
              <p class="text-sm">{{ step.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import {X, Send, Check} from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
export default {
  name: "CalculationFormNew",
  components: {Button, X, Send, Check},
  data() {
    return {
      steps: [
        {
          id: 0,
          title: "Cancel",
          subtitle: "Cancel",
          status: "cancel",
        },
        {
          id: 1,
          title: "Integration Details",
          subtitle: "Astea Solutions",
          status: "Complete",
        },
        {
          id: 2,
          title: "HR Solution(s)",
          subtitle: "Paycor, FTP/SFTP exchange",
          status: "Complete",
        },
        {
          id: 3,
          title: "Connection Settings",
          subtitle: "Connection Settings Received",
          status: "Complete",
        },
        {
          id: 4,
          title: "Data Exchange Jobs",
          subtitle: "Connection Settings Received",
          status: "Current",
        },
        {
          id: 99,
          title: "Submit",
          subtitle: "Submit",
          status: "submit",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
