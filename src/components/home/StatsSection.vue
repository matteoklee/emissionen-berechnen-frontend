<template>
  <section
    class="min-h-[50vh] py-24 flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black"
    v-motion-slide-visible-top
    :duration="1000"
  >
    <div class="w-full">
      <div class="flex flex-col justify-center items-center">
        <div class="max-w-screen-lg flex flex-col justify-center items-center">
          <!--<p class="font-bold text-md text-blue-600">Stats</p>-->
          <Badge variant="" class="bg-primary uppercase">Statistiken</Badge>
          <h1 class="text-5xl font-bold mt-3 text-center">Zahlen, die überzeugen</h1>
          <p class="text-gray-900 mt-6 text-center text-lg">
            Hunderte Hotels vertrauen auf unsere Lösung und errechnen Ihre jährliche CO2-Bilanz.
          </p>
        </div>
        <div class="grid grid-cols-3 mt-12">
          <div class="border-l border-gray-300 px-4 py-2">
            <div class="">
              <h1 class="text-2xl font-bold">
                <NumberTicker
                  class="font-bold text-2xl"
                  :decimalPlaces="0"
                  :value="800"
                  :delay="1000"
                  :duration="2000"
                />+ Hotels
              </h1>
              <p class="text-lg mt-2">verwenden den CO2-Rechner.</p>
            </div>
          </div>
          <div class="border-l border-gray-300 px-4 py-2">
            <div class="">
              <h1 class="text-2xl font-bold">
                <NumberTicker
                  class="font-bold text-2xl"
                  :decimalPlaces="0"
                  :value="1000"
                  :delay="1200"
                  :duration="2000"
                />+ t CO₂
              </h1>
              <p class="text-lg mt-2">berechnet und analysiert pro Monat</p>
            </div>
          </div>
          <div class="border-l border-gray-300 px-4 py-2">
            <div class="">
              <h1 class="text-2xl font-bold">
                <NumberTicker
                  class="font-bold text-2xl"
                  :decimalPlaces="1"
                  :value="99.9"
                  :delay="1400"
                  :duration="2000"
                />% Genauigkeit
              </h1>
              <p class="text-lg mt-2">durch standardisierter Algorithmen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NumberTicker from '@/components/ui/number-ticker/NumberTicker.vue'
import Badge from '@/components/ui/badge/Badge.vue'

export default {
  name: 'StatsSection',
  components: { Badge, NumberTicker }
}
</script>

<style scoped></style>
