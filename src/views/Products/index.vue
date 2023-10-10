<template>
  <div v-if="block" class="relative bg-mainColor">
    <img alt="" class="absolute w-full h-full top-0 left-0 z-30" src="@/assets/img/bg.png">
    <div class="h-1/2 w-full absolute left-0 top-1/2 -translate-y-1/2">
      <img class="h-full w-full object-cover" src="@/assets/img/products/bg.png" alt="">
    </div>
    <div class="relative z-40 container mx-auto px-4 lg:px-0 py-[67px]">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl lg:text-5xl font-semibold text-white whitespace-normal lg:whitespace-nowrap mr-1">Products</h1>
        <div class="hidden lg:flex border-b-2 border-white w-full"></div>
      </div>
      <div class="flex flex-col lg:flex-row gap-5 mb-6 text-white">
        <img :src="block.img" alt="" class="w-full lg:w-half h-full object-cover rounded-tr-xl">
        <div class="w-full lg:w-half flex flex-col justify-between">
          <div>
            <h2 class="font-bold text-4xl mb-5">{{ block.title }}</h2>
            <p class="text-base font-medium">{{ block.description }}</p>
          </div>
          <div>
            <div class="flex items-center justify-between mb-8">
              <h1 class="text-xl font-semibold text-white whitespace-normal lg:whitespace-nowrap mr-1">Product presentations</h1>
              <div class="hidden lg:flex border-b-2 border-white w-full"></div>
            </div>
            <div>
              <div v-for="(item, index) of block.certificates" :key="index" class="flex flex-col lg:flex-row items-center mb-5">
                <button @click="downloadCertificate(item.file)" class="cursor-pointer w-full lg:w-max px-6 py-2.5 text-mainColor bg-white rounded-lg mr-0 lg:mr-5">
                  Download - PDF
                </button>
                <p class="text-base font-medium text-mainColor">{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProductsBlock />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import ProductsBlock from "@/views/MainPage/components/Products.vue";

export default {
  name: "ProductsPage",
  components: {ProductsBlock},
  data() {
    return {
      block: null
    }
  },
  computed: {
    ...mapGetters(['getProducts'])
  },
  async mounted() {
    this.block = this.getProducts[this.$route.params.id - 1]
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
}
</script>