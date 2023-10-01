<template>
  <div class="h-screen py-24 flex items-center justify-center relative">
    <img alt="" class="absolute w-full h-full top-0 left-0 -z-10" src="@/assets/img/bg.png">
    <div class="container mx-auto px-4 lg:px-0">
      <div>
        <div v-for="(item, index) of blocks" :key="index" :class="{'mb-2': blocks.length !== index + 1}"
             class="flex" @mouseleave="activeBlock = null"
             @mouseover="activeBlock = index">
          <div :class="[{'flex-row-reverse': index === 1}, {'!opacity-100': activeBlock === index}]"
               class="flex items-center text-white pl-12 p-8 relative bg-mainColor opacity-90 transition-all">
            <img :src="item.bg" alt="" class="absolute w-full h-full top-0 left-0 -z-10">
            <img :class="{'ml-7 !mr-0': index === 1}" :src="item.img" alt="" class="mr-7">
            <div>
              <h3 class="text-2xl font-bold mb-5">{{ item.title }}</h3>
              <p class="text-base">{{ item.description }}</p>
            </div>
          </div>
          <div class="bg-secondaryColor p-7 flex items-center">
            <img alt="" src="@/assets/img/ourAccomplishments/chevronRight.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1Bg from '@/assets/img/ourAccomplishments/first-bg.png';
import img1 from '@/assets/img/ourAccomplishments/first.png'
import img2Bg from '@/assets/img/ourAccomplishments/second-bg.png'
import img2 from '@/assets/img/ourAccomplishments/gramota.png'
import img3Bg from '@/assets/img/ourAccomplishments/third-bg.png'
import img3 from '@/assets/img/ourAccomplishments/third.png'

export default {
  name: "OurAccomplishments",
  components: {},
  data() {
    return {
      activeBlock: null,
      blocks: [
        {
          title: "Asia-Pacific, Asialaw Profiles 2021",
          description: "The team of GRATA International was ranked among the best firms in Kazakhstan and placed in the highest tiers - \"outstanding\" and \"recommended\" in General Business Law, Energy, Oil&Gas, Construction",
          img: img1,
          bg: img1Bg
        },
        {
          title: "Asia-Pacific, Asialaw Profiles 2021",
          description: "In the rankings, released by Chambers & Partners, GRATA International has confirmed its standing as one of the leading firms in Azerbaijan, Kazakhstan, Kyrgyzstan, Tajikistan and Uzbekistan received ratings across major practice areas.",
          img: img2,
          bg: img2Bg
        },
        {
          title: "Asia-Pacific, Asialaw Profiles 2021",
          description: "Securing rankings in IFLR1000, a key international legal directory for financial and corporate law, GRATA International confirms its position as one of the leading law firms in the region.",
          img: img3,
          bg: img3Bg
        },
      ]
    };
  },
};
</script>