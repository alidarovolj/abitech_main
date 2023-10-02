<template>
  <div
      class="h-screen bg-mainColor relative flex items-center justify-center w-full background-element"
  >
    <img
        class="absolute w-full h-full top-0 left-0 z-10"
        src="@/assets/img/bg_gold.png"
        alt=""
    />
    <div class="flex relative">
      <div class="absolute left-0 top-0 p-3 bg-white rounded-2xl w-72 z-30">
        <p class="rounded-t-2xl bg-mainColor py-3 font-bold text-base text-center text-white">Locations</p>
        <div :class="{ 'expanded' : isExpanded }" class="text-mainColor mt-3 px-3 text-base overflow-y-hidden first_state">
          <p class="border-y border-mainColor py-1 font-bold">
            Kazakhstan
          </p>
          <div class="pt-2 pb-5 border-b border-mainColor">
            <div class="flex items-center mb-1">
              <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
              <p>Almaty</p>
            </div>
            <div class="flex items-center">
              <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
              <p>Astana</p>
            </div>
          </div>
          <p class="border-b border-mainColor py-1 font-bold">
            Uzbekistan
          </p>
          <div class="pt-2 pb-5 border-b border-mainColor">
            <div class="flex items-center mb-1">
              <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
              <p>Tashkent</p>
            </div>
          </div>
          <p class="border-b border-mainColor py-1 font-bold">
            Russia
          </p>
          <div class="pt-2">
            <div class="flex items-center mb-1">
              <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
              <p>Moskow</p>
            </div>
            <div class="flex items-center mb-1">
              <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
              <p>Saint - Petersburg</p>
            </div>
          </div>
        </div>
      </div>
      <img class="" src="@/assets/img/locations/map.png" alt="">
      <img
          :class="{ 'opacity-100' : first === true }"
          class="w-8 h-8 absolute top-[36%] right-[36%] transition-all opacity-0" src="@/assets/img/locations/point.png" alt="">
      <img
          :class="{ 'opacity-100' : second === true }" class="w-8 h-8 absolute top-[34%] right-[20%] transition-all opacity-0"
          src="@/assets/img/locations/point.png" alt="">
      <img
          :class="{ 'opacity-100' : third === true }" class="w-8 h-8 absolute top-[38%] right-[25%] transition-all opacity-0"
          src="@/assets/img/locations/point.png" alt="">
      <img
          :class="{ 'opacity-100' : fourth === true }" class="w-8 h-8 absolute top-[39%] right-[30%] transition-all opacity-0"
          src="@/assets/img/locations/point.png" alt="">
      <img
          :class="{ 'opacity-100' : fifth === true }" class="w-8 h-8 absolute top-[46%] right-[28%] transition-all opacity-0"
          src="@/assets/img/locations/point.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: "HeroBlock",
  components: {},
  data() {
    return {
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      isExpanded: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isExpanded = true;
    }, "2000");
    setTimeout(() => {
      this.first = true;
    }, "1000");
    setTimeout(() => {
      this.second = true;
    }, "1500");
    setTimeout(() => {
      this.third = true;
    }, "2000");
    setTimeout(() => {
      this.fourth = true;
    }, "2500");
    setTimeout(() => {
      this.fifth = true;
    }, "3000");
  },
};
</script>

<style scoped>
  .first_state {
    height: 0;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
    max-height: 0;
  }
  .expanded {
    height: 300px;
    max-height: 300px;
    transition: max-height 0.25s ease-in;
  }
</style>