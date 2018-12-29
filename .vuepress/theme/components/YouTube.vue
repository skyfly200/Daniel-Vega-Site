<template>
  <div class="videoWrapper">
    <iframe width="560" height="349" :src="frontmatter.url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>
<script>
export default {
  props: ["frontmatter"]
};
</script>
<style>
  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }
  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
