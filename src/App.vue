

<template>
  <div class="flex flex-col min-h-screen">

    <div v-if="isSignedIn">
      <p class="text-right hidden">LOGGED IN</p>
    </div>
    <div v-else>
      <p class="text-right hidden">NOT LOGGED IN</p>
    </div>
    <Header></Header>
    <router-view class="flex-grow"></router-view>
    <Footer></Footer>
  </div>

  <Toaster />
</template>

<script>

import {Toaster} from "vue-sonner";
import Footer from "@/components/navigation/Footer.vue";
import Header from "@/components/navigation/Header.vue";

export default {
  name: "App",
  components: {Header, Footer, Toaster},
  data() {
    return {
      isSigneIn: false,
    }
  },
}
</script>

<style scoped>

</style>
