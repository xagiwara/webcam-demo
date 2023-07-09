<template>
  <VideoSource v-for="x, i in value" :key="i" v-model="value[i]"></VideoSource>
</template>

<script lang="ts" setup>
import VideoSource from './VideoSource.vue';
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: string[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void;
}>();

const value = ref<(string | undefined)[]>([]);

watch(() => props.modelValue, v => {
  value.value = [...v, undefined];
}, { immediate: true });

const match = (v0: (string | undefined)[], v1: (string | undefined)[]) => {
  if (v0.length !== v1.length) {
    return false;
  }
  return !v0.some((x, i) => x !== v1[i]);
};

let p = false;

watch(value, v => {
  if (!p) {
    p = true;
    const next = [...v.filter(x => x != null), undefined];
    if (!match(v, next)) {
      emit('update:modelValue', [...v.filter((x): x is string => x != null)]);
    }
    p = false;
  }
}, { deep: true });
</script>
