<template>
  <div id="payment" class="bg bg-dark">
    <nav class="stepBar step3" ref="nav">
      <li class="step">STEP1</li>
      <li class="step current">STEP2</li>
      <li class="step">STEP3</li>
    </nav>

    <ul class='social' style="position: absolute;">
      <li>
        <a class="fa fa-facebook" @click="goHome" style="border-radius: 10%;">
          <img src="https://image.flaticon.com/icons/svg/20/20176.svg">
        </a>
      </li>
    </ul>

    <div class="container-fluid full-height">
      <div class="container" ref="main" v-bind:style="{position: type, top: navSize + 'px' }">
        <div class="row">
          <div class="col-md-12">

          </div>
        </div>

        <div class="row">
          <div class="col-md-6" style="text-align: -webkit-right;">
            <div class="card" style="width: 18rem;">
              <div class="card-body" style="text-align: left;">
                <h5 class="card-title">
                  Cash {{title}}
                  <!-- <img src="../components/img/notes.png" alt="debit card" width="10%"> -->
                </h5>
                <p class="card-text">Pay with cash on the counter of the cinema.</p>
                <a @click="goConfirm(seat_select,title,num,value,sum_cost,card_num,poster)" class="btn btn-primary"
                  style="color:white;">Go To Next Step</a>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-1"></div> -->
          <div class="col-md-6">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Crdit/Debit
                  <!-- <img src="../components/img/debit.png" alt="debit card" width="10%"> -->
                </h5>
                <p class="card-text">Use credit card or debit card to pay for a ticket.</p>
                <button @click="showCard" class="btn btn-primary">Go Fill Your Credit Card</button>
              </div>
            </div>
          </div>
          <div class="col-md-5"></div>
        </div>
        <br>

        <div class="row">
          <div class="col-md-12">
            <div v-if="showState" class="b">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="cardnumber">CardNumber</label>
                  <input v-model="card_num" type="cardnumber" class="form-control" id="cardnumber" placeholder="xxxx-xxxx-xxxx-xxxx">
                </div>
                <div class="form-group col-md-6">
                  <label for="ccv">CCV</label>
                  <input type="password" class="form-control" id="ccv" placeholder="ccv">
                </div>
              </div>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name">
              </div>
              <div>
                <button @click="goConfirm(seat_select,title,num,value,sum_cost,mail,poster,card_num,)" type="submit"
                  class="btn btn-primary">Confirm</button>
                <button type="submit" class="btn btn-primary">Cancle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scope>
  @media (min-width: 492px) {
    .container {
      max-width: 700px;
    }
  }

  .btn-primary {
    color: white;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Hind Madurai", sans-serif;
  }

  .full-height {
    height: 100vh;
  }

  .nav-bar {
    position: fixed;
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
    position: absolute;
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
    content: "";
    background-color: #eee;
    border-left: 4px solid #fff;
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
    color: #fff;
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
  .social {
  z-index: 20;
  width: 200px;
  height: 220px;
  margin-top: 273px;
  position: fixed;
  perspective: 1000px
}

.social li a {
  display: block;
  height: 60px;
  width: 60px;
  background: #26bfa1;
  border-bottom: 1px solid #333;
  font: normal normal normal
  16px/20px 
  'FontAwesome', 'Source Sans Pro', Helvetica, Arial, sans-serif;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  border-radius: 30px;
  transition: background .5s ease .300ms
}

.social li:first-child a:hover { background: #3b5998 }
.social li:nth-child(2) a:hover { background: #00acee }
.social li:nth-child(3) a:hover { background: #ea4c89 }
.social li:nth-child(4) a:hover { background: #dd4b39 }

.social li:first-child a { border-radius: 0 5px 0 0 }
.social li:last-child a { border-radius: 0 0 5px 0 }
    
.social li a span {
  width: 100px;
  float: left;
  text-align: center;
  background: #222;
  color: #fff;
  margin: -10px 40px;
  padding: 8px;
  transform-origin: 0;
  visibility: hidden;
  opacity: 0;
  transform: rotateY(45deg);
  border-radius: 5px;
  transition: all .5s ease .300ms
}

.social li span:after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  left: -20px;
  top: 7px;
  border-left: 10px solid transparent;
  border-right: 10px solid #222;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
}

.social li a:hover span {
  visibility: visible;
  opacity: 1;
  transform: rotateY(0)
}

</style>

<script>
  export default {
    name: "#payment",
    props: ["seat_select", "title", "num", "value", "sum_cost", "mail", "poster"],
    data() {
      return {
        navSize: 80,
        type: "relative",
        showState: false,
        card_num: ''
      };
    },
    created() {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener("resize", this.handleResize);
    },
    methods: {
      handleResize() {
        this.navSize = this.$refs.nav.clientHeight + 20;
      },
      showCard() {
        if (this.showState == true) {
          this.showState = false;
        } else if (this.showState == false) {
          this.showState = true;
        }
      },
      goConfirm: function (seat_select, title, num, value, sum_cost, mail, poster, card_num) {
        this.$router.push({
          name: "Confirm",
          params: {
            seat_select,
            title,
            num,
            value,
            sum_cost,
            mail,
            poster,
            card_num
          }
        });
      },
      goHome: function (){
        this.$router.push("home");
      }
    },
    computed: {},
    watch: {}
  };

</script>
