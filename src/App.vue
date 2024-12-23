<template>
  <div class="bg-white">
    <!--
    <div v-if="authService.isLoggedIn()" class="">
      <SidebarProvider class="">
        <DashboardSidebar class="hidden lg:block"></DashboardSidebar>
        <SidebarTrigger class=""></SidebarTrigger>
        <div class="w-full">
          <router-view class="flex-grow"></router-view>
          <Footer class="mx-auto"></Footer>
        </div>
      </SidebarProvider>
    </div>
    v-else -->
    <div class="flex flex-col min-h-screen">
      <Header></Header>
      <router-view class="flex-grow"></router-view>
      <Footer></Footer>
    </div>
  </div>

  <Toaster :toastOptions="toastOptions" />
</template>

<script>
import { Toaster } from 'vue-sonner';
import Footer from '@/components/navigation/Footer.vue';
import Header from '@/components/navigation/Header.vue';
import authService from "@/services/authService.js";

export default {
  name: 'App',
  computed: {
    authService() {
      return authService
    }
  },
  components: {Header, Footer, Toaster },
  data() {
    return {
      isSignedIn: false,
      toastOptions: {
        classes: {
          icon: 'mr-2',
          error: 'border-l-4 border-red-500',
          info: 'border-l-4 border-blue-500',
          success: 'border-l-4 border-green-500',
          warning: 'border-l-4 border-orange-500',
          toast: 'bg-white shadow-lg',
          title: 'text-gray-900 font-semibold',
          description: 'text-gray-600 dark:text-gray-300',
          actionButton: 'bg-blue-500 text-white px-2 py-1 rounded',
          cancelButton: 'bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2',
          closeButton: 'text-gray-400 hover:text-gray-600'
        }
      }
    };
  }
};
</script>

<style scoped></style>
