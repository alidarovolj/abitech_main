<template>
  <div v-if="block" class="relative">
    <img alt="" class="absolute w-full h-full top-0 left-0 z-10" src="@/assets/img/bg.png">
    <div class="container mx-auto px-4 lg:px-0 py-[67px]">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-5xl font-semibold text-mainColor whitespace-nowrap mr-1">Our Accomplishments</h1>
        <div class="flex border-b-2 border-mainColor w-full"></div>
      </div>
      <div class="flex flex-col lg:flex-row gap-5 mb-6">
        <img :src="block.img" alt="" class="w-full lg:w-1/2 h-80 object-cover rounded-tr-xl">
        <div>
          <h2 class="font-bold text-4xl mb-5">{{ block.title }}</h2>
          <p class="text-base font-medium">{{ block.description }}</p>
        </div>
      </div>
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-xl font-semibold text-mainColor whitespace-nowrap mr-1">Documents confirming the activity</h1>
        <div class="flex border-b-2 border-mainColor w-full"></div>
      </div>
      <div>
        <div class="flex flex-col lg:flex-row items-center mb-2">
          <button class="cursor-pointer w-full lg:w-max px-6 py-2.5 text-white bg-mainColor rounded-lg mr-0 lg:mr-5">
            Download - PDF
          </button>
          <p class="text-base font-medium text-mainColor">Certificate certifying the registration of a person as a
            participant in a special economic zone</p>
        </div>
        <div class="flex flex-col lg:flex-row items-center">
          <button class="cursor-pointer w-full lg:w-max px-6 py-2.5 text-white bg-mainColor rounded-lg mr-0 lg:mr-5">
            Download - PDF
          </button>
          <p class="text-base font-medium text-mainColor">Certificate of accreditation</p>
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
  async mounted() {
    // await this.getIndSectors.forEach((item, index) => {
    //   if (item.id === this.$route.params.id) {
    //     this.block = item
    //   }
    // })
    this.block = this.getAccomplishments[this.$route.params.id - 1]
  }
}
</script>