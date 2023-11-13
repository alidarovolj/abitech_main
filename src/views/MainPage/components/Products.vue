<template>
  <div id="products" class="h-full lg:h-screen py-24 flex items-center justify-center relative">
    <div :class="{ '!h-1/2' : half }" class="bg-mainColor h-full absolute left-0 top-0 w-full"></div>
    <img :class="{ '!h-1/2' : half }" alt="" class="absolute w-full h-full top-0 left-0 z-10" src="@/assets/img/bg.png">
    <img v-if="!half" :class="{ '!h-1/2' : half }"
         class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[70%] object-cover" src="@/assets/img/prod_bg.png"
         alt="">
    <div class="container mx-auto px-4 lg:px-0 h-full">
      <div class="flex items-center justify-between mb-5">
        <p class="whitespace-nowrap text-2xl font-semibold mr-4 text-white">Products</p>
        <p class="whitespace-nowrap text-2xl font-semibold mr-4 text-white">Products</p>
        <div class="w-full border-b border-white"></div>
      </div>
      <div class="block lg:flex justify-between h-full">
        <div
            v-for="(item, index) of getProducts" :key="index"
            class="flex w-full lg:w-fourth relative h-full z-10 flex-col" @mouseleave="activeBlock = null"
            @mouseover="activeBlock = index"
            :class="[{ 'lg:!flex-col-reverse' : index % 2 === 0 }, { 'mb-7 lg:mb-0' : index + 1 !== getProducts.length }]">
          <img :src="item.img" alt="" class="w-full object-cover object-bottom h-1/2"
               :class="{ 'lg:!h-0 lg:max-h-0' : activeBlock === index }">
          <div class="bg-secondaryColor text-white h-1/2 overflow-hidden p-5 flex flex-col justify-between"
               :class="{ 'h-full justify-between' : activeBlock === index }">
            <h3 @click="$router.push({ name: 'ProdPage', params: { id: item.id } })" v-if="$i18n.locale === 'ru'"
                class="text-base font-bold cursor-pointer">{{ item.title }}</h3>
            <h3 @click="$router.push({ name: 'ProdPage', params: { id: item.id } })" v-if="$i18n.locale === 'kz'"
                class="text-base font-bold cursor-pointer">{{ item.title_kz }}</h3>
            <h3 @click="$router.push({ name: 'ProdPage', params: { id: item.id } })" v-if="$i18n.locale === 'en'"
                class="text-base font-bold cursor-pointer">{{ item.title_en }}</h3>
            <p @click="$router.push({ name: 'ProdPage', params: { id: item.id } })" v-if="$i18n.locale === 'ru'"
               class="text-sm cursor-pointer mb-3 h-[280px] overflow-y-hidden"
               :class="{ '!h-[80%] overflow-y-auto' : activeBlock === index }">{{ item.description }}</p>
            <p @click="$router.push({ name: 'ProdPage', params: { id: item.id } })" v-if="$i18n.locale === 'kz'"
               class="text-sm cursor-pointer mb-3 h-[280px] overflow-y-hidden"
               :class="{ '!h-[80%] overflow-y-auto' : activeBlock === index }">{{ item.description_kz }}</p>
            <p @click="$router.push({ name: 'ProdPage', params: { id: item.id } })" v-if="$i18n.locale === 'en'"
               class="text-sm cursor-pointer mb-3 h-[280px] overflow-y-hidden"
               :class="{ '!h-[80%] overflow-y-auto' : activeBlock === index }">{{ item.description_en }}</p>
            <div v-if="activeBlock === index" class="overflow-hidden">
              <div v-for="(sert, ind) of item.certificates" :key="ind"
                   class="flex flex-col lg:flex-row items-center mb-5">
                <button @click="downloadCertificate(sert.file, sert.name)"
                        class="cursor-pointer w-full px-6 py-2.5 text-mainColor bg-white rounded-r-lg mr-0 lg:mr-5 z-30 relative">
                  {{ $t('general.download') }} - PDF
                </button>
                <!--                <p class="text-base font-medium text-mainColor">{{ sert.name }}</p>-->
                <!--                <p class="text-base font-medium text-mainColor">{{ sert.name_kz }}</p>-->
                <!--                <p class="text-base font-medium text-mainColor">{{ sert.name_en }}</p>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "ProductsBlock",
  props: ['half'],
  components: {},
  data() {
    return {
      activeBlock: null,
    };
  },
  computed: {
    ...mapGetters(['getProducts'])
  },
  methods: {
    downloadCertificate(fileUrl, name) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = name;
      link.target = "_blank";
      link.click();
    },
  }
};
</script>