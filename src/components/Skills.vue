<template>
  <div class="content">
    <h2>Skills</h2>
    <div class="tag" v-for="skill in skills" :key="skill">{{ skill }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    skills: [
      "vue.js",
      "react.js",
      "sass",
      "babel",
      "webpack",
      "typescript"
    ]
  })
};
</script>


<style lang="scss" scoped>
.tag {
  margin: 0.5em;
}

h2 {
  color: #1f92cc;
}
</style>
