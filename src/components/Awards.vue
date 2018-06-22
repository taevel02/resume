<template lang="pug">
  .content
    h2 Awards
    .level.is-mobile(v-for='award in awards'): .level.left {{ award }}
</template>

<script>
  export default {
    data: () => ({
      awards: ['2014 WRO 로봇 미션 부문 - 우수상', '2018 스타트업 위크엔드 - 우수상', '2018 4차산업혁명 아이디어 공모전 - 장려상']
    })
  }
</script>


<style lang="scss" scoped>
  .tag {
    margin: 0.5em;
  }
</style>
