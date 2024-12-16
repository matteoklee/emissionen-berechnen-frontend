<template>
  <section class="my-18 flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black">
    <div class="bg-white w-full">
      <div class="flex flex-col justify-center items-center">
        <AnimatedLogoCloud
            :logos="logos"
            title="Trusted by Companies like"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AnimatedLogoCloud from "@/components/ui/logo-cloud/AnimatedLogoCloud.vue";

export default {
  name: "CompanySection",
  components: {AnimatedLogoCloud},
  data() {
    return {
      logos: [
        {
          name: "Vercel",
          path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
        },
        {
          name: "Prime",
          path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg",
        },
        {
          name: "Trustpilot",
          path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg",
        },
        {
          name: "Webflow",
          path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg",
        },
        {
          name: "Airbnb",
          path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg",
        },
        {
          name: "Tina",
          path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg",
        },
        {
          name: "Stackoverflow",
          path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg",
        },
        {
          name: "mistral",
          path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
