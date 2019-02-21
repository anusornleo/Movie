<template>
  <input type="text" :value="value" placeholder="escription" @input="updateValue($event.target.value)">
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