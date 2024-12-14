<template>
  <section class="min-h-screen flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black">
    <div class="bg-white">
      <div class="flex flex-col justify-center items-center">
        <Badge variant="destructive" class="uppercase">Pricing</Badge>
        <h1 class="text-5xl font-bold mt-2 mb-6">Wähle den passenden Plan für dich</h1>
        <div class="flex items-center space-x-2">
          <Label for="airplane-mode">Monatlich</Label>
          <Switch id="airplane-mode" />
          <Label for="airplane-mode">Jährlich</Label>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-0 my-8">
        <div class="flex flex-col items-center p-4 border-y-2 border-l-2 rounded-l-xl min-h-60 my-4 ml-4">

          <p class="text-gray-600 uppercase mt-6 mb-4 font-medium">Basic</p>
          <p class="text-gray-600 text-sm inline-flex items-center mb-1"><span class="text-4xl font-bold mr-2 text-black">$19</span> / month</p>
          <p class="text-gray-600 text-sm inline-flex items-center">billed monthly</p>
          <div class="">
            <ul class="space-y-5 my-5">
              <li class="inline-flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>1 User</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center p-4 border rounded-xl min-h-60 border-destructive border-2">BASIC</div>
        <div class="flex flex-col justify-center items-center p-4 border-y-2 border-r-2 rounded-r-xl min-h-60 my-4 mr-4">BASIC</div>
      </div>
    </div>
  </section>
</template>

<script>
import Badge from "@/components/ui/badge/Badge.vue";
import Switch from "@/components/ui/switch/Switch.vue";
import {Check} from "lucide-vue-next";
export default {
  name: "PricingSection",
  components: {Switch, Badge, Check}
}
</script>

<style scoped>

</style>
