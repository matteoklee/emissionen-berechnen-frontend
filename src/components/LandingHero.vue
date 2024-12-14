<template>
  <div class="my-12">
    <div class="max-w-lg mx-auto">
      <GlowBorder
          class="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
          :color="['#A07CFE', '#FE8FB5', '#FFBE7B']"
      >
        <h1 class="text-6xl font-bold text-center">Emissionen-Berechnen.de</h1>
      </GlowBorder>
    </div>
  </div>

</template>

<script>


import GlowBorder from "@/components/glow-border/GlowBorder.vue";

export default {
  name: "LandingHero",
  components: {GlowBorder},
}
</script>

<style scoped>

</style>
