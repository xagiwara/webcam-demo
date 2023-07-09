<template>
  <Suspense>
    <div class="container">
      <div class="videos">
        <MediaVideo v-for="x in sources" :key="x" :device-id="x" />
      </div>
      <div class="sources">
        <VideoSources v-model="sources" />
      </div>
    </div>
  </Suspense>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import VideoSources from './components/VideoSources.vue';
import MediaVideo from './components/MediaVideo.vue';

const videoRef = ref<HTMLVideoElement>();

const sources = ref<string[]>((() => {
  const v = localStorage.getItem('sources');
  return v ? JSON.parse(v) : [];
})());

onMounted(() => {
  console.log(videoRef.value);
});

watch(sources, sources => {
  localStorage.setItem('sources', JSON.stringify(sources));
});
</script>

<style lang="scss">
body {
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 8px;
}
</style>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1em;
  height: 100%;

  > * {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .sources {
    :deep() {
      select {
        width: 100%;
      }
    }
  }

  .videos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-template-rows: auto;
    gap: 1em;
    align-content: start;
  }
}

video {
  border: 1px solid black;
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
</style>
