<!-- src/components/Home.vue -->
<template>
  <div class="bg bg-dark">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Get A Cinema</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" @click="goHome">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="card card_custom2">
        <div class="card-body">
          <div>
            <div class="form-row form-group">
              <div class="col">
                <label for="exampleInputEmail1">Firstname</label>
                <a class="text-danger">{{err1}}</a>
                <input v-model="fname" type="text" class="form-control" placeholder="First name">
              </div>
              <div class="col">
                <label for="exampleInputEmail1">Lastname</label>
                <a class="text-danger">{{err2}}</a>
                <input v-model="lname" type="text" class="form-control" placeholder="Last name">
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <a class="text-danger">{{err3}}</a>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <a class="text-danger">{{err4}}</a>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <a class="text-danger">{{err5}}</a>
              <a class="text-danger">{{err6}}</a>
              <input
                v-model="password_again"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              >
            </div>
            <button
              type="submit"
              @click="checkForm"
              class="btn btn-center bg-info text-white"
            >Create Account</button>
            <a class="text-info" style="cursor: pointer;" @click="goLogin()">
              <small>
                <u>or Login</u>
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
  name: "SignIn",
  props: ["user_list"],
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      password: "",
      password_again: "",
      err1: "",
      err2: "",
      err3: "",
      err4: "",
      err5: "",
      err6: "",
      // user_list: [
      //   {
      //     email: "admin@admin.com",
      //     password: "admin",
      //     fname: "admin",
      //     lname: "admin"
      //   },
      //   {
      //     email: "a",
      //     password: "a",
      //     fname: "a",
      //     lname: "a"
      //   },
      //   {
      //     email: "b",
      //     password: "b",
      //     fname: "b",
      //     lname: "b"
      //   }
      // ],
    };
  },
  methods: {
    checkForm: function() {  
      if (
        this.fname.length === 0 ||
        this.lname.length === 0 ||
        this.email.length === 0 ||
        this.password.length === 0 ||
        this.password_again.length === 0 ||
        this.password.length != this.password_again.length
      ) {
        if (this.fname.length === 0) {
          this.err1 = "Firstname";
        }
        if (this.lname.length === 0) {
          this.err2 = "Lastname";
        }
        if (this.email.length === 0) {
          this.err3 = "Please Input Email address";
        }
        if (this.password.length === 0) {
          this.err4 = "Please Input Password";
        }
        if (this.password_again.length === 0) {
          this.err5 = " Please Input Password Again";
        }
        if (this.password != this.password_again) {
          this.err5 = "Password not match";
        }
        return;
      }
      this.check_user();
    },
    check_user:function(){
      const result = this.user_list.filter((user_list) => {
        return user_list.email === this.email
      })
      if (result.length > 0){
        this.err1 = "";
        this.err2 = "";
        this.err3 = "This email has already";
        this.err4 = "";
        this.err5 = "";
      }
      else if (result.length === 0){
        this.backLogin(this.fname,this.lname,this.email,this.password,'again');
      }
    },
    goLogin: function() {
      this.$router.push("Login");
    },
    goHome: function(){
      // this.$router.push("/");
    },
    // add_user: function() {
    //   this.user_list.push({
    //     email: this.email,
    //     password: this.password,
    //     fname: this.fname,
    //     lname: this.lname
    //   }); // what to push unto the rows array?
    //   this.backLogin(this.user_list,'again');
    // },
    backLogin:function(fname_add,lname_add,email_add,password_add,again){
      // user_list = this.user_list;
      this.$router.push({ name: "Login", params: { fname_add,lname_add,email_add,password_add,again } });
    }
  }
};
</script>

<style scoped>
.card_custom2 {
  width: 30rem;
  margin: auto;
  top: 7rem;
}
.container {
  padding: 0;
  height: -webkit-fill-available;
}
.navbar {
  width: -webkit-fill-available;
  position: absolute;
}
.btn-center {
  margin-left: 145px;
  margin-right: 80px;
}
</style>