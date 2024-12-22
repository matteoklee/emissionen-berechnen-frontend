<template>
  <footer class="bg-white m-4">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center"
        >© 2024
        <a href="mailto:kleemann.siemens.software@gmail.com" class="hover:underline"
          >Kleemann und Siemens Software GbR</a
        >. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        <li>
          <router-link to="/about" class="hover:underline me-4 md:me-6">Über uns</router-link>
        </li>
        <li>
          <router-link to="#" class="hover:underline me-4 md:me-6"
            >Datenschutzerklärung</router-link
          >
        </li>
        <li>
          <router-link to="#" class="hover:underline me-4 md:me-6">Impressum</router-link>
        </li>
        <li>
          <router-link to="#" class="hover:underline">Kontakt</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped></style>
