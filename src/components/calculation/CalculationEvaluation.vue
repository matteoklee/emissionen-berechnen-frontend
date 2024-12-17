<template>
  <section class="min-h-[50vh] flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black">
    <div class="bg-white w-full">
      <div class="flex flex-col justify-center items-center">
        <BarChart
            index="name"
            :data="data"
            :categories="['total', 'predicted']"
            :y-formatter="(tick, i) => {
              return typeof tick === 'number'
                ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
                : ''
            }"
            :type="'stacked'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BarChart from "@/components/ui/chart-bar/BarChart.vue";

export default {
  name: "CalculationEvaluation",
  components: {BarChart},
  data() {
    return {
      data: [
        { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'May', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'Jul', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
      ]
    }
  },

}
</script>

<style scoped>

</style>
