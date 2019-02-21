<template>
  <div class="card" style="margin-bottom: 10px; width:245px">
    <div class="card-body">
      <h4>{{seat_s}}</h4>
      <select v-model="val" @input="updateValue($event.target.value)">
        <option disabled value>Type..</option>
        <option value="1">Adult</option>
        <option value="2">Child</option>
      </select>
 
    </div>
  </div>
</template>

<script>
import Seat from './select'

export default {
  props: ["value"],
  data() {
    return {
      val: [],
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("value", value);
    }
  }
};
</script>
<style scoped>
select {
  width: 80px;
  position: absolute;
  top: 17px;
  left: 60px;
}
</style>

