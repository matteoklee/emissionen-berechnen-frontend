<template>
  <div class="px-8 py-4 w-full">
    <form @submit.prevent="onSubmit">
      <div class="flex mb-2 space-x-4">
        <Button type="button" variant="outline" size="" class="w-full text-md py-6 bg-black text-white" @click="setDummyData()">
          <Upload class="w-4 h-4 mr-2" />
          Hotelkontakt übernehmen
        </Button>
        <Button type="button" variant="outline" size="" class="w-full text-md py-6 bg-red-500 text-white" @click="reset()">
          <Trash2 class="w-4 h-4 mr-2" />
          Eingaben löschen
        </Button>
      </div>

      <Separator label="oder manuell eingeben" class="my-6 bg-black" />

      <div class="border rounded-lg p-4 my-4">
        <h1 class="text-xl font-bold">Persönliche Informationen</h1>
        <div class="flex flex-row mt-2 mb-4 w-full space-x-4 items-end">
          <div class="w-1/2">
            <Label for="name" class="font-medium">Name</Label>
            <Input
                v-model="contactInfo.name"
                @update:model-value="update('name', $event)"
                id="name"
                type="text"
                placeholder="Name"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
          <div class="w-1/2">
            <Label for="jobTitle" class="font-medium">Job Title</Label>
            <Input
                v-model="contactInfo.jobTitle"
                @update:model-value="update('jobTitle', $event)"
                id="jobTitle"
                type="text"
                placeholder="Job Title"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
        </div>
        <div class="w-full">
          <Label for="endOfReportingYear" class="font-medium">Ende des Meldejahres</Label>
          <Input
              v-model="contactInfo.endOfReportingYear"
              @update:model-value="update('endOfReportingYear', $event)"
              id="endOfReportingYear"
              type="text"
              placeholder="endOfReportingYear"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
      </div>

      <div class="border rounded-lg p-4 my-4">
        <h1 class="text-xl font-bold">Hotelinformationen</h1>
        <div class="flex flex-row mt-2 w-full space-x-4 items-end">
          <div class="w-1/2">
            <Label for="hotelName" class="font-medium">Name des Hotels</Label>
            <Input
                v-model="contactInfo.hotelName"
                @update:model-value="update('hotelName', $event)"
                id="hotelName"
                type="text"
                placeholder="hotelName"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
          <div class="w-1/2">
            <Label for="hotelGroupName" class="font-medium">Name der Hotelgruppe</Label>
            <Input
                v-model="contactInfo.hotelGroupName"
                @update:model-value="update('hotelGroupName', $event)"
                id="hotelGroupName"
                type="text"
                placeholder="hotelGroupName"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4 my-4">
        <h1 class="text-xl font-bold">Adresse</h1>
        <div class="flex flex-row mt-2 w-full space-x-4 items-end">
          <div class="w-1/2">
            <Label for="street" class="font-medium">Straße</Label>
            <Input
                v-model="contactInfo.address.street"
                @update:model-value="updateAddress('street', $event)"
                id="street"
                type="text"
                placeholder="street"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
          <div class="w-1/2">
            <Label for="hnr" class="font-medium">Hausnummer</Label>
            <Input
                v-model="contactInfo.address.hnr"
                @update:model-value="updateAddress('hnr', $event)"
                id="hnr"
                type="text"
                placeholder="hnr"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
        </div>
        <div class="flex flex-row mt-2 w-full space-x-4 items-end">
          <div class="w-1/2">
            <Label for="country" class="font-medium">Land</Label>
            <Input
                v-model="contactInfo.address.country"
                @update:model-value="updateAddress('country', $event)"
                id="country"
                type="text"
                placeholder="country"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
          <div class="w-1/2">
            <Label for="state" class="font-medium">Bundesland</Label>
            <Input
                v-model="contactInfo.address.state"
                @update:model-value="updateAddress('state', $event)"
                id="state"
                type="text"
                placeholder="state"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
        </div>
        <div class="flex flex-row mt-2 w-full space-x-4 items-end">
          <div class="w-1/2">
            <Label for="postcode" class="font-medium">PLZ</Label>
            <Input
                v-model="contactInfo.address.postcode"
                @update:model-value="updateAddress('postcode', $event)"
                id="postcode"
                type="text"
                placeholder="postcode"
                class="py-2.5 px-3 mt-1 border rounded-lg w-full"
            />
          </div>
          <div class="w-1/2">
            <Label for="city" class="font-medium">Stadt</Label>
            <Input
                v-model="contactInfo.address.city"
                @update:model-value="updateAddress('city', $event)"
                id="city"
                type="text"
                placeholder="city"
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
import {Upload, Trash2} from "lucide-vue-next";
import Separator from "@/components/ui/separator/Separator.vue";
import {useFootprintStore} from "@/stores/footprintStore.js";

export default {
  name: "HotelContact",
  components: {Separator, Button, Label, Input, Upload, Trash2},
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      contactInfo: this.footprintStore.formData.contactInfo,

      /*
      name: this.footprintStore.formData.contactInfo.name,
      jobTitle: this.footprintStore.formData.contactInfo.jobTitle,
      endOfReportingYear: this.footprintStore.formData.contactInfo.endOfReportingYear,
      hotelName: this.footprintStore.formData.contactInfo.hotelName,
      hotelGroupName: this.footprintStore.formData.contactInfo.hotelGroupName,
      address: this.footprintStore.formData.contactInfo.address,
      street: this.footprintStore.formData.contactInfo.address.street,
      hnr: this.footprintStore.formData.contactInfo.address.hnr,
      city: this.footprintStore.formData.contactInfo.address.city,
      country: this.footprintStore.formData.contactInfo.address.country,
      state: this.footprintStore.formData.contactInfo.address.state,
      postcode: this.footprintStore.formData.contactInfo.address.postcode,
       */
    }
  },
  methods: {
    onSubmit() {

    },
    update(item, value) {
      this.footprintStore.formData.contactInfo[item] = value;
    },
    updateAddress(item, value) {
      this.footprintStore.formData.contactInfo.address[item] = value;
    },
    updateContactInfo() {
      this.contactInfo = this.footprintStore.formData.contactInfo;
    },
    setDummyData() {
      this.footprintStore.formData.contactInfo = {
        name: "Maria Müller",
        jobTitle: "Sustainability Manager",
        endOfReportingYear: "2023-12-31",
        hotelName: "Hotel am See",
        hotelGroupName: "Seehotels",
        address: {
          street: "Seestraße",
          hnr: "12",
          city: "Rostock",
          state: "Mecklenburg-Vorpommern",
          postcode: "18147",
          country: "Germany"
        }
      };
      this.updateContactInfo();
    },
    reset() {
      this.footprintStore.formData.contactInfo = {
        name: '',
        jobTitle: '',
        endOfReportingYear: '',
        hotelName: '',
        hotelGroupName: '',
        address: {
          street: '',
          hnr: '',
          city: '',
          state: '',
          postcode: '',
          country: '',
        }
      };
      this.updateContactInfo();
    }
  }
}
</script>

<style scoped>

</style>
