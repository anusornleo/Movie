<template>
  <div id="confirm">
    <div class="container-fluid full-height">

      <nav class="row nav-bar" ref="nav">
        <div class="col-md-3">
          <h1>Step1</h1>
        </div>
        <div class="col-md-1 triangle">
        </div>
        <div class="col-md-3">
          <h1>Step2</h1>
        </div>
        <div class="col-md-1 triangle">
        </div>
        <div class="col-md-3">
          <h1>Step3</h1>
        </div>
        <div class="col-md-1">
        </div>
      </nav>

      <div class="container" ref="main" v-bind:style="{position: type, top: navSize + 'px' }">
        <div class="row">
          <div class="col-md-4">
            <img src="" alt="Test">
          </div>
          <div class="col-md-8">
            <h2>Email Info: </h2>
            <h2>Title: </h2>
            <h2>Theater: </h2>
            <h2>Time: </h2>
            <h2>Quantity: </h2>
            <h2>Seat: </h2>
            <h2>Payment Method: </h2>
            <button type="submit" class="btn btn-primary">Confirm</button>
            <button type="submit" class="btn btn-primary">Cancle</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scope>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Hind Madurai', sans-serif;
  }
  .full-height {
    height: 100vh;
  }
  .nav-bar {
    position: fixed;
    background-color: black;
    width: 100%;
    z-index: 120;
  }
  .nav-bar h1 {
    color: white;
    text-align: center;
  }
  .triangle {
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-left: 50px solid red;
    border-bottom: 30px solid transparent;
  }
</style>

<script>
export default {
    name: "#confirm",
    data() {
      return {
        navSize: 110,
        type: 'relative',
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize() {
        this.navSize = (this.$refs.nav.clientHeight) + 50;
      }
    },
}
</script>