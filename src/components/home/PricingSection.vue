<template>
  <section
    class="flex flex-col justify-center items-center max-w-screen-xl text-black py-6 mx-auto"
    v-motion-slide-visible-top
    :duration="1000"
  >
    <!--  v-motion-slide-visible-top
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
        <Badge variant="" class="bg-primary uppercase">Pricing</Badge>
        <h1 class="text-5xl font-bold mt-2 mb-6 text-center">Wähle den passenden Plan für dich</h1>
        <div class="flex items-center space-x-2">
          <Label for="airplane-mode">Monatlich</Label>
          <Switch id="airplane-mode" />
          <Label for="airplane-mode">Jährlich</Label>
        </div>
      </div>
      <div class="grid xl:grid-cols-3 grid-cols-1 xl:gap-0 gap-4 my-8">
        <div
          class="flex flex-col p-4 lg:border-y-2 lg:border-l-2 lg:rounded-l-xl border-2 lg:border-0 rounded-xl lg:rounded-none min-h-60 my-4 lg:ml-4 mx-auto lg:mx-0"
          v-motion-slide-visible-left
          :duration="1000"
          :delay="500"
        >
          <div class="flex flex-col items-center">
            <p class="text-gray-600 uppercase mt-6 mb-4 font-medium">Kostenlos</p>
            <p class="text-gray-600 text-sm inline-flex items-center mb-1">
              <span class="text-4xl font-bold mr-2 text-black">0€</span> / Monat
            </p>
            <p class="text-gray-600 text-sm inline-flex items-center">monatlich bezahlt</p>
          </div>
          <div class="">
            <ul class="space-y-3 my-5">
              <li class="flex items-center">
                <Check color="#0A5E33" :size="18" class="mr-2" />
                <span>Bis zu 3 Berechnungen pro Monat</span>
              </li>
              <li class="flex items-center">
                <Check color="#0A5E33" :size="18" class="mr-2" />
                <span>Basisfunktionen und Berichte</span>
              </li>
            </ul>
            <hr />
            <div class="mt-6 mb-4 flex flex-col justify-center items-center">
              <Button variant="outlined" class="border p-5 w-full font-medium text-lg"
                >Abonnieren</Button
              >
              <p class="text-gray-600 text-sm mt-3">Perfect for individuals and small projects</p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center p-4 border rounded-xl min-h-60 border-green-600 border-4 mx-auto lg:mx-0"
          v-motion-slide-visible-bottom
          :duration="1000"
          :delay="500"
        >
          <div class="flex flex-col items-center">
            <p class="text-gray-600 uppercase mt-6 mb-4 font-medium">Standard</p>
            <p class="text-gray-600 text-sm inline-flex items-center mb-1">
              <span class="text-4xl font-bold mr-2 text-black">30€</span> / Monat
            </p>
            <p class="text-gray-600 text-sm inline-flex items-center">monatlich bezahlt</p>
          </div>
          <div class="">
            <ul class="space-y-3 my-5">
              <li class="flex items-center">
                <Check color="#0A5E33" :size="18" class="mr-2" />
                <span>Alle Funktionen aus dem Kostenlosen-Paket</span>
              </li>
              <li class="flex items-center">
                <Check color="#0A5E33" :size="18" class="mr-2" />
                <span>Unbegrenzte Berechnungen</span>
              </li>
              <li class="flex items-center">
                <Check color="#0A5E33" :size="18" class="mr-2" />
                <span>Erweiterte Visualisierungen</span>
              </li>
              <li class="flex items-center">
                <Check color="#0A5E33" :size="18" class="mr-2" />
                <span>Priorisierter Support</span>
              </li>
            </ul>
            <hr />
            <div class="mt-6 mb-4 flex flex-col justify-center items-center">
              <Button variant="" class="p-5 w-full font-medium text-lg">Abonnieren</Button>
              <p class="text-gray-600 text-sm mt-3">Perfect for individuals and small projects</p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center p-4 border-2 rounded-xl lg:border-y-2 lg:border-r-2 lg:rounded-r-xl lg:border-0 lg:rounded-none min-h-60 my-4 lg:mr-4 mx-auto lg:mx-0"
          v-motion-slide-visible-right
          :duration="1000"
          :delay="500"
        >
          <div class="flex flex-col items-center">
            <p class="text-gray-600 uppercase mt-6 mb-4 font-medium">Premium</p>
            <p class="text-gray-600 text-sm inline-flex items-center mb-1">
              <span class="text-4xl font-bold mr-2 text-black">50€</span> / Monat
            </p>
            <p class="text-gray-600 text-sm inline-flex items-center">monatlich bezahlt</p>
          </div>
          <div class="">
            <ul class="space-y-3 my-5">
              <li class="flex items-center">
                <Check color="#0A5E33" :size="18" class="mr-2" />
                <span>Alle Funktionen aus dem Standard-Paket</span>
              </li>
              <li class="flex items-center">
                <Check color="#0A5E33" :size="18" class="mr-2" />
                <span>Individuelle Anpassungen</span>
              </li>
              <li class="flex items-center">
                <Check color="#0A5E33" :size="18" class="mr-2" />
                <span>API Zugriff</span>
              </li>
              <li class="flex items-center">
                <Check color="#0A5E33" :size="18" class="mr-2" />
                <span>Multi-User-Management</span>
              </li>
            </ul>
            <hr />
            <div class="mt-6 mb-4 flex flex-col justify-center items-center">
              <Button variant="outlined" class="border p-5 w-full font-medium text-lg"
                >Abonnieren</Button
              >
              <p class="text-gray-600 text-sm mt-3">Perfect for individuals and small projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Badge from '@/components/ui/badge/Badge.vue';
import Switch from '@/components/ui/switch/Switch.vue';
import { Check } from 'lucide-vue-next';
import Button from '@/components/ui/button/Button.vue';
import { Label } from 'radix-vue';
export default {
  name: 'PricingSection',
  components: { Label, Button, Switch, Badge, Check }
};
</script>

<style scoped></style>
