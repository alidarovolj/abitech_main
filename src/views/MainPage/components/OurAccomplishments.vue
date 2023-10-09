<template>
  <div class="h-full lg:h-screen py-24 flex items-center justify-center relative w-full">
    <img alt="" class="absolute w-full h-full top-0 left-0 -z-10" src="@/assets/img/bg.png">
    <div class="container mx-auto px-4 lg:px-0">
      <div>
        <router-link :to="{name: 'AccompPage', params:{id: item.id}}" v-for="(item, index) of getAccomplishments" :key="index" :class="{'mb-2': getAccomplishments.length !== index + 1}"
             class="flex" @mouseleave="activeBlock = null"
             @mouseover="activeBlock = index">
          <div :class="[{'flex-row-reverse': index === 1}, {'!opacity-100': activeBlock === index}]"
               class="block lg:flex items-center text-white pl-6 lg:pl-12 p-4 lg:p-8 relative bg-mainColor opacity-90 transition-all">
            <img :src="item.img_bg" alt="" class="absolute w-full h-full top-0 left-0 -z-10">
            <img :class="{'ml-7 !mr-0': index === 1}" :src="item.img" alt="" class="mr-7">
            <div>
              <h3 class="text-xl lg:text-2xl font-bold mb-5">{{ item.title }}</h3>
              <p class="text-sm lg:text-base">{{ item.short_desc }}</p>
            </div>
          </div>
          <div class="bg-secondaryColor p-4 lg:p-7 flex items-center w-14 text-center justify-center" :class="{ 'w-16' : activeBlock === index }">
            <img class="w-4 min-w-[16px]" alt="" src="@/assets/img/ourAccomplishments/chevronRight.svg">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "OurAccomplishments",
  components: {},
  computed: {
    ...mapGetters(['getAccomplishments'])
  },
  data() {
    return {
      activeBlock: null,
    };
  },
};
</script>