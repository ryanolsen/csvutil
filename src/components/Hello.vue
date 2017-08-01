<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="flex-container">
      <div class="flex-item">
        <inputdata></inputdata>
      </div>
      <div class="flex-item-controls">
        <div>
          <button @click="jsonToCsv">Json to CSV</button>
        </div>
        <div>
          <button @click="csvToJson">CSV to Json</button>
        </div>
        <br />
        <br />
        <div>
          <button @click="exJson">Load example Json</button>
        </div>
      </div>
      <div class="flex-item">
        <outputdata></outputdata>
      </div>
    </div>
  </div>
</template>

<script>
import inputdata from './InputData'
import outputdata from './OutputData'

export default {
  name: 'hello',
  components: {
    inputdata,
    outputdata
  },
  data () {
    return {
      msg: 'Welcome to Your CSV Utility App'
    }
  },
  methods: {
    jsonToCsv,
    csvToJson,
    exJson
  }
}

function jsonToCsv () {
  this.$store.dispatch('convertJsonToCsv')
}

function csvToJson () {
  this.$store.dispatch('convertCsvToJson')
}

function exJson () {
  this.$store.dispatch('exampleJson')
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.flex-container {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;  flex-flow: row no-wrap;
  justify-content: center;
}

.flex-item {
  flex-grow: 1;
  margin: 0 10px;
}

.flex-item-controls {
  align-self: center;
}
</style>
