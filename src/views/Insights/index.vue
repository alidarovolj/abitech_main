<template>
  <div class="pb-52">
    <div v-if="block" class="relative">
      <img alt="" class="absolute w-full h-full top-0 left-0 z-10" src="@/assets/img/bg.png">
      <div class="relative z-10 container mx-auto px-4 lg:px-0 py-[67px]">
        <img style="box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.25);" :src="block.img" alt="" class="w-full h-96 object-cover rounded mb-8">
        <div class="flex flex-col lg:flex-row gap-5 mb-6">
          <div>
            <h2 class="font-bold text-4xl mb-5">{{ block.title }}</h2>
            <p class="text-base font-medium">{{ block.description }}</p>
          </div>
        </div>
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-xl font-bold text-mainColor whitespace-normal lg:whitespace-nowrap mr-1">Additional information</h1>
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
    <div class="container mx-auto px-4 lg:px-0">
      <div class="block lg:flex justify-between">
        <div v-for="(item, index) of getNews" :key="index" class="lg:w-[30%] w-full bg-white rounded-lg" style="box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.25);">
          <img class="rounded-lg" :src="item.img" alt="">
          <div class="p-4">
            <p class="mb-3 font-bold">{{ item.title }}</p>
            <p class="font-medium">{{ item.short_desc }}</p>
          </div>
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
    ...mapGetters(['getNews'])
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
    this.block = this.getNews[this.$route.params.id - 1]
  }
}
</script>