<template>
  <section class="min-h-screen flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black"
           v-motion-slide-visible-top
           :duration="1000"
  > <!--  v-motion-slide-visible-top
       v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 500,
        },
    }"
   -->
    <div class="bg-white w-full">
      <div class="flex flex-col justify-center items-center">
        <Badge variant="destructive" class="uppercase">Pricing</Badge>
        <h1 class="text-5xl font-bold mt-2 mb-6">Wähle den passenden Plan für dich</h1>
        <div class="flex items-center space-x-2">
          <Label for="airplane-mode">Monatlich</Label>
          <Switch id="airplane-mode" />
          <Label for="airplane-mode">Jährlich</Label>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-0 my-8 w-5/6 mx-auto">
        <div class="flex flex-col p-4 border-y-2 border-l-2 rounded-l-xl min-h-60 my-4 ml-4"
             v-motion-slide-visible-left :duration="1000" :delay="500">
          <div class="flex flex-col items-center">
            <p class="text-gray-600 uppercase mt-6 mb-4 font-medium">Basic</p>
            <p class="text-gray-600 text-sm inline-flex items-center mb-1"><span class="text-4xl font-bold mr-2 text-black">$19</span> / month</p>
            <p class="text-gray-600 text-sm inline-flex items-center">billed monthly</p>
          </div>
          <div class="">
            <ul class="space-y-3 my-5">
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>1 User</span>
              </li>
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>5 GB Storage</span>
              </li>
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>5 GB Storage</span>
              </li>
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>5 GB Storage</span>
              </li>
            </ul>
            <hr />
            <div class="mt-6 mb-4 flex flex-col justify-center items-center">
              <Button variant="outlined" class="border p-5 w-full font-medium text-lg">Abonnieren</Button>
              <p class="text-gray-600 text-sm mt-3">Perfect for individuals and small projects</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center p-4 border rounded-xl min-h-60 border-destructive border-4"
             v-motion-slide-visible-bottom :duration="1000" :delay="500">
          <div class="flex flex-col items-center">
            <p class="text-gray-600 uppercase mt-6 mb-4 font-medium">Pro</p>
            <p class="text-gray-600 text-sm inline-flex items-center mb-1"><span class="text-4xl font-bold mr-2 text-black">$49</span> / month</p>
            <p class="text-gray-600 text-sm inline-flex items-center">billed monthly</p>
          </div>
          <div class="">
            <ul class="space-y-3 my-5">
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>1 User</span>
              </li>
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>5 GB Storage</span>
              </li>
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>5 GB Storage</span>
              </li>
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>5 GB Storage</span>
              </li>
            </ul>
            <hr />
            <div class="mt-6 mb-4 flex flex-col justify-center items-center">
              <Button variant="destructive" class="p-5 w-full font-medium text-lg">Abonnieren</Button>
              <p class="text-gray-600 text-sm mt-3">Perfect for individuals and small projects</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center p-4 border-y-2 border-r-2 rounded-r-xl min-h-60 my-4 mr-4"
             v-motion-slide-visible-right :duration="1000" :delay="500">
          <div class="flex flex-col items-center">
            <p class="text-gray-600 uppercase mt-6 mb-4 font-medium">Basic</p>
            <p class="text-gray-600 text-sm inline-flex items-center mb-1"><span class="text-4xl font-bold mr-2 text-black">$19</span> / month</p>
            <p class="text-gray-600 text-sm inline-flex items-center">billed monthly</p>
          </div>
          <div class="">
            <ul class="space-y-3 my-5">
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>1 User</span>
              </li>
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>5 GB Storage</span>
              </li>
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>5 GB Storage</span>
              </li>
              <li class="flex items-center">
                <Check color="#EF4444" :size="18" class="mr-2" />
                <span>5 GB Storage</span>
              </li>
            </ul>
            <hr />
            <div class="mt-6 mb-4 flex flex-col justify-center items-center">
              <Button variant="outlined" class="border p-5 w-full font-medium text-lg">Abonnieren</Button>
              <p class="text-gray-600 text-sm mt-3">Perfect for individuals and small projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Badge from "@/components/ui/badge/Badge.vue";
import Switch from "@/components/ui/switch/Switch.vue";
import {Check} from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
export default {
  name: "PricingSection",
  components: {Button, Switch, Badge, Check}
}
</script>

<style scoped>

</style>
