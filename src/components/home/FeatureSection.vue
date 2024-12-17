<template>
  <section
    class="min-h-[50vh] py-24 flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black"
    v-motion-slide-visible-bottom
    :duration="1000"
  >
    <div class="bg-white w-full">
      <div class="flex flex-col justify-center items-center">
        <Badge variant="" class="bg-primary uppercase">Features</Badge>
        <h1 class="text-5xl font-bold mt-2 mb-6">Alle Funktionen auf einen Blick</h1>

        <div class="grid grid-cols-4 gap-8 mt-12">
          <div
            class="flex flex-col justify-center items-center"
            v-motion-slide-visible-left
            :duration="1000"
            :delay="500"
          >
            <Badge class="rounded-full aspect-square bg-green-100 p-4">
              <Calculator :size="32" class="text-primary hover:text-white"></Calculator>
            </Badge>
            <h1 class="font-bold text-2xl mt-5 text-center">Echtzeit-Berechnungen</h1>
            <p class="text-lg text-gray-900 mt-3 text-center">
              Ergebnisse direkt nach der Eingabe.
            </p>
          </div>
          <div
            class="flex flex-col justify-center items-center"
            v-motion-slide-visible-bottom
            :duration="1000"
            :delay="500"
          >
            <Badge class="rounded-full aspect-square bg-green-100 p-4">
              <Calculator :size="32" class="text-primary hover:text-white"></Calculator>
            </Badge>
            <h1 class="font-bold text-2xl mt-5 text-center">Standardisierte Methodik</h1>
            <p class="text-lg text-gray-900 mt-3 text-center">Vollständig HCMI-kompatibel.</p>
          </div>
          <div
            class="flex flex-col justify-center items-center"
            v-motion-slide-visible-bottom
            :duration="1000"
            :delay="500"
          >
            <Badge class="rounded-full aspect-square bg-green-100 p-4">
              <Calculator :size="32" class="text-primary hover:text-white"></Calculator>
            </Badge>
            <h1 class="font-bold text-2xl mt-5 text-center">Interaktive Berichte</h1>
            <p class="text-lg text-gray-900 mt-3 text-center">
              Visualisieren und exportieren Sie Ihre Daten.
            </p>
          </div>
          <div
            class="flex flex-col justify-center items-center"
            v-motion-slide-visible-right
            :duration="1000"
            :delay="500"
          >
            <Badge class="rounded-full aspect-square bg-green-100 p-4">
              <Calculator :size="32" class="text-primary hover:text-white"></Calculator>
            </Badge>
            <h1 class="font-bold text-2xl mt-5 text-center">Einfacher Import</h1>
            <p class="text-lg text-gray-900 mt-3 text-center">
              Laden Sie Ihre Belege und Daten direkt als Nachweis hoch.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Hotel, Calculator } from 'lucide-vue-next'
import Badge from '@/components/ui/badge/Badge.vue'
export default {
  name: 'FeatureSection',
  components: { Badge, Hotel, Calculator }
}
</script>

<style scoped></style>
