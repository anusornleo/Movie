<!-- src/components/Home.vue -->
<template>
  <div class="bg bg-dark">
    <nav class="stepBar step3" ref="nav">
      <li class="step current">STEP1</li>
      <li class="step">STEP2</li>
      <li class="step">STEP3</li>
    </nav>

    <ul class="social" style="position: absolute;">
      <li>
        <a class="fa fa-facebook" @click="goHome" style="border-radius: 10%;">
          <img src="https://image.flaticon.com/icons/svg/20/20176.svg">
        </a>
      </li>
    </ul>

    <div class="container">
      <div class="card card_custom">
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              <img class="portait_poster" :src="poster">
            </div>

            <div class="col-5">
              <h1>{{title.charAt(0).toUpperCase()}}{{title.slice(1)}}</h1>

              <p class="text-muted">
                Location latkabang | Thratre {{value.theater}}
                <br>
                Date {{value.date}} | Time {{value.time}}
              </p>

              <div class="group_seat">
                <p
                  class="text-muted"
                  style="text-align: center;font-size:18px;letter-spacing: 15px;"
                >SCREEN</p>
                <hr>

                <label class="switch" v-for="seat in seats" :key="seat.id">
                  <input type="checkbox" :id="seat" :value="seat" v-model="seat_select">
                  <span class="slider"></span>
                </label>
                
                <span class="col-3" v-for="ex_seat in ex_seats" :key="ex_seat.id">
                  <label class="switch2">
                    <input type="checkbox" :id="ex_seat" :value="ex_seat" v-model="seat_select">
                    <span class="slider2"></span>
                  </label>
                </span>
              </div>
              <button @click="clear_seat" type="button" class="btn btn-danger">Clear Seat</button>
              <h6>Selected {{seat_select.length}} seats</h6>
              <button
                @click="goPlayment(seat_select,title,num,value,sum_cost,mail,poster)"
                type="button"
                class="btn btn-info"
              >Next</button>
            </div>
            <div class="col-3 height">
              <h4 style="right: 38px;position: absolute;">Total : {{sum_cost}} ฿</h4>
              <div class="c1">
                <div class="c2">
                  <h4 class="no_select">{{no_seat}}</h4>

                  <!-- box show selected seat -->
                  <div
                    class="card card_select"
                    style="margin-bottom: 10px; width:245px"
                    v-for="(seat_s) in seat_select"
                    :key="seat_s.id"
                  >
                    <div
                      style="border-radius: 12px;"
                      v-bind:style="parseInt(seat_s.cos) < 180 ? {backgroundColor: '#b3cce6'} : {backgroundColor: 'rgb(153, 204, 255)'}"
                      class="card-body"
                    >
                      <h4>{{seat_s.num}}</h4>

                      <select v-model="seat_s.cos" class="custom-select">
                        <option selected :value="seat_s.type[0]">Adult</option>
                        <option :value="seat_s.type[1]">Child</option>
                      </select>
                      <h4 class="cost">{{seat_s.cos}} ฿</h4>
                    </div>
                  </div>
                  <!-- box show selected seat -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: ["value", "title", "mail", "poster"],
  data() {
    return {
      seats: [
        {
          num: "F1",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "F2",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "F3",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "F4",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "F5",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "F6",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "F7",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "F8",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "F9",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "F10",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "E1",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "E2",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "E3",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "E4",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "E5",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "E6",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "E7",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "E8",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "E9",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "E10",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "D1",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "D2",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "D3",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "D4",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "D5",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "D6",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "D7",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "D8",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "D9",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "D10",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "C1",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "C2",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "C3",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "C4",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "C5",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "C6",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "C7",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "C8",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "C9",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "C10",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "B1",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "B2",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "B3",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "B4",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "B5",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "B6",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "B7",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "B8",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "B9",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "B10",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "A1",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "A2",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "A3",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "A4",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "A5",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "A6",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "A7",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "A8",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "A9",
          type: ["180", "90"],
          cos: "180"
        },
        {
          num: "A10",
          type: ["180", "90"],
          cos: "180"
        }
      ],
      ex_seats: [
        {
          num: "AA1",
          type: ["350", "150"],
          cos: "350"
        },
        {
          num: "AA2",
          type: ["350", "150"],
          cos: "350"
        },
        {
          num: "AA3",
          type: ["350", "150"],
          cos: "350"
        },
        {
          num: "AA4",
          type: ["350", "150"],
          cos: "350"
        }
      ],
      seat_select: [],
      type: [],
      type_seat: [],
      num: 0
    };
  },

  computed: {
    no_seat: function() {
      return this.seat_select.length === 0 ? "No Select" : "";
    },
    sum_cost: function() {
      this.num = this.seat_select.reduce(
        (acc, item) => acc + parseInt(item.cos),
        0
      );
      return this.num;
    }
  },
  // mounted(){
  //   if (localStorage.getItem('seat_select')){
  //     try {
  //       this.seat_select = JSON.parse(localStorage.getItem('seat_select'))
  //     } catch(e){
  //       localStorage.removeItem('seat_select');
  //     }
  //   }
  // },
  methods: {
    clear_seat: function() {
      this.seat_select = [];
    },
    goPlayment: function(
      seat_select,
      title,
      num,
      value,
      sum_cost,
      mail,
      poster
    ) {
      let seat_total = seat_select.length;
      if (seat_total == 0) {
        this.$swal("ERROR", "Please Select Seat");
      } else {
        this.$router.push({
          name: "Payment",
          params: { seat_select, title, num, value, sum_cost, mail, poster }
        });
      }
    },
    goHome: function() {
      this.$router.push("/");
    }
    // saveLocal() {
    //   const parsed = JSON.stringify(this.seat_select);
    //   // localStorage.setItem('seat_select', parsed);
    // }
  }
};
</script>

<style scoped>
.fa {
  left: 10px;
}
body {
  margin: 0;
  padding: 0;
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

@media (min-width: 1000px) {
  .container {
    max-width: 1140px;
  }
}

.card_custom {
  width: auto;
  margin: auto;
  top: 3.5rem;
  border-radius: 15px;
}

.container {
  padding: 0;
  height: -webkit-fill-available;
}

.navbar {
  width: -webkit-fill-available;
  position: absolute;
}

.portait_poster {
  width: 373px;
  height: 550px;
  border-radius: 10px;
}

.group_seat {
  margin-top: 20px;
  margin-bottom: 30px;
  width: 402px;
}

.col-5 {
  padding-left: 3rem;
}

.text-muted {
  font-size: 1.2rem;
}

hr {
  border-top: 3px solid rgba(0, 0, 0, 0.1);
}

h6 {
  padding: inherit;
  display: inline;
}

.btn-info {
  position: absolute;
  padding-left: 29px;
  padding-right: 29px;
  top: 495px;
  left: 363px;
}

.height {
  overflow: hidden;
  height: 550px;
}

.c1 {
  top: 41px;
  position: absolute;
  height: 90%;
  width: 103%;
  border: 0px solid green;
  overflow: hidden;
}

.c2 {
  width: 105%;
  height: 100%;
  border: 0px solid;
  overflow: auto;
  padding-right: 15px;
}

.no_select {
  margin-top: 90%;
  margin-left: 16%;
  color: rgb(141, 141, 141);
  position: absolute;
}

select {
  width: 74px;
  position: absolute;
  top: 17px;
  left: 75px;
}

.card_select {
  height: 70px;
  border: none;
  border-radius: 10px;
}

.cost {
  position: absolute;
  top: 19px;
  right: 15px;
}

/* seat select --------------------------------------------------------------------------- */
.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 34px;
  margin: 3px;
}

.switch2 {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 3px;
  margin-left: 7px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider2 {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 10px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  border-radius: 13px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider2:before {
  position: absolute;
  content: "";
  height: 10px;
  width: 52px;
  left: 4px;
  bottom: 4px;
  border-radius: 13px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: rgb(51, 102, 153);
}

input:checked + .slider2 {
  background-color: #bda105;
}
.social {
  z-index: 20;
  width: 200px;
  height: 220px;
  margin-top: 273px;
  position: fixed;
  perspective: 1000px;
}

.social li a {
  display: block;
  height: 60px;
  width: 60px;
  background: #26bfa1;
  border-bottom: 1px solid #333;
  font: normal normal normal 16px/20px "FontAwesome", "Source Sans Pro",
    Helvetica, Arial, sans-serif;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  border-radius: 30px;
  transition: background 0.5s ease 0.3ms;
}

.social li:first-child a:hover {
  background: #3b5998;
}
.social li:nth-child(2) a:hover {
  background: #00acee;
}
.social li:nth-child(3) a:hover {
  background: #ea4c89;
}
.social li:nth-child(4) a:hover {
  background: #dd4b39;
}

.social li:first-child a {
  border-radius: 0 5px 0 0;
}
.social li:last-child a {
  border-radius: 0 0 5px 0;
}

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
  transition: all 0.5s ease 0.3ms;
}

.social li span:after {
  content: "";
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
  transform: rotateY(0);
}
</style>
