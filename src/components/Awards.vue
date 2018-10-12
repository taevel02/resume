<template lang="pug">
  .content
    h2 Awards
    .level.is-mobile(v-for='award in awards'): .level.left {{ award }}
</template>

<script>
import awards from '../data/awards'
export default { data: () => ({ awards }) }
</script>

<style lang="scss" scoped>
  .level.is-mobile .level.left {
    border: 0.5em;
  }
</style>
