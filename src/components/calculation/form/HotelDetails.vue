<template>

  <div class="flex flex-col justify-start border rounded-lg p-6">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col mb-2">
        <Button type="button" variant="outlined" class="text-md py-6 border">
          <Upload class="w-4 h-4 mr-2" />
          Hoteldetails übernehmen</Button
        >
      </div>

      <Separator label="oder manuell eingeben" class="my-6" />

      <div class="flex flex-row mt-4 mb-4 w-full space-x-4 items-end">
        <div class="w-1/3">
          <Label for="firstName" class="font-medium">Total area of guest rooms and corridors</Label>
          <Input
              v-model="firstName"
              autocomplete="given-name"
              id="firstName"
              type="text"
              placeholder="Vorname"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-1/3">
          <Label for="lastName" class="font-medium">Total area of meeting facility space</Label>
          <Input
              v-model="lastName"
              autocomplete="family-name"
              id="lastName"
              type="text"
              placeholder="Nachname"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-1/3">
          <Label for="lastName" class="font-medium">Total area of conditioned space*</Label>
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
        <div class="inline-flex flex-row justify-between items-center">
          <Label for="password" class="font-medium">Unit of measurment for the above areas*</Label>
        </div>

        <Input
            v-model="password"
            autocomplete="password"
            required
            id="password"
            type="password"
            placeholder=""
            class="py-2.5 px-3 mt-2 border rounded-lg w-full"
        />
      </div>
      <div class="flex flex-row mt-4 mb-4 w-full space-x-4 items-end">
        <div class="w-1/2">
          <Label for="firstName" class="font-medium">Total number of guest rooms</Label>
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
          <Label for="lastName" class="font-medium">Total number of occupied rooms* for reporting year</Label>
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

      <div class="flex flex-col mb-4 hidden">
        <Button type="submit" variant="" class="text-md py-6">
          <Send class="w-4 h-4 mr-2" />
          Anmelden</Button
        >
      </div>
      <div class="flex flex-col mt-2 text-center hidden">
        <p>
          Du hast noch kein Benutzerkonto?
          <router-link to="/register" class="underline">Registrieren</router-link>
        </p>
      </div>
    </form>
  </div>

</template>

<script>
import Button from "@/components/ui/button/Button.vue";
import {Upload} from "lucide-vue-next";
import Separator from "@/components/ui/separator/Separator.vue";
import Label from "@/components/ui/label/Label.vue";
import Input from "@/components/ui/input/Input.vue";

export default {
  name: "HotelDetails",
  components: {Input, Label, Separator, Button, Upload}
}
</script>

<style scoped>

</style>
