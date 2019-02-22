<template>
  <input type="text" :value="value">
</template>
<script>
export default {
props: ['value'],
  
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>