<template>
  <div id="accomplishments" class="h-full lg:h-screen py-24 flex items-center justify-center relative w-full">
    <img alt="" class="absolute w-full h-full top-0 left-0 -z-10" src="@/assets/img/bg.png">
    <div class="container mx-auto px-4 lg:px-0">
      <div>
        <!--        <Carousel>-->
        <!--          <Slide v-for="slideIndex in Math.ceil(getAccomplishments.length / 3)" :key="slideIndex">-->
        <!--            <div class="flex flex-col">-->
        <!--              <router-link-->
        <!--                  v-for="itemIndex in 3"-->
        <!--                  :key="index"-->
        <!--                  :to="{ name: 'AccompPage', params: { id: getAccomplishments[index].id } }"-->
        <!--                  class="flex mb-2 w-full"-->
        <!--                  @mouseleave="activeBlock = null"-->
        <!--                  @mouseover="(activeBlock = index)"-->
        <!--              >-->
        <!--                <div :class="[{'flex-row-reverse': itemIndex === 2}, { 'opacity-100': activeBlock === index }]"-->
        <!--                     class="block lg:flex items-center text-white pl-6 lg:pl-12 p-4 lg:p-8 relative bg-mainColor opacity-90 transition-all w-full">-->
        <!--                  <img :src="getAccomplishments[index].img_bg" alt="" class="absolute w-full h-full top-0 left-0 -z-10">-->
        <!--                  <img :class="{'ml-7 mr-0': itemIndex === 2}" :src="getAccomplishments[index].img" alt="" class="mr-7 w-[178px] h-[118px]">-->
        <!--                  <div class="w-full">-->
        <!--                    <h3 v-if="$i18n.locale === 'ru'" class="text-xl lg:text-2xl font-bold mb-5">{{ getAccomplishments[index].title }}</h3>-->
        <!--                    <h3 v-if="$i18n.locale === 'kz'" class="text-xl lg:text-2xl font-bold mb-5">{{ getAccomplishments[index].title_kz }}</h3>-->
        <!--                    <h3 v-if="$i18n.locale === 'en'" class="text-xl lg:text-2xl font-bold mb-5">{{ getAccomplishments[index].title_en }}</h3>-->
        <!--                    <p v-if="$i18n.locale === 'ru'" class="text-sm lg:text-base">{{ getAccomplishments[index].short_desc }}</p>-->
        <!--                    <p v-if="$i18n.locale === 'kz'" class="text-sm lg:text-base">{{ getAccomplishments[index].short_desc_kz }}</p>-->
        <!--                    <p v-if="$i18n.locale === 'en'" class="text-sm lg:text-base">{{ getAccomplishments[index].short_desc_en }}</p>-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--                <div class="bg-secondaryColor p-4 lg:p-7 flex items-center w-14 text-center justify-center" :class="{ 'w-16' : activeBlock === index }">-->
        <!--                  <img class="w-4 min-w-[16px]" alt="" src="@/assets/img/ourAccomplishments/chevronRight.svg">-->
        <!--                </div>-->
        <!--              </router-link>-->
        <!--            </div>-->
        <!--          </Slide>-->
        <!--          <template #addons>-->
        <!--            <Pagination/>-->
        <!--          </template>-->
        <!--        </Carousel>-->
        <div class="flex flex-col">
          <router-link
              v-for="(item, index) in getAccomplishments"
              :key="index"
              :to="{ name: 'AccompPage', params: { id: item.id } }"
              class="flex mb-2 w-full"
              @mouseleave="activeBlock = null"
              @mouseover="activeBlock = index"
          >
            <div
                class="block lg:flex items-center text-white pl-6 lg:pl-12 p-4 lg:p-8 relative bg-mainColor opacity-90 transition-all w-full">
              <img :src="item.img_bg" alt=""
                   class="absolute w-full h-full top-0 left-0 -z-10 mb-3 lg:mb-0">
              <img :class="{'ml-7 mr-0': index === 2}"
                   :src="getAccomplishments[index].img" alt=""
                   class="mr-7 w-[178px] h-[118px] mb-3 lg:mb-0">
              <div class="w-full">
                <h3 v-if="$i18n.locale === 'ru'" class="text-lg lg:text-2xl font-bold mb-5">
                  {{ getAccomplishments[index].title }}</h3>
                <h3 v-if="$i18n.locale === 'kz'" class="text-lg lg:text-2xl font-bold mb-5">
                  {{ getAccomplishments[index].title_kz }}</h3>
                <h3 v-if="$i18n.locale === 'en'" class="text-lg lg:text-2xl font-bold mb-5">
                  {{ getAccomplishments[index].title_en }}</h3>
                <p v-if="$i18n.locale === 'ru'" class="text-sm lg:text-xl">
                  {{ getAccomplishments[index].short_desc }}</p>
                <p v-if="$i18n.locale === 'kz'" class="text-sm lg:text-xl">
                  {{ getAccomplishments[index].short_desc_kz }}</p>
                <p v-if="$i18n.locale === 'en'" class="text-sm lg:text-xl">
                  {{ getAccomplishments[index].short_desc_en }}</p>
              </div>
            </div>
            <div class="bg-secondaryColor p-4 lg:p-7 flex items-center w-14 text-center justify-center"
                 :class="{ 'w-16' : activeBlock === index }">
              <img class="w-4 min-w-[16px]" alt="" src="@/assets/img/ourAccomplishments/chevronRight.svg">
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {defineComponent} from 'vue'
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
  name: "OurAccomplishments",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
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

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>