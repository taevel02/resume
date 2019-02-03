<template>
  <div class="content">
    <h2>Contacts</h2>
    <div class="level is-mobile" v-for="contact in contacts">
      <div class="level-left">
        <span class="level-item icon"><i class="fa" :class="`fa-${contact.icon}`"></i></span>
        <a class="level-item" :href="contact.href">{{ contact.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import contacts from "../data/contacts";
export default { data: () => ({ contacts }) };
</script>

<style lang="scss" scoped>
.level:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
