<template>
  <div class="h-screen py-24 flex items-center justify-center relative">
    <img class="absolute w-full h-full top-0 left-0 -z-10" src="@/assets/img/indSectors/bg.png" alt="">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex flex-wrap justify-between">
        <div class="w-half p-10 text-secondaryColor bg-mainColor rounded-tl-xl mb-2">
          <div>
            <h3 class="mb-2 text-2xl font-bold">Industry sectors</h3>
            <p>250 professionals in 21 countries advise major international and local firms, funds, banks, insurance
              firms, construction companies, mining companies, airlines, light and heavy industry companies, telecoms,
              pharmaceuticals and others.Clients have access to quality legal services in the following industries.</p>
          </div>
        </div>
        <div class="w-half mb-2" v-for="(item, index) of blocks" :key="index">
          <img class="w-full" :src="item.img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/img/indSectors/1.png'; // Import the image

export default {
  name: "IndSectors",
  data() {
    return {
      activeBlock: 0,
      blocks: [
        {
          title: "Industry sectors",
          description: "250 professionals in 21 countries advise major international and local firms, funds, banks, insurance firms, construction companies, mining companies, airlines, light and heavy industry companies, telecoms, pharmaceuticals and others.Clients have access to quality legal services in the following industries.",
          img: img1
        },
        {
          title: "Industry sectors",
          description: "250 professionals in 21 countries advise major international and local firms, funds, banks, insurance firms, construction companies, mining companies, airlines, light and heavy industry companies, telecoms, pharmaceuticals and others.Clients have access to quality legal services in the following industries.",
          img: img1
        },
        {
          title: "Industry sectors",
          description: "250 professionals in 21 countries advise major international and local firms, funds, banks, insurance firms, construction companies, mining companies, airlines, light and heavy industry companies, telecoms, pharmaceuticals and others.Clients have access to quality legal services in the following industries.",
          img: img1
        }
      ]
    };
  },
};
</script>