<template>
  <div id="payment">
    <div class="container-fluid full-height bg-light">
      <nav class="row nav-bar" ref="nav">
        <div class="col-md-3" style="background-color:  #304352;">
          <h1>Step1</h1>
        </div>
        <div class="col-md-1 triangle" style="background-color: #d7d2cc;"></div>
        <div class="col-md-3" style="background-color: #d7d2cc;">
          <h1>Step2</h1>
        </div>
        <div class="col-md-1 triangle" style="background-color:  #304352;"></div>
        <div class="col-md-3" style="background-color:  #304352;">
          <h1>Step3</h1>
        </div>
        <div class="col-md-1" style="background-color:  #304352;"></div>
      </nav>

      <div class="container" ref="main" v-bind:style="{position: type, top: navSize + 'px' }">
        <div class="row">
          <div class="col-md-12">
            <h1>Payment Type</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Cash
                  <img src="../components/img/notes.png" alt="debit card" width="10%">
                </h5>
                <p class="card-text">Pay with cash on the counter of the cinema.</p>
                <a href="confirm.html" class="btn btn-primary">Go To Next Step</a>
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-3">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Crdit/Debit
                  <img src="../components/img/debit.png" alt="debit card" width="10%">
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
            <form v-if="showState" class="b">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="cardnumber">CardNumber</label>
                  <input
                    type="cardnumber"
                    class="form-control"
                    id="cardnumber"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                  >
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
              <button type="submit" class="btn btn-primary">Confirm</button>
              <button type="submit" class="btn btn-primary">Cancle</button>
            </form>
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
</style>

<script>
export default {
      name: "#payment",
      data() {
        return {
          navSize: 80,
          type: 'relative',
          showState: false
        }
      },
      created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
      },
      destroyed() {
        window.removeEventListener('resize', this.handleResize);
      },
      methods: {
        handleResize() {
          this.navSize = (this.$refs.nav.clientHeight) + 20;
        },
        showCard() {
          if (this.showState == true) {
            this.showState = false;
          } else if (this.showState == false) {
            this.showState = true;
          }
        }
      },
      computed: {},
      watch: {}
}
</script>
