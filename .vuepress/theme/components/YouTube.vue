<template>
  <iframe width="560" height="315" :src="frontmatter.url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</template>
<script>
export default {
  props: ["frontmatter"]
};
</script>
<style>
</style>
