<template>
  <div class="hello">
    <router-link :to="{ name: 'Profile', params: { msg } }">
      <button>Go to your profile {{msg}}</button>
    </router-link>
    <button @click="goHome">Go to your profile</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "LEO LOVE NING"
    };
  },
  methods: {
    goHome: function(msg) {
      msg = this.msg;
      this.$router.push({ name: "Profile", params: { msg } });
    }
  }
};
</script>