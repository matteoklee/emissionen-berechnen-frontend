<template>
  <div class="max-w-screen-xl mx-auto">
    <LandingHero />
    <AnimatedLogoCloud :logos="logos" title="Trusted by Companies like" />
    <div class="relative overflow-hidden justify-center items-center mx-20">
      <!-- First Marquee -->
      <Marquee pause-on-hover class="[--duration:20s]">
        <div v-for="index in 5" :key="index">
          <h1 class="font-bold text-xl text-primary-400">Berechnungen</h1>
        </div>
      </Marquee>

      <!-- Second Marquee (reverse) -->
      <Marquee reverse pause-on-hover class="[--duration:20s]">
        <div v-for="index in 5" :key="index">
          <h1 class="font-bold text-xl text-primary-400">Berechnungen</h1>
        </div>
      </Marquee>

      <!-- Left Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>

      <!-- Right Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div>
    <div class="flex min-h-64 items-center justify-center">
      <p className="whitespace-pre-wrap text-6xl text-black dark:text-white">
        <NumberTicker :value="100" />
      </p>
    </div>
  </div>
  <div>
    <div className="h-auto flex min-md:flex-1 max-lg:w-full items-center justify-center">
      <TextHoverEffect class="w-[40%] min-lg:min-h-64" text="INSPIRA" />
    </div>
  </div>

  <div class="relative p-4">
    <SafariMockup
      url="inspira-ui.com"
      src="/public/greensign-logo-1-scaled-d0a91bc1.jpg"
      class="size-full"
    />
  </div>
</template>

<script>
import LandingHero from '@/components/home/LandingHero.vue'
import AnimatedLogoCloud from '@/components/ui/logo-cloud/AnimatedLogoCloud.vue'
import Marquee from '@/components/ui/marquee/Marquee.vue'
import NumberTicker from '@/components/ui/number-ticker/NumberTicker.vue'
import TextHoverEffect from '@/components/ui/text-hover-effect/TextHoverEffect.vue'
import SafariMockup from '@/components/ui/safari-mockup/SafariMockup.vue'

export default {
  name: 'CalculatorView',
  components: {
    SafariMockup,
    TextHoverEffect,
    NumberTicker,
    Marquee,
    AnimatedLogoCloud,
    LandingHero
  },
  data() {
    return {
      logos: [
        {
          name: 'Vercel',
          path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg'
        },
        {
          name: 'Prime',
          path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg'
        },
        {
          name: 'Trustpilot',
          path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg'
        },
        {
          name: 'Webflow',
          path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg'
        },
        {
          name: 'Airbnb',
          path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg'
        },
        {
          name: 'Tina',
          path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg'
        },
        {
          name: 'Stackoverflow',
          path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg'
        },
        {
          name: 'mistral',
          path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg'
        }
      ]
    }
  }
}
</script>
