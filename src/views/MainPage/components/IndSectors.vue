<template>
  <div class="h-screen py-24 flex items-center justify-center relative">
    <img class="absolute w-full h-full top-0 left-0 -z-10" src="@/assets/img/indSectors/bg.png" alt="">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex flex-wrap justify-between">
        <div class="w-half p-10 text-secondaryColor bg-mainColor rounded-tl-xl mb-2">
          <div v-if="activeBlock === null">
            <h3 class="mb-2 text-2xl font-bold">Industry sectors</h3>
            <p>250 professionals in 21 countries advise major international and local firms, funds, banks, insurance
              firms, construction companies, mining companies, airlines, light and heavy industry companies, telecoms,
              pharmaceuticals and others.Clients have access to quality legal services in the following industries.</p>
          </div>
          <div class="opacity-0 transition-all" :class="{ '!opacity-100' : blocks[activeBlock] }" v-else>
            <h3 class="mb-2 text-2xl font-bold">{{ blocks[activeBlock].title }}</h3>
            <p>{{ blocks[activeBlock].description }}</p>
          </div>
        </div>
        <div @mouseover="activeBlock = index" @mouseleave="activeBlock = null"
             class="w-half relative mb-2 cursor-pointer grayscale transition-all"
             :class="{ '!grayscale-0' : activeBlock === index }"
             v-for="(item, index) of blocks" :key="index">
          <img class="w-full" :src="item.img" alt="">
          <p v-if="activeBlock === index" class="absolute left-8 bottom-7 z-20 text-2xl text-white font-bold">{{ item.title }}</p>
          <div style="background: linear-gradient(0deg, #1E3D37 0%, rgba(30, 61, 55, 0.00) 94.27%);" class="absolute bottom-0 w-full h-36 left-0"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/img/indSectors/1.png'; // Import the image
import img2 from '@/assets/img/indSectors/2.png'; // Import the image
import img3 from '@/assets/img/indSectors/3.png'; // Import the image

export default {
  name: "IndSectors",
  data() {
    return {
      activeBlock: null,
      blocks: [
        {
          title: "Oil & Gas",
          description: "Our Oil and Gas team has extensive experience delivering complex projects. We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle.",
          img: img1
        },
        {
          title: "Industry & Trade",
          description: "Combining the strength of all our industry sectors we have created what we believe is a leading practice for assisting in establishing a strong legal presence and further support in the Industry and Trade business.",
          img: img3
        },
        {
          title: "Construction & Infrastructure",
          description: "The Construction and Infrastructure team of GRATA International offer a full range of legal services to assist and advise our clients in the area of construction а infrastructure, energy, transport and other facilities in Kazakhstan, Central Asia and the CIS. ",
          img: img2
        }
      ]
    };
  },
};
</script>