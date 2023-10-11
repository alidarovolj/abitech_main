<template>
  <div v-if="block" class="relative">
    <img alt="" class="absolute w-full h-full top-0 left-0 z-10" src="@/assets/img/bg.png">
    <div class="relative z-10 container mx-auto px-4 lg:px-0 py-[67px]">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl lg:text-5xl font-semibold text-mainColor whitespace-normal lg:whitespace-nowrap mr-1">Our Accomplishments</h1>
        <div class="hidden lg:flex border-b-2 border-mainColor w-full"></div>
      </div>
      <div class="flex flex-col lg:flex-row gap-5 mb-6">
        <img :src="block.img" alt="" class="w-full lg:w-1/2 h-80 object-cover rounded-tr-xl">
        <div>
          <h2 v-if="$i18n.locale === 'ru'" class="font-bold text-4xl mb-5">{{ block.title }}</h2>
          <h2 v-if="$i18n.locale === 'kz'" class="font-bold text-4xl mb-5">{{ block.title_kz }}</h2>
          <h2 v-if="$i18n.locale === 'en'" class="font-bold text-4xl mb-5">{{ block.title_en }}</h2>
          <p v-if="$i18n.locale === 'ru'" class="text-base font-medium">{{ block.description }}</p>
          <p v-if="$i18n.locale === 'kz'" class="text-base font-medium">{{ block.description_kz }}</p>
          <p v-if="$i18n.locale === 'en'" class="text-base font-medium">{{ block.description_en }}</p>
        </div>
      </div>
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-xl font-semibold text-mainColor whitespace-normal lg:whitespace-nowrap mr-1">Documents confirming the activity</h1>
        <div class="hidden lg:flex border-b-2 border-mainColor w-full"></div>
      </div>
      <div>
        <div v-for="(item, index) of block.certificates" :key="index" class="flex flex-col lg:flex-row items-center mb-5">
          <button @click="downloadCertificate(item.file)" class="cursor-pointer w-full lg:w-max px-6 py-2.5 text-white bg-mainColor rounded-lg mr-0 lg:mr-5">
            Download - PDF
          </button>
          <p class="text-base font-medium text-mainColor">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AccompPage",
  data() {
    return {
      block: null,
    }
  },
  computed: {
    ...mapGetters(['getAccomplishments'])
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
    this.block = this.getAccomplishments[this.$route.params.id - 1]
  }
}
</script>