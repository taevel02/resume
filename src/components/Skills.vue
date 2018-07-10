<template lang="pug">
  .content
    h2 Skills
    .tag(v-for='skill in skills') {{ skill }}
</template>

<script>
  export default {
    data: () => ({
      skills: ['Vue.js', 'ES6', 'Node.js', 'Sass', 'BEM', 'Kotlin', 'Android']
    })
  }
</script>


<style lang="scss" scoped>
  .tag {
    margin: 0.5em;
  }
</style>
