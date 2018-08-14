<template lang="pug">
  .content
    h2 Skills
    .tag(v-for='skill in skills') {{ skill }}
</template>

<script>
  export default {
    data: () => ({
      skills: ['vue.js', 'es6', 'node.js', 'sass', 'BEM', 'kotlin', 'android', 'firebase']
    })
  }
</script>


<style lang="scss" scoped>
  .tag {
    margin: 0.5em;
  }
</style>
