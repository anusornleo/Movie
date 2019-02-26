<template>
  <div>
    <div
      class="card card_select"
      style="display: flex; width:400px;margin-bottom:0px"
      v-for="(seat_s) in seat_select"
      :key="seat_s.id"
    >
      <div style="display: flex;" class="card-body" >
        <img class="img-box" src="https://lh3.googleusercontent.com/ZzSEPibzr5HtSNMzK_aosQsfBFjHF_ZR6EivxxehGQqUKvQ9UNwtTWca6JW-ZVvufYjwzszwxhXU1S234T5D7In7BsvVBYjO5yEGs310sv31xE_70dW7ksl28BnNlMit86HZ7ctxUsuivGBM7AzQVd_zIRbi08Y4g3ufvUVjIlI0l_N9VdhbE1lG31NTDsKfhw135Tv-iQEbCEQT3c5RzuWTu-FCUioEdAzm8VhRnooIQKkfSLB991H1DMmXlW8H_JLGOKRwF5zpjgDLzKs1oNQrti8HuVeQQbR_8Vxi-b13uMUeBlwTRlN07eQOZtHhyZJFWCYn-6Fb9CwevL-b0q58gVuS3c9UFx_-XDdPkVIpHp0mb8IuRc27g3D67Qo-FpeYg4hQ5MM3lX9_FzNejtg9IrsO2pjiAubSkEuyxHvhpSdYWTy1cmPOn3dNTgtPJ-8fLWLL5jYgRXqr0cXb8qYl0CrkyCvMS9nH4PvxPa4oTbCwjx-a0wZkNJdZPlDu1dywgQRlLJqZWBJJss8Xv3633WNIs9FDRU2-rN_SorEjOSpzKe6fWSWMI_tnq3BG7_JzUHv7yC0jMraWdu5PBCCzKb_mDlj4XwScstOmLHAkW3L-GbleUtwU7aaLxoXkIFZ1e_ubNZvEsGFL_oj9hJohhaP04Rc=s300-no">
        <h6 style="margin-left:20px;margin-top:24px">Movie : {{title}}<br>Seat :  {{seat_s.num}} Theater : {{value.theater}}<br>Date : {{value.date}} <br>Time : {{value.time}}<br>Price : {{seat_s.cos}} ฿</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Print",
  props: [
    "seat_select",
    "title",
    "num",
    "value",
    "sum_cost",
    "card_num",
    "mail"
  ],
  data() {
    return {};
  }
};
</script>

<style scoped>
.card_select {
  width: 200px;
}
.img-box {
  width: 150px;
  height: 150px;
}
.card-body{
    padding: 0;
}
.card{
    border-radius: 0rem;
    border: 1px solid rgba(0, 0, 0,);
}
</style>



