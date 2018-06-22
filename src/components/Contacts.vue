<template lang="pug">
  .content
    h2 Contacts
    .level.is-mobile(v-for='contact in contacts'): .level-left
      span.level-item.icon: i.fa(:class='`fa-${contact.icon}`')
      a.level-item(:href='contact.href') {{ contact.text }}
</template>

<script>
import contacts from '../data/contacts'
export default { data: () => ({ contacts }) }
</script>

<style lang="scss" scoped>
  .level:not(:last-child) {
    margin-bottom: 1rem;
  }
</style>
