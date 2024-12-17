<template>
  <span
    ref="spanRef"
    :class="cn('inline-block tabular-nums text-black dark:text-white tracking-wider', props.class)"
  >
    {{ output }}
  </span>
</template>

<script setup>
import { TransitionPresets, useElementVisibility, useTransition } from '@vueuse/core'
import { cn } from '@/lib/utils'
import { computed, ref, watch } from 'vue'

const spanRef = ref(null)

const props = defineProps({
  value: {
    type: Number,
    default: 0
  },
  direction: {
    type: String,
    default: 'up'
  },
  duration: {
    type: Number,
    default: 1000
  },
  delay: {
    type: Number,
    default: 0
  },
  decimalPlaces: {
    type: Number,
    default: 2
  },
  class: String,
  transition: {
    type: String,
    default: 'easeOutCubic'
  }
})

const transitionValue = ref(props.direction === 'down' ? props.value : 0)

const transitionOutput = useTransition(transitionValue, {
  delay: props.delay,
  duration: props.duration,
  transition: TransitionPresets[props.transition]
})

const output = computed(() => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: props.decimalPlaces,
    maximumFractionDigits: props.decimalPlaces
  }).format(Number(transitionOutput.value.toFixed(props.decimalPlaces)))
})

const isInView = useElementVisibility(spanRef, {
  threshold: 0
})

watch(
  isInView,
  (isVisible) => {
    if (isVisible) {
      transitionValue.value = props.direction === 'down' ? 0 : props.value
    }
  },
  { immediate: true }
)
</script>
