<template>
  <div v-if="block" class="relative">
    <img alt="" class="absolute w-full h-full top-0 left-0 -z-10" src="@/assets/img/bg.png">
    <div class="container mx-auto px-4 lg:px-0 py-[67px]">
      <div class="flex items-center justify-between mb-8">
        <h1 v-if="$i18n.locale === 'ru'"
            class="text-3xl lg:text-5xl font-semibold text-mainColor whitespace-normal lg:whitespace-nowrap mr-1">
          {{ block.title }}</h1>
        <h1 v-if="$i18n.locale === 'kz'"
            class="text-3xl lg:text-5xl font-semibold text-mainColor whitespace-normal lg:whitespace-nowrap mr-1">
          {{ block.title_kz }}</h1>
        <h1 v-if="$i18n.locale === 'en'"
            class="text-3xl lg:text-5xl font-semibold text-mainColor whitespace-normal lg:whitespace-nowrap mr-1">
          {{ block.title_en }}</h1>
        <div class="hidden lg:flex border-b-2 border-mainColor w-full"></div>
      </div>
      <img :src="block.img" alt="" class="w-full h-80 object-cover rounded-tr-xl mb-8">
      <div v-if="$i18n.locale === 'ru'" class="text-mainColor text-base" v-html="block.content"></div>
      <div v-if="$i18n.locale === 'kz'" class="text-mainColor text-base" v-html="block.content_kz"></div>
      <div v-if="$i18n.locale === 'en'" class="text-mainColor text-base" v-html="block.content_en"></div>
      <p v-if="$i18n.locale === 'en'">We have worked with :</p>
      <p v-if="$i18n.locale === 'ru'">Мы работали с:</p>
      <p v-if="$i18n.locale === 'kz'">Біз жұмыс істедік:</p>
      <div class="flex items-center">
        <img class=" h-20 mr-7" v-for="(item, index) of block.works" :key="index" alt="" :src="item">
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {useMeta} from "vue-meta";

export default {
  name: "SectorPage",
  setup() {
    useMeta({title: "Отрасль промышленности"});
  },
  data() {
    return {
      block: null,
    }
  },
  computed: {
    ...mapGetters(['getIndSectors'])
  },
  async mounted() {
    // await this.getIndSectors.forEach((item, index) => {
    //   if (item.id === this.$route.params.id) {
    //     this.block = item
    //   }
    // })
    this.block = this.getIndSectors[this.$route.params.id - 1]
  }
}
</script>