<template>
  <div class="w-full px-8 py-4">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col mb-2">
        <Button type="button" variant="outline" class="text-md py-6 border bg-black text-white">
          <Upload class="w-4 h-4 mr-2" />
          Hoteldetails übernehmen</Button
        >
      </div>

      <Separator label="oder manuell eingeben" class="my-6 bg-black" />

      <div class="flex flex-col mt-4 mb-4 w-full space-y-4">
        <div class="w-full">
          <Label for="guestRoomArea" class="font-medium">Total area of guest rooms and corridors</Label>
          <Input
              v-model="guestRoomArea"
              @update:model-value="update('guestRoomArea', $event)"
              id="guestRoomArea"
              type="number"
              placeholder="guestRoomArea"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-full">
          <Label for="meetingArea" class="font-medium">Total area of meeting facility space</Label>
          <Input
              v-model="meetingArea"
              @update:model-value="update('meetingArea', $event)"
              id="meetingArea"
              type="number"
              placeholder="meetingArea"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-full">
          <Label for="conditionedArea" class="font-medium">Total area of conditioned space*</Label>
          <Input
              v-model="conditionedArea"
              @update:model-value="update('conditionedArea', $event)"
              id="conditionedArea"
              type="number"
              placeholder="conditionedArea"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-full">
          <Label for="roomCount" class="font-medium">Total number of guest rooms</Label>
          <Input
              v-model="roomCount"
              @update:model-value="update('roomCount', $event)"
              id="roomCount"
              type="number"
              placeholder="roomCount"
              class="py-2.5 px-3 mt-1 border rounded-lg w-full"
          />
        </div>
        <div class="w-full">
          <Label for="totalOccupiedRooms" class="font-medium">Total number of occupied rooms* for reporting year</Label>
          <Input
              v-model="totalOccupiedRooms"
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
import {Upload} from "lucide-vue-next";
import Separator from "@/components/ui/separator/Separator.vue";
import Label from "@/components/ui/label/Label.vue";
import Input from "@/components/ui/input/Input.vue";
import {useFootprintStore} from "@/stores/footprintStore.js";

export default {
  name: "HotelDetails",
  components: {Input, Label, Separator, Button, Upload},
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      guestRoomArea: this.footprintStore.formData.hotelDetails.guestRoomArea,
      meetingArea: this.footprintStore.formData.hotelDetails.meetingArea,
      conditionedArea: this.footprintStore.formData.hotelDetails.conditionedArea,
      roomCount: this.footprintStore.formData.hotelDetails.roomCount,
      totalOccupiedRooms: this.footprintStore.formData.hotelDetails.totalOccupiedRooms,
    }
  },
  methods: {
    update(item, value) {
      this.footprintStore.formData.hotelDetails[item] = value;
    },
  }
}
</script>

<style scoped>

</style>
