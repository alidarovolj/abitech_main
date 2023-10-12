<template>
  <div id="products" class="h-full lg:h-screen bg-mainColor py-24 flex items-center justify-center relative">
    <img alt="" class="absolute w-full h-full top-0 left-0 z-10" src="@/assets/img/bg.png">
    <div class="container mx-auto px-4 lg:px-0 h-full">
      <div class="block lg:flex justify-between h-full">
        <router-link :to="{ name: 'ProdPage', params: { id: item.id } }"
                     v-for="(item, index) of getProducts" :key="index"
                     class="flex w-full lg:w-fourth relative h-full z-10 flex-col" @mouseleave="activeBlock = null"
                     @mouseover="activeBlock = index"
                     :class="{ 'lg:!flex-col-reverse' : index % 2 === 0 }, { 'mb-7 lg:mb-0' : index + 1 !== getProducts.length }">
          <img :src="item.img" alt="" class="w-full object-cover object-bottom h-1/2"
               :class="{ 'lg:!h-0 lg:max-h-0' : activeBlock === index }">
          <div class="bg-secondaryColor text-white h-1/2 overflow-hidden px-5 py-4"
               :class="{ 'h-full' : activeBlock === index }">
            <h3 v-if="$i18n.locale === 'ru'" class="text-base font-bold">{{ item.title }}</h3>
            <h3 v-if="$i18n.locale === 'kz'" class="text-base font-bold">{{ item.title_kz }}</h3>
            <h3 v-if="$i18n.locale === 'en'" class="text-base font-bold">{{ item.title_en }}</h3>
            <p v-if="$i18n.locale === 'ru'" class="text-sm">{{ item.description }}</p>
            <p v-if="$i18n.locale === 'kz'" class="text-sm">{{ item.description_kz }}</p>
            <p v-if="$i18n.locale === 'en'" class="text-sm">{{ item.description_en }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "ProductsBlock",
  components: {},
  data() {
    return {
      activeBlock: null,
    };
  },
  computed: {
    ...mapGetters(['getProducts'])
  }
};
</script>