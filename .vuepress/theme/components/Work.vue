<template>
  <v-card class="pa-4">
    <Audio v-if="isAudio"/>
    <Video v-if="isVideo"/>
  </v-card>
</template>
<script>
import Audio from './components/Audio';
import Video from './components/Video';
export default {
  components: {
    Audio,
    Video
  },
  computed: {
    isAudio() {
      const {frontmatter} = this.$page;
      return frontmatter.workType === "audio";
    },
    isVideo() {
      const {frontmatter} = this.$page;
      return frontmatter.workType === "video";
    },
  }
};
</script>
<style>
</style>
