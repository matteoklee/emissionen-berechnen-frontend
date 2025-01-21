<template>
  <div class="w-full px-8 py-4">
    <form @submit.prevent="onSubmit">
      <div class="flex mb-2 space-x-4">
        <Button type="button" variant="outline" size="" class="w-full text-md py-6 bg-black text-white" @click="setDummyData()">
          <Upload class="w-4 h-4 mr-2" />
          Hotelkonfiguration übernehmen
        </Button>
        <Button type="button" variant="outline" size="" class="w-full text-md py-6 bg-red-500 text-white" @click="reset()">
          <Trash2 class="w-4 h-4 mr-2" />
          Eingaben löschen
        </Button>
      </div>

      <Separator label="oder manuell eingeben" class="my-6 bg-black" />

      <div class="flex flex-col mt-4 mb-4 w-full space-y-4">
        <div class="w-full">
          <Label for="guestRoomArea" class="font-medium">Gesamtfläche der Gästezimmer und Flure</Label>
          <Input
              v-model="hotelDetails.guestRoomArea"
              @update:model-value="update('guestRoomArea', $event)"
              id="guestRoomArea"
              type="number"
              placeholder="guestRoomArea"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-full">
          <Label for="meetingArea" class="font-medium">Gesamtfläche der Versammlungsräume</Label>
          <Input
              v-model="hotelDetails.meetingArea"
              @update:model-value="update('meetingArea', $event)"
              id="meetingArea"
              type="number"
              placeholder="meetingArea"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-full">
          <Label for="conditionedArea" class="font-medium">Gesamte klimatisierte Fläche</Label>
          <Input
              v-model="hotelDetails.conditionedArea"
              @update:model-value="update('conditionedArea', $event)"
              id="conditionedArea"
              type="number"
              placeholder="conditionedArea"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-full">
          <Label for="roomCount" class="font-medium">Anzahl an Gästezimmern</Label>
          <Input
              v-model="hotelDetails.roomCount"
              @update:model-value="update('roomCount', $event)"
              id="roomCount"
              type="number"
              placeholder="roomCount"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-full">
          <Label for="totalOccupiedRooms" class="font-medium">Gesamtanzahl belegter Gästezimmer für das angegebene Jahr</Label>
          <Input
              v-model="hotelDetails.totalOccupiedRooms"
              @update:model-value="update('totalOccupiedRooms', $event)"
              id="totalOccupiedRooms"
              type="number"
              placeholder="totalOccupiedRooms"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
      </div>

    </form>
  </div>

</template>

<script>
import Button from "@/components/ui/button/Button.vue";
import {Upload, Trash2} from "lucide-vue-next";
import Separator from "@/components/ui/separator/Separator.vue";
import Label from "@/components/ui/label/Label.vue";
import Input from "@/components/ui/input/Input.vue";
import {useFootprintStore} from "@/stores/footprintStore.js";

export default {
  name: "HotelDetails",
  components: {Input, Label, Separator, Button, Upload, Trash2},
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      hotelDetails: this.footprintStore.formData.hotelDetails,
      /*
      guestRoomArea: this.footprintStore.formData.hotelDetails.guestRoomArea,
      meetingArea: this.footprintStore.formData.hotelDetails.meetingArea,
      conditionedArea: this.footprintStore.formData.hotelDetails.conditionedArea,
      roomCount: this.footprintStore.formData.hotelDetails.roomCount,
      totalOccupiedRooms: this.footprintStore.formData.hotelDetails.totalOccupiedRooms,
       */
    }
  },
  methods: {
    update(item, value) {
      this.footprintStore.formData.hotelDetails[item] = value;
    },
    setDummyData() {
      this.footprintStore.formData.hotelDetails = {
        guestRoomArea: 3500.0,
        meetingArea: 450.0,
        conditionedArea: 4200.0,
        roomCount: 120,
        totalOccupiedRooms: 35040,
        privateSpacePercentage: 0.75
      };
      this.updateHotelDetails();
    },
    reset() {
      this.footprintStore.formData.hotelDetails = {
        guestRoomArea: 0,
        meetingArea: 0,
        conditionedArea: 0,
        roomCount: 0,
        totalOccupiedRooms: 0,
        privateSpacePercentage: 0
      };
      this.updateHotelDetails();
    },
    updateHotelDetails() {
      this.hotelDetails = this.footprintStore.formData.hotelDetails;
    }
  }
}
</script>

<style scoped>

</style>
