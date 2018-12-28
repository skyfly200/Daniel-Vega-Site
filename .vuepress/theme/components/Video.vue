<template>
  <video width="320" height="240" controls :src="frontmatter.file">
    Your browser does not support the video tag.
    <a :href="frontmatter.file">Here is a link to the file.</a>
  </video>
</template>
<script>
export default {
  props: ["frontmatter"]
};
</script>
<style>
</style>
