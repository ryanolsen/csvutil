<template>
  <div>
    <h2>Output</h2>
    <textarea>{{csvData}}</textarea>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters({
      csvData: 'csvData',
      csvColumnHeadings: 'csvColumnHeadings'
    })
  }
}
</script>
