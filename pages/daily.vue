<template>
  <div class="container">
    <NuxtLink
      v-for="daily in dailies"
      :key="daily.id"
      :to="'/p/' + daily.id"
      class="link"
      >{{ daily.timestamp | format }}</NuxtLink
    >
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment-timezone'
import Vue from 'vue'

export default Vue.extend({
  filters: {
    format(value) {
      return moment(value).tz('UTC').format('MMMM Do YYYY')
    },
  },

  async fetch() {
    const response = await axios.get('daily.json')
    this.dailies = Object.entries(response.data)
      .map((value) => {
        return {
          timestamp: parseInt(value[0]),
          id: value[1],
        }
      })
      .filter((value) => {
        return value.timestamp <= Date.now()
      })
      .sort((a, b) => {
        return b.timestamp - a.timestamp
      })
  },

  data() {
    return {
      dailies: [],
    }
  },
})
</script>

<style scoped>
.container {
  margin: 4rem 0;
}

.link {
  color: #004e8c;
  display: block;
  padding: 0.5rem 0;
  text-decoration: none;
}
</style>
