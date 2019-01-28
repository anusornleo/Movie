<template>
  <div>
    <div class="grid-container">
      <div class="grid-item" v-for="item in list" :key="item.id">
        <img class="poster" :src="item.poster">
        <div class="overlay">
          <div class="box_text">
            <div class="text">{{item.title}}</div>
          </div>
          <div class="detail btn_box" @click="goDetail">Detail</div>
          <div class="buy btn_box">Buy Ticket</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = 'http://localhost:5000/movie_list'
export default {
  name: 'Home',
  data: function () {
    return {
      list: []
    }
  },
  methods: {
    goDetail: function () {
      this.$router.push('/detail')
    },
    loadDate: function () {
      this.$http.get(API_URL)
        .then(response => {
          console.log(response)
          this.list = response.body
        }, () => {
          this.list = []
        })
    }
  },
  created: function () {
    this.loadDate()
  }
}
</script>

<style>
/* home card movie */

.grid-container {
  width: 1000px;
  display: grid;
  margin: auto;
  margin-top: 100px;
  grid-template-columns: auto auto auto auto;
}

.grid-item {
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0 0px 32px 0;
  width: 225px;
  height: 350px;
  padding: 0px;
  font-size: 30px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  width: 100%;
  height: 20%;
  transition: 0.5s ease;
}

.grid-item:hover .overlay {
  height: 55%;
}
.poster {
  width: 100%;
  height: 80%;
}
.box_text{
  font-size: 20px;
  height: 70px;
  position: relative;
}
.text {
  margin: -44px 0px 0px 0px;
  position: absolute;
  width: 180px;
  top: 76px;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.btn_box{
  margin: 0 auto 10px auto;
  position: relative;
  width: 77%;
  height: 45px;
  border-radius: 7px;
  cursor: pointer;
  color: white;
  font-size: 18px;
  padding: 10px;
}
.detail{
  background-color:darkcyan;
}
.buy{
  background-color: crimson;
}
</style>


