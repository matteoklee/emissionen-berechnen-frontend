<template>

  <div class="flex flex-col justify-start border rounded-lg p-6">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col mb-2">
        <Button type="button" variant="outlined" class="text-md py-6 border">
          <Upload class="w-4 h-4 mr-2" />
          Hotelkontakt übernehmen</Button
        >
      </div>

      <Separator label="oder manuell eingeben" class="my-6" />

      <div class="flex flex-row mt-4 mb-4 w-full space-x-4 items-end">
        <div class="w-1/2">
          <Label for="name" class="font-medium">Name</Label>
          <Input
              v-model="name"
              id="name"
              type="text"
              placeholder="Name"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-1/2">
          <Label for="jobTitle" class="font-medium">Job Title</Label>
          <Input
              v-model="jobTitle"
              id="jobTitle"
              type="text"
              placeholder="Job Title"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
      </div>

      <div class="flex flex-row mt-4 mb-4 w-full space-x-4 items-end">
        <div class="w-2/5">
          <Label for="hotelName" class="font-medium">Name des Hotels</Label>
          <Input
              v-model="hotelName"
              id="hotelName"
              type="text"
              placeholder="hotelName"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-2/5">
          <Label for="hotelGroupName" class="font-medium">Name der Hotelgruppe</Label>
          <Input
              v-model="hotelGroupName"
              id="hotelGroupName"
              type="text"
              placeholder="hotelGroupName"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-1/5">
          <Label for="endOfReportingYear" class="font-medium">Ende des Meldejahres</Label>
          <Input
              v-model="endOfReportingYear"
              id="endOfReportingYear"
              type="text"
              placeholder="endOfReportingYear"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
      </div>

      <div class="flex flex-row mt-4 mb-4 w-full space-x-4 items-end">
        <div class="w-1/2">
          <Label for="country" class="font-medium">Land</Label>
          <Input
              v-model="country"
              id="country"
              type="text"
              placeholder="country"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-1/2">
          <Label for="state" class="font-medium">Bundesland</Label>
          <Input
              v-model="state"
              id="state"
              type="text"
              placeholder="state"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
      </div>

      <div class="flex flex-row mt-4 mb-4 w-full space-x-4 items-end">
        <div class="w-2/3">
          <Label for="street" class="font-medium">Straße</Label>
          <Input
              v-model="street"
              id="street"
              type="text"
              placeholder="street"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-1/3">
          <Label for="hnr" class="font-medium">Hausnummer</Label>
          <Input
              v-model="hnr"
              id="hnr"
              type="text"
              placeholder="hnr"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
      </div>

      <div class="flex flex-row mt-4 mb-4 w-full space-x-4 items-end">
        <div class="w-1/3">
          <Label for="postcode" class="font-medium">PLZ</Label>
          <Input
              v-model="postcode"
              id="postcode"
              type="text"
              placeholder="postcode"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-2/3">
          <Label for="city" class="font-medium">Stadt</Label>
          <Input
              v-model="city"
              id="city"
              type="text"
              placeholder="city"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
      </div>

      <div class="hidden">
        <div class="flex flex-col mb-4 mt-2">
          <Label for="username" class="font-medium">Name</Label>
          <Input
              v-model="name"
              autocomplete="username"
              required
              id="username"
              type="username"
              placeholder="user@email.com | user"
              class="py-2.5 px-3 mt-2 border rounded-lg w-full"
          />
        </div>
        <div class="flex flex-col mb-4">
          <div class="inline-flex flex-row justify-between items-center">
            <Label for="password" class="font-medium">Job Title</Label>
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
        <div class="flex flex-col mb-4">
          <div class="inline-flex flex-row justify-between items-center">
            <Label for="password" class="font-medium">Name of Hotel</Label>
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
        <div class="flex flex-col mb-4">
          <div class="inline-flex flex-row justify-between items-center">
            <Label for="password" class="font-medium">Name of Hotel Group</Label>
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
        <div class="flex flex-col mb-4">
          <div class="inline-flex flex-row justify-between items-center">
            <Label for="password" class="font-medium">State</Label>
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
        <div class="flex flex-col mb-4">
          <div class="inline-flex flex-row justify-between items-center">
            <Label for="password" class="font-medium">Address</Label>
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
            <Label for="firstName" class="font-medium">Postal Code</Label>
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
            <Label for="lastName" class="font-medium">City</Label>
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
      </div>


    </form>
  </div>
</template>

<script>
import Input from "@/components/ui/input/Input.vue";
import Label from "@/components/ui/label/Label.vue";
import Button from "@/components/ui/button/Button.vue";
import {Upload} from "lucide-vue-next";

export default {
  name: "HotelContact",
  components: {Button, Label, Input, Upload},
  data() {
    return {
      name: "",
      jobTitle: "",
      endOfReportingYear: "",
      hotelName: "",
      hotelGroupName: "",
      street: "",
      hnr: "",
      city: "",
      country: "",
      state: "",
      postcode: "",
    }
  }
}
</script>

<style scoped>

</style>
