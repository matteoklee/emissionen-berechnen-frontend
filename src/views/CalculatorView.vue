<template>
  <div id="calculator" class="mt-16">
    <div class="text-center mt-2">
      <h1 class="text-center mb-2">This is the calculator page</h1>

      <div>
        <CalculationForm></CalculationForm>
      </div>

      <div>
        <CalculationEvaluation></CalculationEvaluation>
      </div>
    </div>
  </div>
</template>

<script>
import CalculationEvaluation from "@/components/calculation/CalculationEvaluation.vue";
import CalculationForm from "@/components/calculation/CalculationForm.vue";

export default {
  name: "CalculatorView",
  components: {CalculationForm, CalculationEvaluation}
}
</script>

<style scoped>

</style>
