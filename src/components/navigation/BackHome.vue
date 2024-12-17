<template>
  <div class="">
    <router-link to="/" class="text-gray-500 inline-flex items-center ml-2">
      <ArrowLeft :size="20" class="mr-2"></ArrowLeft>
      Zurück zur Startseite
    </router-link>
  </div>

</template>

<script>
import {ArrowLeft} from "lucide-vue-next";
export default {
  name: "BackHome",
  components: {ArrowLeft}
}
</script>

<style scoped>

</style>
