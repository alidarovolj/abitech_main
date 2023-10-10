<template>
  <div class="h-full lg:h-screen py-24 flex items-center justify-center relative w-full">
    <div class="bg-mainColor absolute h-1/2 w-full top-0 -z-10">
    </div>
    <img alt="" class="absolute w-full h-full top-0 left-0 z-10" src="@/assets/img/bg.png">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="pt-8 pr-0 lg:pr-8 pb-6 block lg:flex items-center">
        <div v-if="activeBlock === null" class="w-full lg:w-[680px] mr-0 lg:mr-[52px]">
          <h2 class="text-3xl font-semibold text-secondaryColor mb-14">Insights</h2>
        </div>
        <div v-else class="w-full lg:w-[680px] mr-[52px] cursor-pointer">
          <h2 class="text-3xl font-semibold text-secondaryColor mb-14">Insights</h2>
          <router-link :to="{ name: 'InsightsPage', params: { id: getNews[activeBlock].id } }" class="relative z-10">
            <img alt="" class="rounded-t-md rounded-b-none lg:rounded-md" :src="getNews[activeBlock].img">
            <div
                class="relative lg:absolute bg-white max-w-[680px] h-1/2 bottom-0 opacity-70 rounded-t-none lg:rounded-t-md rounded-b-md lg:rounded-b-none py-4 px-6">
              <h3 class="text-2xl font-bold">{{ getNews[activeBlock].title }}</h3>
              <p class="text-base">{{ getNews[activeBlock].short_desc }}</p>
            </div>
          </router-link>
        </div>
        <div class="w-full lg:w-[419px]">
          <router-link :to="{ name: 'InsightsPage', params: { id: block.id } }" v-for="(block, index) of getNews" :key="index"
                       :class="{'!mb-0': getNews.length === index + 1}"
                       class="relative block lg:flex z-30 items-center mb-7 bg-white rounded-lg cursor-pointer"
                       @mouseleave="activeBlock = 0"
                       @mouseover="activeBlock = index">
            <div class="relative h-[168px] w-full lg:w-[243px]">
              <div class="absolute left-0 top-0 w-full h-full"
                   style="background: linear-gradient(270deg, #fff -70%, rgba(26, 58, 46, 0.00) 100%);"></div>
              <img :src="block.img" alt=""
                   class="rounded-l-lg w-full lg:w-[243px] min-w-full lg:min-w-[243px] h-full object-cover">
            </div>
            <p class="text-base font-bold px-6">{{ block.title }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Insights",
  components: {},
  computed: {
    ...mapGetters(['getNews'])
  },
  data() {
    return {
      activeBlock: 0,
    };
  },
};
</script>