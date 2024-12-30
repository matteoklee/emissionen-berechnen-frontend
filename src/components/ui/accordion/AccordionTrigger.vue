<script setup>
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-vue-next';
import { AccordionHeader, AccordionTrigger } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          class="h-5 w-5 shrink-0 transition-transform duration-200 mx-4"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
