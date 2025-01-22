<template>
  <div class="bg-secondary p-4 rounded-lg">
    <h3 class="font-semibold text-sm mb-2">{{ title }}</h3>
    <p class="text-2xl font-bold">
      <NumberTicker class="text-2xl font-bold" :value="numericValue" :decimal-places="2" :duration="2000" />
      <span class="text-sm font-normal ml-2">{{ unit }}</span>
     </p>
  </div>
</template>

<script>
import NumberTicker from "@/components/ui/number-ticker/NumberTicker.vue";

export default {
  name: "MetricCard",
  components: {NumberTicker},
  props: ['title', 'value', 'unit'],
  computed: {
    numericValue() {
      return Number(this.value) || 0;
    }
  }
}
</script>

<style scoped>

</style>
