<template>
  <div>
    <p v-for="item in fetchedAsk">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_age }}, {{ item.domain }}</small>
    </p>
    Ask
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>