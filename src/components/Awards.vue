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
.level:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
