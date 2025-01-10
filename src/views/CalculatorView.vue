<template>
  <div id="calculator" class="">
    <div class="mt-2">
      <div class="max-w-screen-xl mx-auto">
        <BackHome></BackHome>
      </div>

      <div class="">
        <CalculationFormNew></CalculationFormNew>
      </div>

      <div class="my-12 border-t-4 hidden">
        <CalculationForm></CalculationForm>
      </div>

      <div class="my-12 border-t-4 hidden">
        <CalculationEvaluation></CalculationEvaluation>
      </div>
    </div>
  </div>
</template>

<script>
import CalculationEvaluation from '@/components/calculation/CalculationEvaluation.vue';
import CalculationForm from '@/components/calculation/CalculationForm.vue';
import BackHome from '@/components/navigation/BackHome.vue';
import userService from '@/services/userService.js';
import CalculationFormNew from "@/components/calculation/CalculationFormNew.vue";

export default {
  name: 'CalculatorView',
  components: {CalculationFormNew, BackHome, CalculationForm, CalculationEvaluation },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
