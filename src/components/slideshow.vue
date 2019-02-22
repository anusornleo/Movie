<template>
  <div id="slide">
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
    >
      <SliderItem
        v-for="(i, index) in list"
        :key="index"
        @click="changeIndex(1);"
        :style="i"
      >
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "Slide",
  components: {
    Slider,
    SliderItem
  },
  data() {
    return {
      list: [],
      sliderValue: 2
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  },
  mounted() {
    setTimeout(
      () =>
        (this.list = [
          {
            backgroundImage: 'url(https://preposterousprose.files.wordpress.com/2018/03/avengers-infinity-war-landscape.jpg?w=1184&#038;h=416&#038;crop=1)',
            width: "100%",
            height: "100%"
          },
          {
            backgroundImage: 'url(https://i.imgur.com/YaGLpcQ.png)',
            width: "100%",
            height: "100%"
          },
          {
            backgroundImage: 'url(https://lh3.googleusercontent.com/8Nb17-RgjEf0rkZn36nDoUGaSuTBc59oSFfp2gP_gxmxpCrylzOWm2IZs8fyu8o-vALEQV8T_ixH_NuvRsD8tuitQMIX6c1Fqo7hllHaoQKDDccPE5ai4_ooZRyxaB083Z_VqAf2Cd3yDYxzrKC2Z-nCCSIjcMNFm4jdVkqESYi6c1siX2pxzApQ9TdHouZAj6ssUNiNBGPZpFFBBz8TFNxg9YPCEvj_O3YflzJj6OOTZyeXLGLN1lGnxn97H1l0cm1rijF41KwD_ramcJKV9yX80jsbzPbEj-EWe8dntDTYtJOlvmsz6nAM1_JSOBQmpa7QNPJ7AXAr86CEF_XEfPpLHeTnSW7BiW9Q_TLzFr-ylcpUjSLuZ7ux8-3KxkYOohdUbrQf200i3M0CaCf0SmWzAALCRnpAxaOJohLkX-cqBMFndUbfxItslqlM3edlV0Jj5I6HzhMI_PMV1PpBKlcELj5kq_ZVGXzkoL6TT1fqJ7bAjKvLCCcNu5EzDV0HKLSA8E3qfYwaNiynljV0dt2RozVD8dPXcN5CdsGm8fSKqz97Vrf8yJecduOfZhqL2KTgCZwvT0iuhdEqt-eQGFmsf3wsM-5Aq2V0N0chcIIjOfDdrI3ltfIXq0e_AESkRwGoVNdg1El-cA2_8lf9N7iIlpVQfls=w1920-h600-no)',
            width: "100%",
            height: "100%"
          },
          {
            backgroundImage: 'url(https://www.joblo.com/assets/images/oldsite/posters/images/full/interstellar-banner.jpg)',
            width: "100%",
            height: "100%"
          }
        ]),
      0
    );
  }
};
</script>

<style>


p {
  margin: 0;
}
</style>