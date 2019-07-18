<template>
  <div class="content">
    <h2>Awards</h2>
    <div class="awards" v-for="history of awards" :key="history">
      <div class="level" v-for="award in history.awards" :key="award">
        {{ award }}
      </div>
    </div>
</template>

<script>
import awards from "../data/awards";
export default { data: () => ({ awards }) };
</script>

<style lang="scss" scoped>
.level:not(:last-child) {
  margin-bottom: 0.3rem;
}

h2 {
  color: #1f92cc;
}
</style>
