<template>
  <div id="insights" class="h-full lg:h-screen py-24 flex items-center justify-center relative w-full">
    <div class="bg-mainColor absolute h-1/2 w-full top-0 -z-10">
    </div>
    <img alt="" class="absolute w-full h-full top-0 left-0 z-10" src="@/assets/img/bg.png">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="pt-8 pr-0 lg:pr-8 pb-6 block lg:flex items-center">
        <div v-if="activeBlock === null" class="w-full lg:w-[680px] mr-0 lg:mr-[52px]">
          <h2 class="text-3xl font-semibold text-secondaryColor mb-14">{{ $t('clients') }}</h2>
        </div>
        <div v-else class="w-full lg:w-2/3 mr-[52px] cursor-pointer">
          <h2 class="text-3xl font-semibold text-secondaryColor mb-14">{{ $t('clients') }}</h2>
          <router-link :to="{ name: 'InsightsPage', params: { id: getClients[activeBlock].id } }" class="relative z-10">
            <img :src="getClients[activeBlock].img" alt="" class="rounded-t-md rounded-b-none lg:rounded-md">
            <div
                class="relative lg:absolute bg-white w-full h-1/2 bottom-0 opacity-70 rounded-t-none lg:rounded-t-md rounded-b-md lg:rounded-b-none py-4 px-6">
              <h3 v-if="$i18n.locale === 'ru'" class="text-2xl font-bold">{{ getClients[activeBlock].title }}</h3>
              <h3 v-if="$i18n.locale === 'kz'" class="text-2xl font-bold">{{ getClients[activeBlock].title_kz }}</h3>
              <h3 v-if="$i18n.locale === 'en'" class="text-2xl font-bold">{{ getClients[activeBlock].title_en }}</h3>
              <div class="h-20 overflow-y-auto">
                <p v-if="$i18n.locale === 'ru'" class="text-base overflow-y-auto">{{
                    getClients[activeBlock].short_desc
                  }}</p>
                <p v-if="$i18n.locale === 'kz'" class="text-base">{{ getClients[activeBlock].short_desc_kz }}</p>
                <p v-if="$i18n.locale === 'en'" class="text-base">{{ getClients[activeBlock].short_desc_en }}</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="w-full lg:w-1/3">
          <router-link v-for="(block, index) of getClients" :key="index"
                       :class="{'!mb-0': getClients.length === index + 1}"
                       :to="{ name: 'InsightsPage', params: { id: block.id } }"
                       class="relative block lg:flex z-30 items-center mb-7 bg-white rounded-lg cursor-pointer"
                       @mouseleave="activeBlock = 0"
                       @mouseover="activeBlock = index">
            <div class="relative h-[148px] w-full lg:w-[243px]">
              <div class="absolute left-0 top-0 w-full h-full"
                   style="background: linear-gradient(270deg, #fff -70%, rgba(26, 58, 46, 0.00) 100%);"></div>
              <img :src="block.img" alt=""
                   class="rounded-l-lg w-full lg:w-1/3 min-w-full h-full object-cover">
            </div>
            <p v-if="$i18n.locale === 'ru'" class="w-2/3 text-sm font-bold px-6">{{ block.title }}</p>
            <p v-if="$i18n.locale === 'kz'" class="w-2/3 text-sm font-bold px-6">{{ block.title_kz }}</p>
            <p v-if="$i18n.locale === 'en'" class="w-2/3 text-sm font-bold px-6">{{ block.title_en }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ClientsBlock",
  components: {},
  computed: {
    ...mapGetters(['getClients'])
  },
  data() {
    return {
      activeBlock: 0,
    };
  },
};
</script>