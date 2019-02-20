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
          <div action method="post">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <a class="text-danger">{{err1}}</a>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="Email"
                aria-describedby="emailHelp"
                placeholder="enter email"
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <a class="text-danger">{{err2}}</a>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="Password"
                placeholder="Password"
              >
            </div>
            <button
              type="submit"
              @click="checkForm"
              class="btn bg-info text-white"
            >Submit</button>
            <a class="text-info text-to-signin" @click="goSignin">
              <small>
                <u>If you don't have any account. Create it.</u>
              </small>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      err1: "",
      err2: ""
    };
  },
  methods: {
    checkForm: function() {
      if (this.email.length === 0 || this.password.length === 0) {
        if (this.email.length === 0) {
          this.err1 = "Please input Email address";
        }
        if (this.password.length === 0) {
          this.err2 = "Please input Password";
        }
        return;
      }

      this.goHome();
    },
    goHome: function(){
      this.$router.push("/home");
    },
    goSignin: function() {
      this.$router.push("/signin");
    }
  }
};
</script>

<style scoped>
.card_custom {
  width: 30rem;
  margin: auto;
  top: 11rem;
}
.container {
  padding: 0;
  height: -webkit-fill-available;
}
.navbar {
  width: -webkit-fill-available;
  position: absolute;
}
.text-to-signin {
  margin-left: 140px;
  cursor: pointer;
}
body {
  font-family: "Hind Madurai", sans-serif;
  background-color: rgb(3, 3, 14);
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
.container_ton {
  width: 100em;
  margin-left: 12em;
  margin-right: 5em;
  margin-bottom: 0.5em;
  padding: 3em 7em 3em 7em;
  background-color: rgb(182, 182, 182);
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
  border: 5px solid black;
  border-bottom: 0px;
  border-radius: 15px 15px 0px 0px;
  margin-bottom: 0px;
}
.detail-container {
  height: 4em;
  margin-top: 0px;
  margin-bottom: 10px;
  background-color: rgb(32, 29, 29);
  border: 5px solid black;
  border-radius: 0px 0px 15px 15px;
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
  margin: 0.8em 0em 0.8em 1em;
}
.btn-buy-ticket {
  position: relative;
  z-index: 2;
  margin-left: 23.5em;
}
/* ----------------Overlay--------------------- */
#overlay {
  position: absolute;
  /* Sit on top of the page content */
  display: none;
  /* Hidden by default */
  border-radius: 15px 15px 0px 0px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60;
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