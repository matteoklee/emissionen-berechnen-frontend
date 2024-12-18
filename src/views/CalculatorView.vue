<template>
  <div id="calculator" class="mt-16">
    <div class="mt-2">
      <div class="max-w-screen-xl mx-auto">
        <BackHome></BackHome>
      </div>

      <h1 class="text-center mb-2">This is the calculator page</h1>
      <p>Willkommen, {{ userInfo.preferred_username }}</p>
      <!--<p>Rollen: {{ userInfo.roles.join(', ') }}</p>-->

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
import CalculationEvaluation from '@/components/calculation/CalculationEvaluation.vue'
import CalculationForm from '@/components/calculation/CalculationForm.vue'
import BackHome from '@/components/navigation/BackHome.vue'
import authService from "@/services/authService.js";

export default {
  name: 'CalculatorView',
  components: { BackHome, CalculationForm, CalculationEvaluation },
  data() {
    return {
      userInfo: []
    }
  },
  async created() {
    try {
      //this.userInfo = await authService.getUserInfo();
    } catch (error) {
      console.error("Fehler beim Abrufen der Benutzerinformationen:", error);
    }
  }
}
</script>

<style scoped></style>
