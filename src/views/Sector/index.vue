<template>
  <div v-if="block">
    <div class="container mx-auto px-4 lg:px-0 py-[67px]">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-5xl font-semibold text-mainColor whitespace-nowrap mr-1">{{ block.title }}</h1>
        <div class="flex border-b-2 border-mainColor w-full"></div>
      </div>
      <img class="w-full h-80 object-cover rounded-tr-xl mb-8" :src="block.img" alt="">
      <div v-html="block.content" class="text-mainColor text-base"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SectorPage",
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