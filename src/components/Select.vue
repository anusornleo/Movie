<!-- src/components/Home.vue -->
<template>
  <div class="bg bg-dark">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Logo Cinema</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="card card_custom">
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              <img
                class="portait_poster"
                src="https://media1.popsugar-assets.com/files/thumbor/G8WL9ct5Wo7q7Zaug8dd99GptbY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/07/16/938/n/1922283/d757511d5b4d0eb588dbe8.16610880_/i/Aquaman-Movie-Poster-Memes-July-2018.jpg"
              >
            </div>

            <div class="col-5">
              <h1>{{title}}.</h1>

              <p class="text-muted">
                Location latkabang | Thratre {{}}
                <br>
                Date 00 FEB 9999 | Time {{}}
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
              <button type="button" class="btn btn-info">Next</button>
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
  props: ["value", "title"],
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
    }
    // saveLocal() {
    //   const parsed = JSON.stringify(this.seat_select);
    //   // localStorage.setItem('seat_select', parsed);
    // }
  }
};
</script>

<style scoped>
@media (min-width: 1000px) {
  .container {
    max-width: 1140px;
  }
}
.card_custom {
  width: auto;
  margin: auto;
  top: 4rem;
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
  height: 100%;
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
</style>
