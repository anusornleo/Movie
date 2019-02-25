<template>
  <div id="confirm">
    <div class="container-fluid full-height">

      <nav class="stepBar step3" ref="nav">
        <li class="step">STEP1</li>
        <li class="step">STEP2</li>
        <li class="step current">STEP3</li>
      </nav>

      <div class="container" ref="main" v-bind:style="{position: type, top: navSize + 'px' }">
        <div class="row">
          <div class="col-md-4">
            <img src="" alt="Test">
          </div>
          <div class="col-md-8">
            <h2>Email Info: </h2>
            <h2>Title: {{title}}</h2>
            <h2>Theater: {{value.theater}}</h2>
            <h2>Time: {{value.time}} </h2>
            <h2>Quantity: {{seat_select.length}}</h2>
            <h2>Seat: </h2>
            <h2>Payment Method: {{card_num}}</h2>
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

  .stepBar {
    position: relative;
    list-style: none;
    margin: 0 0 1em;
    padding: 0;
    text-align: center;
    width: 100%;
    overflow: hidden;
    *zoom: 1;
  }

  .stepBar .step {
    position: relative;
    float: left;
    display: inline-block;
    line-height: 40px;
    padding: 0 40px 0 20px;
    background-color: #eee;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .stepBar .step:before,
  .stepBar .step:after {
    position: absolute;
    left: -15px;
    display: block;
    content: '';
    background-color: #eee;
    border-left: 4px solid #FFF;
    width: 20px;
    height: 20px;
  }

  .stepBar .step:after {
    top: 0;
    -moz-transform: skew(30deg);
    -ms-transform: skew(30deg);
    -webkit-transform: skew(30deg);
    transform: skew(30deg);
  }

  .stepBar .step:before {
    bottom: 0;
    -moz-transform: skew(-30deg);
    -ms-transform: skew(-30deg);
    -webkit-transform: skew(-30deg);
    transform: skew(-30deg);
  }

  .stepBar .step:first-child {
    -moz-border-radius-topleft: 4px;
    -webkit-border-top-left-radius: 4px;
    border-top-left-radius: 4px;
    -moz-border-radius-bottomleft: 4px;
    -webkit-border-bottom-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .stepBar .step:first-child:before,
  .stepBar .step:first-child:after {
    content: none;
  }

  .stepBar .step:last-child {
    -moz-border-radius-topright: 4px;
    -webkit-border-top-right-radius: 4px;
    border-top-right-radius: 4px;
    -moz-border-radius-bottomright: 4px;
    -webkit-border-bottom-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .stepBar .step.current {
    color: #FFF;
    background-color: #26bfa1;
  }

  .stepBar .step.current:before,
  .stepBar .step.current:after {
    background-color: #26bfa1;
  }

  .stepBar.step2 .step {
    width: 50%;
  }

  .stepBar.step3 .step {
    width: 33.333%;
  }

  .stepBar.step4 .step {
    width: 25%;
  }

  .stepBar.step5 .step {
    width: 20%;
  }

</style>

<script>
  export default {
    name: "Confirm",
    props: ['seat_select','title','num','value','sum_cost','card_num'],
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
