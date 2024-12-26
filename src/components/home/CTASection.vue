<template>
  <section
    class="min-h-screen flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black my-6 mx-4"
  >
    <div class="bg-white w-full">
      <div class="flex flex-col justify-center items-center">
        <div class="max-w-screen-md flex flex-col justify-center items-center">
          <Badge
            variant=""
            class="bg-green-100 text-primary text-md text-sm p-2 hover:text-white"
            v-motion-slide-top
            :duration="800"
          >
            CO<sub class="font-features subs">2</sub>-Berechnung
            <ArrowRight class="ml-2" :size="20"></ArrowRight>
          </Badge>
          <!--  v-motion-slide-visible-bottom :duration="300" :delay="800" -->

          <div
            class="text-balance flex justify-center mt-6"
            v-motion-fade
            :duration="500"
            :delay="500"
          >
            <h1 class="text-balance text-center text-6xl font-semibold">
              Der digitale
              <TextHighlight class="bg-gradient-to-r from-green-300 to-blue-300">
                CO₂-Rechner
              </TextHighlight>
              zur Ermittlung Ihrer Hotelbilanz
            </h1>
          </div>

          <p class="mt-6 text-gray-700 text-2xl text-center max-w-screen-md">
            <TextGenerateEffect
              words="Automatisieren Sie Ihre CO₂-Emissionsberechnungen basierend auf dem HCMI-Standard. Kein Excel mehr – schnelle und präzise Ergebnisse online."
              :delay="500"
              :duration="1"
            />
          </p>
          <div
            v-motion-slide-bottom
            :duration="300"
            :delay="1400"
            class="flex flex-col justify-center items-center"
          >
            <router-link to="/calculator">
              <Button class="bg-primary p-5 mt-6 mb-4 duration-300" variant="">
                <LeafIcon :size="24" class="mr-2"></LeafIcon>
                Demo ansehen
              </Button>
            </router-link>
            <RadianText
              class="inline-flex items-center justify-center px-4 py-1 transition text-gray-900 ease-out hover:text-neutral-900 hover:duration-300"
              :duration="5"
            >
              <span class="">✨ Jetzt kostenlos ausprobieren</span>
            </RadianText>
          </div>
        </div>
      </div>
    </div>
    <div id="companies" class="mt-12" v-motion-slide-bottom :duration="1000" :delay="1700">
      <CompanySection></CompanySection>
    </div>
  </section>
</template>

<script>
import Badge from '@/components/ui/badge/Badge.vue';
import Button from '@/components/ui/button/Button.vue';
import { LeafIcon, ArrowRight } from 'lucide-vue-next';
import RadianText from '@/components/ui/radiant-text/RadiantText.vue';
import TextGenerateEffect from '@/components/ui/text-generate-effect/TextGenerateEffect.vue';
import TextHighlight from '@/components/ui/text-highlight/TextHighlight.vue';
import CompanySection from '@/components/home/CompanySection.vue';

export default {
  name: 'CTASection',
  components: {
    CompanySection,
    TextHighlight,
    TextGenerateEffect,
    RadianText,
    Button,
    Badge,
    LeafIcon,
    ArrowRight
  },
  data() {
    return {
      words: ['Automate ', 'your ', 'workflow ', 'with ', 'AI']
    };
  }
};
</script>

<style scoped></style>
