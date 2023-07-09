<template>
  <select v-model="value" :title="value">
    <option :value="undefined">---</option>
    <option :value="value" v-if="value && !deviceIDs.includes(value)">unknown device &lt;{{ value }}&gt;</option>
    <option v-for="x in devices" :key="x.deviceId" :value="x.deviceId">{{ x.label }} &lt;{{ x.deviceId }}&gt;</option>
  </select>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const devices = await navigator.mediaDevices.enumerateDevices().then(x => x.filter(x => x.kind === 'videoinput'));
const deviceIDs = devices.map(x => x.deviceId);

const props = defineProps<{
  modelValue: string | undefined;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | undefined): void }
>();

const value = ref<string>();

watch(() => props.modelValue, v => {
  value.value = v;
}, { immediate: true });

watch(value, v => {
  emit('update:modelValue', v);
});
</script>
