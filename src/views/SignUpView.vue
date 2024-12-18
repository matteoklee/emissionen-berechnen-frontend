<template>
  <div class="h-full w-full flex flex-row justify-center items-center divide-x">
    <div class="p-6 w-1/4 border rounded-lg">
      <h1 class="text-xl font-bold mb-2">Registrieren</h1>
      <p class="text-gray-900 mb-2">Enter your information to create an account.</p>

      <form @submit.prevent="onSubmit">
        <div class="flex flex-row mt-4 mb-4 w-full space-x-4">
          <div class="">
            <Label for="firstName" class="font-medium">Vorname</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="Vorname"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
          <div class="">
            <Label for="lastName" class="font-medium">Nachname</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Nachname"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
        </div>
        <div class="flex flex-col mb-4">
          <Label for="email" class="font-medium">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="user@email.com"
            class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="flex flex-col mb-4">
          <Label for="password" class="font-medium">Passwort</Label>
          <Input
            id="password"
            type="password"
            placeholder=""
            class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="flex flex-col mb-4">
          <Button type="submit" variant="" class="text-md py-6">
            <Send class="w-4 h-4 mr-2" />
            Benutzerkonto erstellen</Button
          >
        </div>
        <div class="flex flex-col mb-4">
          <Button type="submit" variant="outlined" class="text-md py-6 border">
            <IconGoogle class="w-4 h-4 mr-2" />
            Anmelden mit Google</Button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import { Send } from 'lucide-vue-next'
import IconGoogle from '@/components/icons/IconGoogle.vue'
import Label from '@/components/ui/label/Label.vue'
export default {
  name: 'SignUpView',
  components: { Label, IconGoogle, Input, Button, Send },
  data() {
    return {

    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style scoped></style>
