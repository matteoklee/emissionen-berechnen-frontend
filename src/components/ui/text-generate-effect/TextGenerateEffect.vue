<template>
  <div :class="computedClass">
    <div ref="scope">
      <span
        v-for="(word, idx) in wordsArray"
        :key="word + idx"
        class="inline-block"
        :style="spanStyle"
      >
        {{ word }}&nbsp;
      </span>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { cn } from '@/lib/utils';

export default {
  name: 'TextGenerateEffect',
  props: {
    words: {
      type: String,
      required: true
    },
    filter: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 0.7
    },
    delay: {
      type: Number,
      default: 0
    },
    class: {
      type: [String, Array, Object],
      default: ''
    }
  },
  setup(props) {
    const scope = ref(null);
    const wordsArray = computed(() => props.words.split(' '));

    const computedClass = computed(() => cn('leading-snug tracking-wide', props.class));

    const spanStyle = computed(() => ({
      opacity: 0,
      filter: props.filter ? 'blur(10px)' : 'none',
      transition: `opacity ${props.duration}s, filter ${props.duration}s`
    }));

    onMounted(() => {
      if (scope.value) {
        const spans = scope.value.querySelectorAll('span');

        setTimeout(() => {
          spans.forEach((span, index) => {
            setTimeout(() => {
              span.style.opacity = '1';
              span.style.filter = props.filter ? 'blur(0px)' : 'none';
            }, index * 200);
          });
        }, props.delay);
      }
    });

    return {
      scope,
      wordsArray,
      computedClass,
      spanStyle
    };
  }
};
</script>
