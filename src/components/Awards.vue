<template>
  <div class="content">
    <h2>Awards</h2>
    <div class="level is-mobile" v-for="award in awards">
      <div class="level left">{{ award }}</div>
    </div>
  </div>
</template>

<script>
import awards from "../data/awards";
export default { data: () => ({ awards }) };
</script>

<style lang="scss" scoped>
.level:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
