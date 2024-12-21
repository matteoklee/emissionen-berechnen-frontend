<template>
  <div id="calculator" class="mt-16">
    <div class="mt-2">
      <div class="max-w-screen-xl mx-auto">
        <BackHome></BackHome>
      </div>

      <h1 class="text-center mb-2">This is the calculator page</h1>
      <p>preferred_username: {{ userInfo }}</p>
      <!--
      <p>preferred_username: {{ userInfo.preferred_username }}</p>
      <p>email_verified: {{ userInfo.email_verified }}</p>
      <p>family_name: {{ userInfo.family_name }}</p>
      <p>given_name: {{ userInfo.given_name }}</p>
      -->
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
      this.userInfo = {
        "access_token":  localStorage.getItem('accessToken'),
        "refresh_token":  localStorage.getItem('refreshToken'),
        "expires_in": localStorage.getItem('tokenExpiration')
      }
      console.log(this.userInfo);
    } catch (error) {
      console.error("Fehler beim Abrufen der Benutzerinformationen:", error);
    }
  }
}
</script>

<style scoped></style>
