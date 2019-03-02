


<template>
  <div class="body_ton">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Get A Cinema</a>
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
            <a class="nav-link" @click="goLogin">
              Login as {{mail}}
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            v-model="searchFilter"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search Movie"
            aria-label="Search"
          >
          <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
        </form>
      </div>
    </nav>
    <slideshow></slideshow>
    <br>
    <br>
    <br>
    <div class="container" style="padding: 25px;">
      <h2>Welcome {{ mail }} What do you want to watch</h2>
      <br>
      <div v-for="movie in filteredBlogs" :key="movie.id" class="img-container">
        <img class="movie-list" v-bind:src="movie.poster" alt="Click to see review">
        <div class="detail-container">
          <div
            v-for="times in movie.all_time"
            :key="times.id"
            type="radio"
            class="btn btn-outline-light"
            v-on:click="goSelect(times,movie.title,mail,movie.poster_poetait)"
          >{{times.time}}</div>
          <!-- <button type="button" class="btn btn-buy-ticket btn-light">Buy Ticket</button> -->
        </div>

        <!-- <div id="clock">
          <p class="date">{{ date }}</p>
          <p class="time">{{ time }}</p>
          <p class="text">DIGITAL CLOCK with Vue.js</p>
        </div>-->
        <div class="overlay">
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
// import popup from '@/components/popup';
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
      searchFilter: "",
      mail:'',
      movie_list: [
        {
          title: "star war 8",
          subTitle: "Star War 8",
          poster:
            "https://lh3.googleusercontent.com/8Nb17-RgjEf0rkZn36nDoUGaSuTBc59oSFfp2gP_gxmxpCrylzOWm2IZs8fyu8o-vALEQV8T_ixH_NuvRsD8tuitQMIX6c1Fqo7hllHaoQKDDccPE5ai4_ooZRyxaB083Z_VqAf2Cd3yDYxzrKC2Z-nCCSIjcMNFm4jdVkqESYi6c1siX2pxzApQ9TdHouZAj6ssUNiNBGPZpFFBBz8TFNxg9YPCEvj_O3YflzJj6OOTZyeXLGLN1lGnxn97H1l0cm1rijF41KwD_ramcJKV9yX80jsbzPbEj-EWe8dntDTYtJOlvmsz6nAM1_JSOBQmpa7QNPJ7AXAr86CEF_XEfPpLHeTnSW7BiW9Q_TLzFr-ylcpUjSLuZ7ux8-3KxkYOohdUbrQf200i3M0CaCf0SmWzAALCRnpAxaOJohLkX-cqBMFndUbfxItslqlM3edlV0Jj5I6HzhMI_PMV1PpBKlcELj5kq_ZVGXzkoL6TT1fqJ7bAjKvLCCcNu5EzDV0HKLSA8E3qfYwaNiynljV0dt2RozVD8dPXcN5CdsGm8fSKqz97Vrf8yJecduOfZhqL2KTgCZwvT0iuhdEqt-eQGFmsf3wsM-5Aq2V0N0chcIIjOfDdrI3ltfIXq0e_AESkRwGoVNdg1El-cA2_8lf9N7iIlpVQfls=w1920-h600-no",
          text: "",
          poster_poetait:
            "https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/10/the-last-jedi-theatrical-blog.jpg",
          all_time: [
            { time: "10:10", theater: "1", date: "27 FEB 2019" },
            { time: "11:30", theater: "3", date: "27 FEB 2019" },
            { time: "12:00", theater: "2", date: "27 FEB 2019" },
            { time: "13:25", theater: "5", date: "27 FEB 2019" },
            { time: "17:30", theater: "1", date: "27 FEB 2019" },
            { time: "20:20", theater: "4", date: "27 FEB 2019" }
          ]
        },
        {
          title: "avenger infinity war",
          subTitle: "Avenger Infinity War",
          poster:
            "https://preposterousprose.files.wordpress.com/2018/03/avengers-infinity-war-landscape.jpg?w=1184&#038;h=416&#038;crop=1",
          text: "",
          poster_poetait:
            "https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SL1500_.jpg",
          all_time: [
            { time: "10:10", theater: "1", date: "27 FEB 2019" },
            { time: "11:30", theater: "3", date: "27 FEB 2019" },
            { time: "12:00", theater: "2", date: "27 FEB 2019" },
            { time: "13:25", theater: "5", date: "27 FEB 2019" },
            { time: "17:30", theater: "1", date: "27 FEB 2019" },
            { time: "20:20", theater: "4", date: "27 FEB 2019" }
          ]
        },
        {
          title: "aquarman",
          subTitle: "Aquarman",
          poster: "https://i.imgur.com/YaGLpcQ.png",
          text: "",
          poster_poetait:
            "https://media1.popsugar-assets.com/files/thumbor/G8WL9ct5Wo7q7Zaug8dd99GptbY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/07/16/938/n/1922283/d757511d5b4d0eb588dbe8.16610880_/i/Aquaman-Movie-Poster-Memes-July-2018.jpg",
          all_time: [
            { time: "10:10", theater: "1", date: "27 FEB 2019" },
            { time: "11:30", theater: "3", date: "27 FEB 2019" },
            { time: "12:00", theater: "2", date: "27 FEB 2019" },
            { time: "13:25", theater: "5", date: "27 FEB 2019" },
            { time: "17:30", theater: "1", date: "27 FEB 2019" },
            { time: "20:20", theater: "4", date: "27 FEB 2019" }
          ]
        },
        {
          title: "intersteller",
          subTitle: "Intersteller",
          poster:
            "https://www.joblo.com/assets/images/oldsite/posters/images/full/interstellar-banner.jpg",
          text: "",
          poster_poetait:
            "https://images-na.ssl-images-amazon.com/images/I/716P1xCmnPL._SL1020_.jpg",
          all_time: [
            { time: "10:10", theater: "1", date: "27 FEB 2019" },
            { time: "11:30", theater: "3", date: "27 FEB 2019" },
            { time: "12:00", theater: "2", date: "27 FEB 2019" },
            { time: "13:25", theater: "5", date: "27 FEB 2019" },
            { time: "17:30", theater: "1", date: "27 FEB 2019" },
            { time: "20:20", theater: "4", date: "27 FEB 2019" }
          ]
        },
        {
          title: "captain marvel",
          subTitle: "Captain Marvel",
          poster:
            "https://lumiere-a.akamaihd.net/v1/images/movie-page_desktop_hero-banner_ea72abd0.png?region=0,0,2000,835&width=1200&optimize=true",
          text: "",
          poster_poetait:
            "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Captain-Marvel-international-poster-1724182.jpg?r=1549376910515",
          all_time: [
            { time: "10:10", theater: "1", date: "27 FEB 2019" },
            { time: "11:30", theater: "3", date: "27 FEB 2019" },
            { time: "12:00", theater: "2", date: "27 FEB 2019" },
            { time: "13:25", theater: "5", date: "27 FEB 2019" },
            { time: "17:30", theater: "1", date: "27 FEB 2019" },
            { time: "20:20", theater: "4", date: "27 FEB 2019" }
          ]
        },
        {
          title: "rampage",
          subTitle: "Rampage",
          poster:
            "https://www.seanpaune.com/wp-content/uploads/2018/04/Rampage-Movie-Banner-1740xauto.jpg",
          text: "",
          poster_poetait:
            "https://images-na.ssl-images-amazon.com/images/I/61OnqbS86XL.jpg",
          all_time: [
            { time: "10:10", theater: "1", date: "27 FEB 2019" },
            { time: "11:30", theater: "3", date: "27 FEB 2019" },
            { time: "12:00", theater: "2", date: "27 FEB 2019" },
            { time: "13:25", theater: "5", date: "27 FEB 2019" },
            { time: "17:30", theater: "1", date: "27 FEB 2019" },
            { time: "20:20", theater: "4", date: "27 FEB 2019" }
          ]
        },
        {
          title: "friend zone",
          subTitle: "Friend Zone",
          poster: "https://i.imgur.com/8ptcqPF.jpg",
          text: "",
          poster_poetait:
            "https://f.ptcdn.info/916/061/000/pl7cyadm6N6kVq6zp0D-o.jpg",
          all_time: [
            { time: "10:10", theater: "1", date: "27 FEB 2019" },
            { time: "11:30", theater: "3", date: "27 FEB 2019" },
            { time: "12:00", theater: "2", date: "27 FEB 2019" },
            { time: "13:25", theater: "5", date: "27 FEB 2019" },
            { time: "17:30", theater: "1", date: "27 FEB 2019" },
            { time: "20:20", theater: "4", date: "27 FEB 2019" }
          ]
        }
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
    goSelect: function(value, title, mail, poster) {
      this.mail = mail
      const parsed = JSON.stringify(this.mail);
      localStorage.setItem("mail", parsed);
      console.log(value, title);
      this.$router.push({
        name: "Select",
        params: { value, title, mail, poster }
      });
    },
    goLogin: function() {
      this.$router.push("Login");
    }
  },
  computed: {
    filteredBlogs: function() {
      return this.movie_list.filter(movie => {
        return movie.title.match(this.searchFilter.toLowerCase());
      });
    }
  },
  mounted() {
    this.mail = mail
    if (localStorage.getItem("mail")) {
      try {
        this.mail = JSON.parse(localStorage.getItem("mail"));
      } catch (e) {
        localStorage.removeItem("mail");
      }
    }
  }
};

// --------------------------------C L O C K-------------------------------------
// var clock = new Vue({
//   el: "#clock",
//   data: {
//     time: "",
//     date: ""
//   }
// });

// var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// var timerID = setInterval(updateTime, 1000);
// updateTime();
// function updateTime() {
//   var cd = new Date();
//   clock.time =
//     zeroPadding(cd.getHours(), 2) +
//     ":" +
//     zeroPadding(cd.getMinutes(), 2) +
//     ":" +
//     zeroPadding(cd.getSeconds(), 2);
//   clock.date =
//     zeroPadding(cd.getFullYear(), 4) +
//     "-" +
//     zeroPadding(cd.getMonth() + 1, 2) +
//     "-" +
//     zeroPadding(cd.getDate(), 2) +
//     " " +
//     week[cd.getDay()];
// }

// function zeroPadding(num, digit) {
//   var zero = "";
//   for (var i = 0; i < digit; i++) {
//     zero += "0";
//   }
//   return (zero + num).slice(-digit);
// }
// ------------------------------------------------------------------------------
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
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 87%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgb(0, 0, 0);
  border-radius: 20px 20px 0px 0px;
}

.img-container:hover .overlay {
  opacity: 0.8;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
/* --------------------------------------------------- */
#text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  color: white;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

/* --------------------------------Clock--------------------------- */
/* #clock {
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  .time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
  }
  .date {
    letter-spacing: 0.1em;
    font-size: 24px;
  }
  .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }
} */
</style>