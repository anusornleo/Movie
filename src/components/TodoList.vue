<template>
  <div class="container">
    <div class="field-warp">
      <field-list v-model="description"></field-list>
    </div>
    <pre>{{ description }}</pre>
  </div>
</template>
<script>
import FieldList from './FieldList'
export default {
components: {
    FieldList
  },
data() {
    return {
      description: ''
    }
  }
  
}
</script>
<style>
.container {
  width: 960px;
  margin: 0 auto;
  text-align: center;
}
.field-warp {
  display: block;
}
</style>