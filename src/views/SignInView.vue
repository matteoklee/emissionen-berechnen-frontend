<template>
  <div class="h-full w-full flex flex-row justify-center items-center divide-x">
    <div class="p-6 w-1/4 border rounded-lg">
      <h1 class="text-xl font-bold mb-2">Anmelden</h1>
      <p class="text-gray-900 mb-2">Enter your email below to login to your account.</p>

      <form @submit.prevent="onSubmit">
        <div class="flex flex-col mb-2">
          <Button type="submit" variant="outlined" class="text-md py-6 border">
            <IconGoogle class="w-4 h-4 mr-2" />
            Anmelden mit Google</Button
          >
        </div>

        <!--<div class="inline-flex items-center justify-center w-full">
          <hr class="w-3/4 h-px bg-gray-200 border-0">
          <span class="absolute px-3 text-gray-900 -translate-x-1/2 bg-white left-1/2">or continue with</span>
        </div> -->
        <Separator label="or continue with" class="my-6" />
        <div class="flex flex-col mb-4 mt-2">
          <Label for="username" class="font-medium">Benutzername</Label>
          <Input
              v-model="username"
            id="username"
            type="username"
            placeholder="user@email.com | user"
            class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="flex flex-col mb-4">
          <div class="inline-flex flex-row justify-between items-center">
            <Label for="password" class="font-medium">Passwort</Label>
            <router-link to="/register"
              ><p class="font-medium underline">Passwort vergessen?</p></router-link
            >
          </div>

          <Input
              v-model="password"
            id="password"
            type="password"
            placeholder=""
            class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="flex flex-col mb-4">
          <Button type="submit" variant="" class="text-md py-6">
            <Send class="w-4 h-4 mr-2" />
            Anmelden</Button
          >
        </div>
        <div class="flex flex-col mt-2 text-center">
          <p>
            Du hast noch kein Benutzerkonto?
            <router-link to="/register" class="underline">Registrieren</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import IconGoogle from '@/components/icons/IconGoogle.vue'
import { Send } from 'lucide-vue-next'
import Separator from '@/components/ui/separator/Separator.vue'
import Label from '@/components/ui/label/Label.vue'
import authService from "@/services/authService.js";

export default {
  name: 'SignInView',
  components: { Label, Separator, IconGoogle, Input, Button, Send },
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    async onSubmit() {
      try {
        const response = await authService.login(this.username, this.password);
        console.log(response);
        //this.$router.push("/");
        //this.$router.push({ name: 'calculator' });
        //window.location.reload();
        window.location.href = "/"
      } catch (error) {
        console.error(error.message);
      }
    }
  }
}
</script>

<style scoped></style>
