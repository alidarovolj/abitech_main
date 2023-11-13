<template>
  <div id="locations"
       class="h-full location lg:h-screen bg-mainColor relative flex items-center justify-center w-full background-element py-10 lg:py-0"
  >
    <img
        class="absolute w-full h-full top-0 left-0 z-10"
        src="@/assets/img/bg_gold.png"
        alt=""
    />
    <div class="block lg:flex relative">
      <div class="relative mx-auto lg:mx-0 lg:absolute left-0 top-0 p-3 bg-white rounded-2xl w-72 z-30 mb-10 lg:mb-0">
        <p class="rounded-t-2xl bg-mainColor py-3 font-bold text-base text-center text-white">{{
            $t('locations.title')
          }}</p>
        <div :class="{ 'expanded' : isExpanded }"
             class="text-mainColor mt-3 px-3 text-base overflow-y-hidden first_state">
          <p class="border-y border-mainColor py-1 font-bold">
            {{ $t('locations.kazakhstan.title') }}
          </p>
          <div class="pt-2 pb-5 border-b border-mainColor">
            <div class="flex items-center mb-1">
              <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
              <router-link
                  :to="{ name: 'LocationsPage', params: { id: 1 } }"
                  class="cursor-pointer"
                  :class="{ 'font-semibold' : activeLocation === 0 }"
                  @mouseover="activeLocation = 0"
                  @mouseleave="activeLocation = null">
                {{ $t('locations.kazakhstan.almaty') }}
              </router-link>
            </div>
            <div class="flex items-center">
              <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
              <router-link
                  :to="{ name: 'LocationsPage', params: { id: 2 } }"
                  class="cursor-pointer"
                  :class="{ 'font-semibold' : activeLocation === 1 }"
                  @mouseover="activeLocation = 1"
                  @mouseleave="activeLocation = null">
                {{ $t('locations.kazakhstan.astana') }}
              </router-link>
            </div>
          </div>
          <p class="border-b border-mainColor py-1 font-bold">
            {{ $t('locations.uzbekistan.title') }}
          </p>
          <div class="pt-2 pb-5 border-b border-mainColor">
            <div class="flex items-center mb-1">
              <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
              <router-link
                  :to="{ name: 'LocationsPage', params: { id: 3 } }"
                  class="cursor-pointer"
                  :class="{ 'font-semibold' : activeLocation === 2 }"
                  @mouseover="activeLocation = 2"
                  @mouseleave="activeLocation = null">
                {{ $t('locations.uzbekistan.tashkent') }}
              </router-link>
            </div>
          </div>
          <p class="border-b border-mainColor py-1 font-bold">
            {{ $t('locations.russia.title') }}
          </p>
          <div class="pt-2 pb-5 border-b border-mainColor">
            <div class="flex items-center mb-1">
              <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
              <router-link
                  :to="{ name: 'LocationsPage', params: { id: 4 } }"
                  class="cursor-pointer"
                  :class="{ 'font-semibold' : activeLocation === 3 }"
                  @mouseover="activeLocation = 3"
                  @mouseleave="activeLocation = null">
                {{ $t('locations.russia.saint_petersburg') }}
              </router-link>
            </div>
          </div>
          <p class="border-b border-mainColor py-1 font-bold">
            {{ $t('locations.uae.title') }}
          </p>
          <div class="pt-2">
            <div class="flex items-center mb-1">
              <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
              <router-link
                  :to="{ name: 'LocationsPage', params: { id: 5 } }"
                  class="cursor-pointer"
                  :class="{ 'font-semibold' : activeLocation === 4 }"
                  @mouseover="activeLocation = 4"
                  @mouseleave="activeLocation = null">
                {{ $t('locations.uae.abu_dhabi') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <img class="" src="@/assets/img/locations/map.png" alt="">
      <img src="" alt="">
      <router-link
          :to="{ name: 'LocationsPage', params: { id: 1 } }">
        <img
            @mouseover="activeLocation = 0"
            @mouseleave="activeLocation = null"
            :class="[{ 'opacity-100' : first === true && getLocations[0] }, { 'w-9 h-9' : activeLocation === 0 }]"
            class="w-8 h-8 absolute top-[32%] right-[17%] lg:top-[32%] lg:right-[17%] transition-all opacity-0 z-30"
            src="@/assets/img/locations/point.png" alt="">
      </router-link>
      <router-link
          :to="{ name: 'LocationsPage', params: { id: 2 } }">
        <img
            @mouseover="activeLocation = 1"
            @mouseleave="activeLocation = null"
            :class="[{ 'opacity-100' : second === true && getLocations[1] }, { 'w-9 h-9' : activeLocation === 1 }]"
            class="w-8 h-8 absolute top-[65%] right-[20%] lg:top-[25%] lg:right-[20%] transition-all opacity-0 z-30"
            src="@/assets/img/locations/point.png" alt="">
      </router-link>
      <router-link
          :to="{ name: 'LocationsPage', params: { id: 3 } }">
        <img
            @mouseover="activeLocation = 2"
            @mouseleave="activeLocation = null"
            :class="[{ 'opacity-100' : third === true && getLocations[2] }, { 'w-9 h-9' : activeLocation === 2 }]"
            class="w-8 h-8 absolute top-[77%] right-[20%] lg:top-[37%] lg:right-[20%] transition-all opacity-0 z-30"
            src="@/assets/img/locations/point.png" alt="">
      </router-link>
      <router-link
          :to="{ name: 'LocationsPage', params: { id: 4 } }">
        <img
            @mouseover="activeLocation = 3"
            @mouseleave="activeLocation = null"
            :class="[{ 'opacity-100' : fourth === true && getLocations[3] }, { 'w-9 h-9' : activeLocation === 3 }]"
            class="w-8 h-8 absolute top-[68%] right-[35%] lg:top-[28%] lg:right-[35%] transition-all opacity-0 z-30"
            src="@/assets/img/locations/point.png" alt="">
      </router-link>
      <router-link
          :to="{ name: 'LocationsPage', params: { id: 5 } }">
        <img
            @mouseover="activeLocation = 4"
            @mouseleave="activeLocation = null"
            :class="[{ 'opacity-100' : fourth === true && getLocations[4] }, { 'w-9 h-9' : activeLocation === 4 }]"
            class="w-8 h-8 absolute top-[81%] right-[31%] lg:top-[51%] lg:right-[31%] transition-all opacity-0 z-30"
            src="@/assets/img/locations/point.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "HeroBlock",
  components: {},
  data() {
    return {
      activeLocation: null,
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      isExpanded: false,
    };
  },
  computed: {
    ...mapGetters(['getLocations'])
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
  height: 380px;
  max-height: 380px;
  transition: max-height 0.25s ease-in;
}
</style>