<template>
  <div class="mt-16">
    <h1 class="text-center">This is the home page</h1>
    <div>
      <PricingSection></PricingSection>
    </div>
  </div>

</template>

<script>
import PricingSection from "@/components/home/PricingSection.vue";

export default {
  name: "CalculatorView",
  components: {PricingSection},
}
</script>
