<template lang="pug">
  .content
    h2 Skills
    .tag(v-for='skill in skills') {{ skill }}
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
