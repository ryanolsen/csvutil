import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: '',
    jsonOutput: '',
    csvData: ''
  },
  mutations: {
    INPUT (state, payload) {
      state.input = payload
    },
    OUTPUT (state, payload) {
      state.csvData = payload
    }
  },
  actions: {
    exampleJson ({commit}) {
      const json = `[
        {
          "Column1": "Row1 Value1",
          "Column2": "Row1 Value2"
        },
        {
          "Column1": "Row2 Value1",
          "Column2": "Row2 Value2"
        }
]`
      commit('INPUT', json)
    },
    setInput ({commit}, payload) {
      commit('INPUT', payload)
    },
    convertCsvToJson ({commit, state}) {
      // loop over returns /r/n
      // first row is the headings
      let tempRowSplit = state.input.split('\n')
      let objKeys = tempRowSplit.shift()
      objKeys = objKeys.split(',')
      let arr = []

      for (var i = 0; i < tempRowSplit.length; i++) {
        let tmp = tempRowSplit[i].split(',')
        let cols = {}
        for (let col = 0; col < tmp.length; col++) {
          cols[objKeys[col]] = tmp[col]
        }
        arr.push(cols)
      }

      commit('OUTPUT', arr)
    },
    convertJsonToCsv ({commit, state}) {
      if (!state.input) return
      // transform to valid JSON so JSON.parse works
      const delim = ','
      const jsontemp = state.input.replace((/([\w]+)(:)/g), '"$1"$2')
      const correctjson = jsontemp.replace((/'/g), '"')
      const input = JSON.parse(correctjson)

      // tranform to csv
      let row = []
      let headings = []
      for (var i = 0; i < input.length; i++) {
        var col = []
        for (let o in input[i]) {
          col.push(input[i][o])

          if (i === 0) {
            headings.push(o)
          }
        }
        row.push(col.join(','))
      }
      row.unshift(headings.join(delim))
      commit('OUTPUT', row.join('\r\n'))
    }
  },
  getters: {
    input: state => state.input,
    csvData: state => state.csvData,
    jsonOutput: state => state.jsonOutput
  }
})
