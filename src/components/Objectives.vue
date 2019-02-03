<template>
  <div class="content">
    <h2>Objectives</h2>
    <div class="level is-mobile" v-for="objective in objectives">
      <div class="level">{{ objective }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    objectives: [
      "요리하는 개발자.",
      "중고등학교 체육 교사가 꿈인 개발자."
    ]
  })
};
</script>


<style lang="scss" scoped>
.level:not(:last-child) {
  margin-bottom: 0.3rem;
}

h2 {
  color: #1f92cc;
}
</style>
