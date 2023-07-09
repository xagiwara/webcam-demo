<template>
  <video ref="elm" autoplay="true" @loadedmetadata="onloadedmetadata"  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const elm = ref<HTMLVideoElement>();

const props = defineProps<{
  deviceId: string;
}>();

const srcObject = ref<MediaStream>();

watch(() => ({ elm: elm.value, srcObject: srcObject.value }), async ({ elm, srcObject }) => {
  elm && (elm.srcObject = srcObject ?? null);
}, { immediate: true, deep: true });

watch(() => props.deviceId, async deviceId => {
  srcObject.value = undefined;
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      deviceId,
    },
  });
  srcObject.value = stream;
}, { immediate: true });

const onloadedmetadata = (ev: Event) => {
  const target = ev.target as HTMLVideoElement;
  console.log(target.videoWidth, target.videoHeight);
};
</script>
