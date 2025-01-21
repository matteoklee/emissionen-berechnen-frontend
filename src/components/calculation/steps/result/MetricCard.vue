<template>
  <div class="bg-secondary p-4 rounded-lg">
    <h3 class="font-semibold text-sm mb-2">{{ title }}</h3>
    <p class="text-2xl font-bold">{{ value }} <span class="text-sm font-normal">{{ unit }}</span></p>
  </div>
</template>

<script>
export default {
  name: "MetricCard",
  props: ['title', 'value', 'unit'],
}
</script>

<style scoped>

</style>
