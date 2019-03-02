
<template>
  <div class="bg bg-dark">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Get A Cinema</a>
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
          <div>
            <h3>Please Login {{again}}</h3>
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
            <button type="submit" @click="checkForm" class="btn bg-info text-white">Submit</button>
            <a class="text-info text-to-signin" @click="goSignin(user_list)">
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
  props: ["fname_add", "lname_add", "email_add", "password_add","again"],
  data() {
    return {
      email: "",
      password: "",
      err1: "",
      err2: "",
      first: 0,
      user_list: [
        {
          email: "admin@admin.com",
          password: "admin",
          fname: "admin",
          lname: "admin"
        },
        {
          email: "a",
          password: "a",
          fname: "a",
          lname: "a"
        },
        {
          email: "b",
          password: "b",
          fname: "b",
          lname: "b"
        }
      ]
    };
  },
  // computed: {
  //   add_user: function() {
  //     console.log('add_user');
  //     this.user_list.push({
  //       email: this.email_add,
  //       password: this.password_add,
  //       fname: this.fname_add,
  //       lname: this.lname_add
  //     });
  //   }
  // },
  methods: {
    add_user: function() {
      if (this.first === 0) {
        this.user_list.push({
          email: this.email_add,
          password: this.password_add,
          fname: this.fname_add,
          lname: this.lname_add
        });
        this.first++;
      }
    },
    checkForm: function() {
      this.add_user();
      if (this.email.length === 0 || this.password.length === 0) {
        if (this.email.length === 0) {
          this.err1 = "Please input Email address";
        } else {
          this.err1 = "";
        }
        if (this.password.length === 0) {
          this.err2 = "Please input Password";
        } else {
          this.err2 = "";
        }
        return;
      }
      this.check_user();
      // this.goHome();
    },
    check_user: function() {
      // console.log(this.user_list);

      for (var num = 0; num < this.user_list.length; num++) {
        if (this.email === this.user_list[num].email) {
          if (this.password === this.user_list[num].password) {
            
            this.goHome();
          } else {
            this.err1 = "";
            this.err2 = "Password Incolect";
            console.log(this.password);
            console.log(this.user_list[num].pass);
            
          }
          break;
        } else {
          this.err1 = "Not found user";
          this.err2 = "";
          
          
        }
      }
    },
    goHome: function(mail) {
      mail = this.email.split("@")[0];
      this.$router.push({ name: "Home", params: { mail } });
    },
    goSignin: function(user_list) {
      this.$router.push({ name: "Signin", params: { user_list } });
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
h3 {
  text-align: -webkit-center;
}
.btn {
  margin-right: 115px;
}
.text-to-signin {
  cursor: pointer;
}
</style>