<template>
  <span :class="cn('inline-block px-1 pb-1', classProp)">
    <slot />
  </span>
</template>

<script>
import { computed } from "vue";
import { cn } from "@/lib/utils";

export default {
  name: "TextHighlight",
  methods: {cn},
  props: {
    delay: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 2000,
    },
    class: {
      type: [String, Array, Object],
      default: "",
    },
    textEndColor: {
      type: String,
      default: "inherit",
    },
  },
  setup(props) {
    const delayMs = computed(() => `${props.delay}ms`);
    const durationMs = computed(() => `${props.duration}ms`);

    return {
      delayMs,
      durationMs,
      classProp: props.class,
    };
  },
};
</script>

<style scoped>
@keyframes background-expand {
  0% {
    background-size: 0% 100%;
  }
  100% {
    background-size: 100% 100%;
  }
}

@keyframes text-color-change {
  0% {
    color: inherit;
  }
  100% {
    color: v-bind(textEndColor);
  }
}

span {
  background-size: 0% 100%;
  background-repeat: no-repeat;
  background-position: left center;
  animation:
      background-expand v-bind(durationMs) ease-in-out v-bind(delayMs) forwards,
      text-color-change v-bind(durationMs) ease-in-out v-bind(delayMs) forwards;
}
</style>
