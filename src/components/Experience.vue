<template>
  <div class="content">
    <h2>Experience</h2>
    <div class="level is-mobile" v-for="experience in experiences" :key="experience">
      <div class="level">{{ experience }}</div>
    </div>
  </div>
</template>

<script>
import experiences from "../data/experiences";
export default { data: () => ({ experiences }) };
</script>

<style lang="scss" scoped>
.level:not(:last-child) {
  margin-bottom: 0.3rem;
}

h2 {
  color: #1f92cc;
}
</style>
