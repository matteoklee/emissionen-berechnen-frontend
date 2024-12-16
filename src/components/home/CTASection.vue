<template>
  <section class="min-h-[50vh] my-24 flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black">
    <div class="bg-white w-full">
      <div class="flex flex-col justify-center items-center">
        <div class="max-w-xl flex flex-col justify-center items-center">
          <Badge variant="" class="bg-red-100 text-red-600 text-md text-sm p-2" v-motion-slide-top
                 :duration="800">
            Introducing emissionen-berechnen.de
            <ArrowRight class="ml-2" :size="20"></ArrowRight>
          </Badge>
           <!--  v-motion-slide-visible-bottom :duration="300" :delay="800" -->

          <div class="text-balance flex justify-center mt-6" v-motion-fade :duration="500" :delay="500">
            <h1 class="text-balance text-center text-6xl font-semibold">
              Automate your workflow
              <TextHighlight class="bg-gradient-to-r from-green-300 to-blue-300">
               with AI!
              </TextHighlight>
            </h1>
          </div>

          <p class="mt-6 text-gray-700 text-2xl text-center max-w-sm">
            <TextGenerateEffect
                words="No matter what problem you have, our AI can help you solve it."
                :delay="500"
                :duration="1"
            />
          </p>
          <div v-motion-slide-bottom :duration="300" :delay="1400" class="flex flex-col justify-center items-center ">
            <Button class="bg-red-600 p-5 mt-6 mb-4 duration-300" variant="">
              <LeafIcon :size="24" class="mr-2"></LeafIcon>
              Get started for free
            </Button>
            <RadianText
                class="inline-flex items-center justify-center px-4 py-1 transition text-gray-900 ease-out hover:text-neutral-900 hover:duration-300"
                :duration="5"
            >
              <span class="">✨ 7 day free trial. No credit card required.</span>
            </RadianText>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Badge from "@/components/ui/badge/Badge.vue";
import Button from "@/components/ui/button/Button.vue";
import {LeafIcon, ArrowRight} from "lucide-vue-next";
import RadianText from "@/components/ui/radiant-text/RadiantText.vue";
import TextGenerateEffect from "@/components/ui/text-generate-effect/TextGenerateEffect.vue";
import TextHighlight from "@/components/ui/text-highlight/TextHighlight.vue";


export default {
  name: "CTASection",
  components: {TextHighlight, TextGenerateEffect, RadianText, Button, Badge, LeafIcon, ArrowRight},
  data() {
    return {
      words: ['Automate ', 'your ', 'workflow ', 'with ', 'AI'],
    };
  },
}
</script>

<style scoped>

</style>
