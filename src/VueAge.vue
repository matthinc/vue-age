<template>
     <span>{{age}}</span>
</template>

<script>
export default {
  name: 'Age',
  props: {
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: false,
      default: 1
    },
    day: {
      type: Number,
      required: false,
      default: 1
    }
  },
  computed: {
    age () {
      let now = new Date(Date.now())
      let yearDifference = now.getFullYear() - this.year
      console.log(now.year)
      if (now.getMonth() + 1 < this.month || (now.getMonth() + 1 === this.month && now.getDate() < this.day)) {
        yearDifference -= 1
      }
      if (yearDifference <= 0) {
        return ''
      }
      return yearDifference
    }
  }
}
</script>
