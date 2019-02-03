<template>
  <div class="content">
    <h2>Skills</h2>
    <div class="tag" v-for="skill in skills">{{ skill }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    skills: [
      "vue.js",
      "react.js",
      "node.js",
      "sass",
      "babel",
      "graphql",
      "firebase"
    ]
  })
};
</script>


<style lang="scss" scoped>
.tag {
  margin: 0.5em;
}
</style>
