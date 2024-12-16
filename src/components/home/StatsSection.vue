<template>
  <section class="min-h-[50vh] my-24 flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black"
           v-motion-slide-visible-top
           :duration="1000">
    <div class="w-full">
      <div class="flex flex-col justify-center items-center">
        <div class="max-w-xl flex flex-col justify-center items-center">
          <p class="font-bold text-md text-blue-600">Our track record</p>
          <h1 class="text-5xl font-bold mt-3 text-center">Trusted by thousands of creators worldwide</h1>
          <p class="text-gray-900 mt-6 text-center text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.</p>

        </div>
        <div class="grid grid-cols-4 mt-10">
          <div class="border-l border-gray-300 px-4 py-2">
            <div class="">
              <h1 class="text-2xl font-bold">
                <NumberTicker class="font-bold text-2xl" :value="8000" :delay="1000" :duration="2000" />+
              </h1>
              <p class="text-lg mt-2">Developers on the platform</p>
            </div>
          </div>
          <div class="border-l border-gray-300 px-4 py-2">
            <div class="">
              <h1 class="text-2xl font-bold">
                <NumberTicker class="font-bold text-2xl" :value="900" :delay="1200" :duration="2000" />m+
              </h1>
              <p class="text-lg mt-2">Daily Requests</p>
            </div>
          </div>
          <div class="border-l border-gray-300 px-4 py-2">
            <div class="">
              <h1 class="text-2xl font-bold">
                <NumberTicker class="font-bold text-2xl" :value="99.9" :delay="1400" :duration="2000" />%
              </h1>
              <p class="text-lg mt-2">Uptime guarantee</p>
            </div>
          </div>
          <div class="border-l border-gray-300 px-4 py-2">
            <div class="">
              <h1 class="text-2xl font-bold">
                <NumberTicker class="font-bold text-2xl" :value="12" :delay="1600" :duration="2000" />m
              </h1>
              <p class="text-lg mt-2">Porjects deployed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NumberTicker from "@/components/ui/number-ticker/NumberTicker.vue";

export default {
  name: "StatsSection",
  components: {NumberTicker}
}
</script>

<style scoped>

</style>
