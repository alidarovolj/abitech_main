<template>
  <div class="h-screen py-24 flex items-center justify-center relative w-full">
    <div class="bg-mainColor absolute h-1/2 w-full top-0 -z-10">
    </div>
    <img alt="" class="absolute w-full h-full top-0 left-0 z-10" src="@/assets/img/bg.png">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="pt-8 pr-8 pb-6 flex items-center">
        <div v-if="activeBlock === null" class="w-[680px] mr-[52px]">
          <h2 class="text-3xl font-semibold text-secondaryColor mb-14">Insights</h2>
          <div class="relative cursor-pointer z-30">
            <img alt="" class="rounded-md" src="@/assets/img/insights/kazMunaiGaz.png">
            <div class="absolute bg-white max-w-[680px] h-1/2 bottom-0 opacity-70 rounded-t-md py-4 px-6">
              <h3 class="text-2xl font-bold">ПРОЕКТ «АСКОУ – ИНВЕНТАРИЗАЦИЯ» В АО «НК «КАЗМУНАЙГАЗ»</h3>
              <p class="text-base">Национальной компанией «КазМунайГаз» в рамках цифровизации в 2020 году была внедрена
                система автоматизированного учета основных средств «АСКОУ – Инвентаризация».
              </p>
            </div>
          </div>
        </div>
        <div v-else class="w-[680px] mr-[52px] cursor-pointer">
          <h2 class="text-3xl font-semibold text-secondaryColor mb-14">Insights</h2>
          <div class="relative">
            <img alt="" class="rounded-md" :src="blocks[activeBlock].img">
            <div class="absolute bg-white max-w-[680px] h-1/2 bottom-0 opacity-70 rounded-t-md py-4 px-6">
              <h3 class="text-2xl font-bold">{{ blocks[activeBlock].title }}</h3>
              <p class="text-base">{{ blocks[activeBlock].description }}</p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[419px]">
          <div v-for="(block, index) of blocks" :key="index" :class="{'!mb-0': blocks.length === index + 1}"
               class="relative flex z-30 items-center mb-7 bg-white rounded-lg cursor-pointer"
               @mouseleave="activeBlock = null"
               @mouseover="activeBlock = index">
            <div class="relative h-[168px] w-[243px]">
              <div class="absolute left-0 top-0 w-full h-full" style="background: linear-gradient(270deg, #fff -70%, rgba(26, 58, 46, 0.00) 100%);"></div>
              <img :src="block.img" alt="" class="rounded-l-lg w-[243px] min-w-[243px] h-full object-cover">
            </div>
            <p class="text-base font-bold px-6">{{ block.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img2 from '@/assets/img/insights/kazMunaiGaz.png'
import img3 from '@/assets/img/insights/kazMunaiGaz.png'
import img4 from '@/assets/img/insights/kazMunaiGaz.png'

export default {
  name: "Insights",
  components: {},
  data() {
    return {
      activeBlock: null,
      blocks: [
        {
          title: "МОДУЛЬ «АСКОУ – ЭКОЛОГИЧЕСКИЙ МОНИТОРИНГ»",
          description: "The team of GRATA International was ranked among the best firms in Kazakhstan and placed in the highest tiers - \"outstanding\" and \"recommended\" in General Business Law, Energy, Oil&Gas, Construction",
          img: img2
        },
        {
          title: "ABITECH – УЧАСТНИК МЕЖДУНАРОДНОГО ЦИФРОВОГО ФОРУМА DIGITAL ALMATY 2023",
          description: "In the rankings, released by Chambers & Partners, GRATA International has confirmed its standing as one of the leading firms in Azerbaijan, Kazakhstan, Kyrgyzstan, Tajikistan and Uzbekistan received ratings across major practice areas.",
          img: img3
        },
        {
          title: "ABiTech и Tech Garden в Берлине",
          description: "Securing rankings in IFLR1000, a key international legal directory for financial and corporate law, GRATA International confirms its position as one of the leading law firms in the region.",
          img: img4
        },
      ]
    };
  },
};
</script>