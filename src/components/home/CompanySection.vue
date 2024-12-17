<template>
  <section class="flex flex-col justify-center items-center max-w-screen-xl mx-auto text-black">
    <div class="bg-white w-full">
      <div class="flex flex-col justify-center items-center">
        <AnimatedLogoCloud :logos="logos" title="Wir arbeiten zusammen mit" />
      </div>
    </div>
  </section>
</template>

<script>
import AnimatedLogoCloud from '@/components/ui/logo-cloud/AnimatedLogoCloud.vue'
export default {
  name: 'CompanySection',
  components: { AnimatedLogoCloud },
  setup() {
    const baseUrl = import.meta.env.BASE_URL;

    return {
      baseUrl
    };
  },
  data() {
    return {
      logos: [
        {
          name: 'Hochschule Harz',
          path: `${this.baseUrl}images/hs_harz.svg`
        },
        {
          name: 'GreenSign',
          path: `${this.baseUrl}images/greensign.svg`
        },
        {
          name: 'Harzer Tourismusverband',
          path: `${this.baseUrl}images/htv.svg`
        },
        {
          name: 'Wernigerode Tourimus GmbH',
          path: `${this.baseUrl}images/wtg.svg`
        }
        /*{
          name: "Airbnb",
          path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg",
        },*/
      ]
    }
  }
}
</script>

<style scoped></style>
