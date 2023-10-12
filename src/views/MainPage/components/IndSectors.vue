<template>
  <div id="indSectors" class="h-full lg:h-screen py-24 flex items-center justify-center relative w-full">
    <img class="absolute w-full h-full top-0 left-0 -z-10" src="@/assets/img/bg.png" alt="">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="block lg:flex flex-wrap justify-between">
        <div class="w-full lg:w-half p-10 text-secondaryColor bg-mainColor rounded-tl-xl mb-2">
          <div v-if="activeBlock === null">
            <h3 class="mb-2 text-2xl font-bold">
              {{ $t('mainPage.indSectors.title') }}
            </h3>
            <p>{{ $t('mainPage.indSectors.content') }}</p>
          </div>
          <div class="opacity-0 transition-all" :class="{ '!opacity-100' : getIndSectors[activeBlock] }" v-else>
            <h3 v-if="$i18n.locale === 'ru'" class="mb-2 text-2xl font-bold">{{ getIndSectors[activeBlock].title }}</h3>
            <h3 v-if="$i18n.locale === 'kz'" class="mb-2 text-2xl font-bold">{{ getIndSectors[activeBlock].title_kz }}</h3>
            <h3 v-if="$i18n.locale === 'en'" class="mb-2 text-2xl font-bold">{{ getIndSectors[activeBlock].title_en }}</h3>
            <p v-if="$i18n.locale === 'ru'">{{ getIndSectors[activeBlock].description }}</p>
            <p v-if="$i18n.locale === 'kz'">{{ getIndSectors[activeBlock].description_kz }}</p>
            <p v-if="$i18n.locale === 'en'">{{ getIndSectors[activeBlock].description_en }}</p>
          </div>
        </div>
        <router-link
            :to="{ name: 'SectorPage', params: { id: item.id } }"
            @mouseover="activeBlock = index"
            @mouseleave="activeBlock = null"
            class="w-full lg:w-half relative block !mb-2 cursor-pointer grayscale transition-all"
            :class="[{ '!grayscale-0' : activeBlock === index }, { 'rounded-tr-xl' : index === 0 }, { 'rounded-bl-xl' : index === 1 }, { 'rounded-br-xl' : index === 2 }]"
            v-for="(item, index) of getIndSectors" :key="index">
          <img class="w-full" :class="[{ 'rounded-tr-xl' : index === 0 }]" :src="item.img" alt="">
          <p v-if="activeBlock === index && $i18n.locale === 'ru'" class="absolute left-8 bottom-7 z-20 text-lg lg:text-2xl text-white font-bold">{{ item.title }}</p>
          <p v-if="activeBlock === index && $i18n.locale === 'kz'" class="absolute left-8 bottom-7 z-20 text-lg lg:text-2xl text-white font-bold">{{ item.title_kz }}</p>
          <p v-if="activeBlock === index && $i18n.locale === 'en'" class="absolute left-8 bottom-7 z-20 text-lg lg:text-2xl text-white font-bold">{{ item.title_en }}</p>
          <div
              :class="[{ 'rounded-tr-xl' : index === 0 }, { 'rounded-tr-xl' : index === 0 }, { 'rounded-bl-xl' : index === 1 }, { 'rounded-br-xl' : index === 2 }]"
              style="background: linear-gradient(0deg, #1E3D37 0%, rgba(30, 61, 55, 0.00) 94.27%);"
              class="absolute bottom-0 w-full h-36 left-0"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "IndSectors",
  computed: {
    ...mapGetters(['getIndSectors'])
  },
  data() {
    return {
      activeBlock: null,
    };
  },
};
</script>