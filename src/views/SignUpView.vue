<template>
  <div class="mt-16 mx-8">
    <div class="h-full my-4 w-full flex flex-row justify-center items-center divide-x">
      <div class="p-6 xl:w-1/3 md:w-2/3 w-full border rounded-lg">
        <h1 class="text-xl font-bold mb-2">Registrieren</h1>
        <p class="text-gray-900 mb-2">Enter your information to create an account.</p>

        <form @submit.prevent="onSubmit">
          <div class="flex flex-row mt-4 mb-4 w-full space-x-4">
            <div class="w-1/2">
              <Label for="firstName" class="font-medium">Vorname</Label>
              <Input
                  v-model="firstName"
                  autocomplete="given-name"
                id="firstName"
                type="text"
                placeholder="Vorname"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
              />
            </div>
            <div class="w-1/2">
              <Label for="lastName" class="font-medium">Nachname</Label>
              <Input
                  v-model="lastName"
                  autocomplete="family-name"
                id="lastName"
                type="text"
                placeholder="Nachname"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
              />
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <Label for="username" class="font-medium">Benutzername*</Label>
            <Input
                v-model="username"
                autocomplete="username"
                required
                id="username"
                type="text"
                placeholder="username"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
          <div class="flex flex-col mb-4">
            <Label for="email" class="font-medium">Email*</Label>
            <Input
                v-model="email"
                autocomplete="email"
                required
              id="email"
              type="email"
              placeholder="user@email.com"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
          <div class="flex flex-col mb-4">
            <Label for="password" class="font-medium">Passwort*</Label>
            <div class="flex items-center justify-center">
              <Input
                  v-model="password"
                  autocomplete="new-password"
                  required
                  id="password"
                  :type="(showPassword ? 'text' : 'password')"
                  placeholder=""
                  class="py-2.5 px-3 mt-1 border rounded-lg w-full"
              />
              <button type="button" class="ml-2" @click="showPassword = !showPassword">
                <div v-if="showPassword">
                  <EyeOff :size="20" class="text-gray-600" />
                </div>
                <div v-else>
                  <Eye :size="20" class="text-gray-600" />
                </div>
              </button>
            </div>

          </div>
          <div class="flex flex-col mb-4">
            <Label for="confirm-password" class="font-medium">Passwort wiedeholen*</Label>
            <div class="flex items-center justify-center">
              <Input
                  v-model="confirmPassword"
                  autocomplete="new-password"
                  required
                  id="confirm-password"
                  :type="(showConfirmPassword ? 'text' : 'password')"
                  placeholder=""
                  class="py-2.5 px-3 mt-1 border rounded-lg w-full"
              />
              <button type="button" class="ml-2" @click="showConfirmPassword = !showConfirmPassword">
                <div v-if="showConfirmPassword">
                  <EyeOff :size="20" class="text-gray-600" />
                </div>
                <div v-else>
                  <Eye :size="20" class="text-gray-600" />
                </div>
              </button>
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <ul class="text-xs flex flex-col">
              <li
                  v-for="(requirement, key) in passwordRequirements"
                  :key="key"
                  :class="requirement.predicate ? 'text-green-500' : 'text-red-500'"
                  class="inline-flex items-center text-gray-800"
              >
                <div v-if="requirement.predicate">
                  <Check :size="16" class="mr-2" />
                </div>
                <div v-else>
                  <X :size="16" class="mr-2" />
                </div>
                <div class="text-gray-800">
                  {{ requirement.name }}
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button type="submit" variant="" :disabled="!isPasswordValid" class="text-md py-6 w-full">
                    <Send class="w-4 h-4 mr-2" />
                    Benutzerkonto erstellen</Button
                  >
                </TooltipTrigger>
                <TooltipContent>
                  <div v-if="!isPasswordValid">
                    <p>Passwortbedingungen sind nicht erfüllt</p>
                  </div>
                  <div v-else>
                    <p>Benutzerkonto erstellen</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

          </div>
          <div class="flex flex-col mb-4">
            <Button type="submit" variant="outlined" class="text-md py-6 border w-full">
              <IconGoogle class="w-4 h-4 mr-2" />
              Anmelden mit Google</Button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import { Send, Eye, EyeOff, X, Check} from 'lucide-vue-next';
import IconGoogle from '@/components/icons/IconGoogle.vue';
import Label from '@/components/ui/label/Label.vue';
import TooltipProvider from "@/components/ui/tooltip/TooltipProvider.vue";
import Tooltip from "@/components/ui/tooltip/Tooltip.vue";
import TooltipTrigger from "@/components/ui/tooltip/TooltipTrigger.vue";
import TooltipContent from "@/components/ui/tooltip/TooltipContent.vue";
export default {
  name: 'SignUpView',
  components: {
    TooltipContent,
    TooltipTrigger, Tooltip, TooltipProvider, Label, IconGoogle, Input, Button, Send, Eye, EyeOff, X, Check },
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    onSubmit() {
      this.isPasswordValid();
    },
  },


  computed: {
    passwordRequirements() {
      return [
        {
          name: 'Muss mindestens einen Großbuchstaben enthalten',
          predicate: /[A-Z]/.test(this.password),
        },
        {
          name: 'Muss mindestens einen Kleinbuchstaben enthalten',
          predicate: /[a-z]/.test(this.password),
        },
        {
          name: 'Muss mindestens eine Zahl enthalten',
          predicate: /\d/.test(this.password),
        },
        {
          name: 'Muss mindestens ein Sonderzeichen enthalten',
          predicate: /[\W_]/.test(this.password),
        },
        {
          name: 'Muss mindestens 8 Zeichen lang sein',
          predicate: this.password.length >= 8,
        },
        {
          name: 'Passwörter müssen übereinstimmen',
          predicate: this.password === this.confirmPassword,
        },
      ];
    },
    isPasswordValid() {
      return this.passwordRequirements.every(req => req.predicate);
    },
  }
};
</script>

<style scoped></style>
