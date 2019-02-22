<template>
  <div class="body_ton">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Logo Cinema</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Login as {{mail}}
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search Movie"
            aria-label="Search"
          >
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <slideshow></slideshow>

    <div class="w3-content" style="max-width:100%">
      <img class="mySlides" src="img/starwar_banner.jpg">
      <img class="mySlides" src="img/miraclesfromheaven_banner.jpg">
      <img class="mySlides" src="img/ragamuffin.jpg">
    </div>
    <br>
    <br>
    <br>
    <div class="container" style="padding: 25px;">
      <h2>Wellcome {{ mail }} Click to see Movie Detail</h2>
      <br>
      <div v-for="movie in movie_list" :key="movie.id" class="img-container">
        <img class="movie-list" v-bind:src="movie.poster" alt="Click to see review">

        <div class="detail-container">
          <div
            v-for="times in movie.all_time"
            :key="times.id"
            type="radio"
            class="btn btn-outline-light"
            v-on:click="goSelect(times,movie.title)"
          >{{times.time}}</div>
          <button type="button" class="btn btn-buy-ticket btn-light">Buy Ticket</button>
        </div>
        <div id="overlay">
          <h3 id="text">Short Review:
            <p>&nbsp;&nbsp;&nbsp;This is Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, enim laboriosam quae impedit dolorum veritatis eveniet repellendus dolore tempore harum consequatur. Error, odio? Dolorum aliquam vel non molestiae, facilis eligendi?</p>
          </h3>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import Slideshow from "@/components/slideshow";
export default {
  name: "Home",
  props: ["mail"],
  components: {
    Slideshow
  },
  data() {
    return {
      ac_display: "none",
      movie_list: [
        {
          title: "Star War 8",
          poster:
            "https://lh3.googleusercontent.com/8Nb17-RgjEf0rkZn36nDoUGaSuTBc59oSFfp2gP_gxmxpCrylzOWm2IZs8fyu8o-vALEQV8T_ixH_NuvRsD8tuitQMIX6c1Fqo7hllHaoQKDDccPE5ai4_ooZRyxaB083Z_VqAf2Cd3yDYxzrKC2Z-nCCSIjcMNFm4jdVkqESYi6c1siX2pxzApQ9TdHouZAj6ssUNiNBGPZpFFBBz8TFNxg9YPCEvj_O3YflzJj6OOTZyeXLGLN1lGnxn97H1l0cm1rijF41KwD_ramcJKV9yX80jsbzPbEj-EWe8dntDTYtJOlvmsz6nAM1_JSOBQmpa7QNPJ7AXAr86CEF_XEfPpLHeTnSW7BiW9Q_TLzFr-ylcpUjSLuZ7ux8-3KxkYOohdUbrQf200i3M0CaCf0SmWzAALCRnpAxaOJohLkX-cqBMFndUbfxItslqlM3edlV0Jj5I6HzhMI_PMV1PpBKlcELj5kq_ZVGXzkoL6TT1fqJ7bAjKvLCCcNu5EzDV0HKLSA8E3qfYwaNiynljV0dt2RozVD8dPXcN5CdsGm8fSKqz97Vrf8yJecduOfZhqL2KTgCZwvT0iuhdEqt-eQGFmsf3wsM-5Aq2V0N0chcIIjOfDdrI3ltfIXq0e_AESkRwGoVNdg1El-cA2_8lf9N7iIlpVQfls=w1920-h600-no",
          text: "",
          all_time: [
            { time: "10:10", theater: "1",date:"27 FEB 2019" },
            { time: "11:30", theater: "3",date:"27 FEB 2019" },
            { time: "14:20", theater: "4",date:"27 FEB 2019" }
          ]
        },
        {
          title: "Avenger Infinity war",
          poster:
            "https://preposterousprose.files.wordpress.com/2018/03/avengers-infinity-war-landscape.jpg?w=1184&#038;h=416&#038;crop=1",
          text: "",
          all_time: [
            { time: "11:10", theater: "7",date:"27 FEB 2019" },
            { time: "14:30", theater: "3",date:"27 FEB 2019" },
            { time: "19:20", theater: "2",date:"27 FEB 2019" }
          ]
        },
        {
          title: "Aquarman",
          poster:
            "https://i.imgur.com/YaGLpcQ.png",
          text: "",
          all_time: [
            { time: "11:10", theater: "7",date:"27 FEB 2019" },
            { time: "14:30", theater: "3",date:"27 FEB 2019" },
            { time: "19:20", theater: "2",date:"27 FEB 2019" }
          ]
        },
        {
          title: "Intersteller",
          poster:
            "https://www.joblo.com/assets/images/oldsite/posters/images/full/interstellar-banner.jpg",
          text: "",
          all_time: [
            { time: "12:00", theater: "4",date:"27 FEB 2019" },
            { time: "13:50", theater: "6",date:"27 FEB 2019" },
            { time: "16:20", theater: "1",date:"27 FEB 2019" }
          ]
        },
        
      ]
    };
  },
  methods: {
    on: function() {
      (this.ac_display = "block"), console.log("on");
    },
    off: function() {
      console.log("off");
    },
    goSelect: function(value,title) {
      console.log(value,title);
      this.$router.push({ name: "Select", params: { value,title } });
    }
  }
};
</script>

<style scoped>
@media (min-width: 1000px) {
  .container {
    max-width: 1060px;
    border-radius: 36px;
  }
}
h2 {
  text-align: center;
}
.body_ton {
  background-color: rgb(41, 41, 41);
  margin: 0px;
}

.w3-left,
.w3-right,
.w3-badge {
  cursor: pointer;
}

.w3-badge {
  height: 13px;
  width: 13px;
  padding: 0;
}

.mySlides {
  margin: 0px;
  width: 100%;
  height: 400px;
  display: none;
}

.w3-section,
.w3-code {
  margin-top: 0px;
  margin-bottom: 0px;
}

.container {
  padding: 3em 7em 3em 7em;
  background-color: rgb(243, 243, 243);
  border-radius: 20px;
}

.img-container {
  position: relative;
  margin-bottom: 0px;
}

.movie-list {
  display: block;
  width: 100%;
  height: 26em;
  border: 6px solid rgb(44, 44, 44);
  border-bottom: 0px;
  border-radius: 20px 20px 0px 0px;
  margin-bottom: 0px;
}
.img-container:checked {
  border: 6px solid rgb(243, 6, 6);
}

.detail-container {
  height: 4em;
  margin-top: 0px;
  margin-bottom: 10px;
  background-color: rgb(32, 29, 29);
  border: 5px solid black;
  border-radius: 0px 0px 20px 20px;
  border-top: 0;
}

/* hr {
            margin-top: -2.11em;
            margin-left: 15%;
            width: 83%;
            border: 2px solid rgba(78, 78, 206, 0.493);
            border-radius: 5px;
        } */

/* pointer shape */
.head-title {
  display: -webkit-inline;
  margin-left: 4em;
}

.head-title-text {
  color: white;
  text-shadow: 0 0 30px rgb(3, 3, 14);
}

#pointer {
  width: 200px;
  height: 40px;
  position: relative;
  background: rgba(78, 78, 206, 0.493);
}

#pointer:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid rgb(3, 3, 14);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}

#pointer:before {
  content: "";
  position: absolute;
  right: -20px;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid rgba(78, 78, 206, 0.493);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}

/* -------------------BTN---------------------- */
.btn {
  margin: 0.8em 10px 0.8em 5px;
}

.btn-buy-ticket {
  position: absolute;
  margin-left: 614px;
  border-radius: 10px;
}

.btn-outline-light {
  border-radius: 10px;
  border: 1.7px solid white;
  padding-left: 20px;
  padding-right: 20px;
}

/* ----------------Overlay--------------------- */
#overlay {
  position: absolute;
  /* Sit on top of the page content */
  display: /*block;*/ none;
  /* Hidden by default */
  border-radius: 15px 15px 0px 0px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  /* Black background with opacity */
  z-index: 3;
  /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer;
  /* Add a pointer on hover */
}

#text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  color: white;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>