<!-- src/components/Home.vue -->
<template>
  <div class="bg bg-dark">
    <nav class="navbar navbar-light bg-info">
      <a class="navbar-brand text-white" href="#">Navbar</a>
    </nav>
    <div class="container">
      <div class="card card_custom2">
        <div class="card-body">
          <form>
            <div class="form-row form-group">
              <div class="col">
                  <label for="exampleInputEmail1">Firstname</label>
                <input type="text" class="form-control" placeholder="First name">
              </div>
              <div class="col">
                  <label for="exampleInputEmail1">Lastname</label>
                <input type="text" class="form-control" placeholder="Last name">
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              >
            </div>
            <button type="submit" class="btn btn-center bg-info text-white">Create Account</button>
            <a class="text-info" style="cursor: pointer;" @click="goLogin"><small><u>or Login</u></small></a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  methods: {
    goLogin: function() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
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
.btn-center{
    margin-left: 164px;
    margin-right: 100px;
}
</style>