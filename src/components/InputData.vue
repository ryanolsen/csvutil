<template>
  <div>
    <h2>
      Input
    </h2>
    <textarea v-model="data"></textarea>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      data_old: ''
    }
  },
  methods: {
    transferInput
  },
  computed: {
    ...mapGetters({
      input: 'input'
    }),
    data: {
      // getter
      get: function () {
        return this.$store.state.input
      },
      // setter
      set: function (value) {
        this.$store.dispatch('setInput', value)
      }
    }
  }
}

function transferInput () {
  this.$store.dispatch('setInput', this.data)
}
</script>

<style scoped>
  button {
    width:100%;
  }
</style>
