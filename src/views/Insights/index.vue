<template>
  <div class="pb-52">
    <div v-if="block" class="relative">
      <img alt="" class="absolute w-full h-full top-0 left-0 z-10" src="@/assets/img/bg.png">
      <div class="relative z-10 container mx-auto px-4 lg:px-0 py-[67px]">
        <img :src="block.img" alt="" class="w-full h-96 object-cover rounded mb-8"
             style="box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.25);">
        <div class="flex flex-col lg:flex-row gap-5 mb-6">
          <div>
            <h2 v-if="$i18n.locale === 'ru'" class="font-bold text-4xl mb-5">{{ block.title }}</h2>
            <h2 v-if="$i18n.locale === 'kz'" class="font-bold text-4xl mb-5">{{ block.title_kz }}</h2>
            <h2 v-if="$i18n.locale === 'en'" class="font-bold text-4xl mb-5">{{ block.title_en }}</h2>
            <ul class="list-disc pl-10" v-if="$i18n.locale === 'en'">
              <li v-for="(item, index) of block.description_en" :key="index">{{ item }}</li>
            </ul>
            <ul class="list-disc pl-10" v-if="$i18n.locale === 'ru'">
              <li v-for="(item, index) of block.description" :key="index">{{ item }}</li>
            </ul>
            <ul class="list-disc pl-10" v-if="$i18n.locale === 'kz'">
              <li v-for="(item, index) of block.description_kz" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-xl font-bold text-mainColor whitespace-normal lg:whitespace-nowrap mr-1">
            {{ $t('general.addInfo') }}</h1>
          <div class="hidden lg:flex border-b-2 border-mainColor w-full"></div>
        </div>
        <!--        <div>-->
        <!--          <div v-for="(item, index) of block.certificates" :key="index" class="flex flex-col lg:flex-row items-center mb-5">-->
        <!--            <button @click="downloadCertificate(item.file)" class="cursor-pointer w-full lg:w-max px-6 py-2.5 text-white bg-mainColor rounded-lg mr-0 lg:mr-5">-->
        <!--              {{ $t('general.download') }} - PDF-->
        <!--            </button>-->
        <!--            <p v-if="$i18n.locale === 'ru'" class="text-base font-medium text-mainColor">{{ item.name }}</p>-->
        <!--            <p v-if="$i18n.locale === 'kz'" class="text-base font-medium text-mainColor">{{ item.name_kz }}</p>-->
        <!--            <p v-if="$i18n.locale === 'en'" class="text-base font-medium text-mainColor">{{ item.name_en }}</p>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
      <div class="container mx-auto px-4 lg:px-0">
        <div class="block lg:flex justify-between relative z-30">
          <router-link v-for="(item, index) of getClients" :key="index"
                       :to="{ name: 'InsightsPage', params: { id: item.id } }" class="lg:w-fifth w-full bg-white rounded-lg"
                       style="box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.25);">
            <img :src="item.img" alt="" class="rounded-lg">
            <div class="p-4">
              <p v-if="$i18n.locale === 'ru'" class="mb-3 font-bold">{{ item.title }}</p>
              <p v-if="$i18n.locale === 'kz'" class="mb-3 font-bold">{{ item.title_kz }}</p>
              <p v-if="$i18n.locale === 'en'" class="mb-3 font-bold">{{ item.title_en }}</p>
              <p v-if="$i18n.locale === 'ru'" class="font-medium">{{ item.short_desc }}</p>
              <p v-if="$i18n.locale === 'kz'" class="font-medium">{{ item.short_desc_kz }}</p>
              <p v-if="$i18n.locale === 'en'" class="font-medium">{{ item.short_desc_en }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {useMeta} from "vue-meta";

export default {
  name: "AccompPage",
  data() {
    return {
      block: null,
    }
  },
  setup() {
    useMeta({title: "Новость"});
  },
  computed: {
    ...mapGetters(['getClients'])
  },
  methods: {
    downloadCertificate(fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "certificate.pdf";
      link.target = "_blank";
      link.click();
    },
  },
  async mounted() {
    this.block = this.getClients[this.$route.params.id - 1]
  }
}
</script>