<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {Toaster} from "vue-sonner";
</script>

<template>
    <div class="flex flex-col min-h-screen">
      <header class="flex flex-row justify-center items-center mx-8 my-6">
        <nav class="space-x-5">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </header>
      <RouterView />
    </div>
  <Toaster />
</template>

<style scoped>

</style>
