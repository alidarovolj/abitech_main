<template>
  <div v-if="block" class="relative bg-mainColor">
    <div class="relative z-40 container mx-auto px-4 lg:px-0 py-[67px]">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl lg:text-5xl font-semibold text-white whitespace-normal lg:whitespace-nowrap mr-1">Locations</h1>
        <div class="hidden lg:flex border-b-2 border-white w-full"></div>
      </div>
      <div class="relative">
        <div v-html="getLocations[activeLocation].addresses[0].map"></div>
        <div class="static lg:absolute left-0 top-0 w-full lg:w-1/3 bg-white h-full pt-9">
          <p class="bg-secondaryColor text-mainColor text-4xl py-3 px-8 mb-4">We placed</p>
          <div :class="{ 'expanded' : isExpanded }"
               class="text-mainColor mt-3 px-3 text-base overflow-y-hidden first_state w-[90%] mx-auto py-4">
            <p class="border-y border-mainColor py-1 font-bold">
              Kazakhstan
            </p>
            <div class="pt-2 pb-5 border-b border-mainColor">
              <div class="flex items-center mb-1">
                <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
                <router-link
                    :to="{ name: 'LocationsPage', params: { id: 1 } }"
                    class="cursor-pointer block w-full"
                    :class="[{ 'font-semibold' : activeLocation === 1 }, { 'bg-[#1E3D3729] rounded px-1' : activeLocation === 1 }]"
                    @mouseover="activeLocation = 1"
                    @mouseleave="activeLocation = $route.params.id">
                  Almaty
                </router-link>
              </div>
              <div class="flex items-center">
                <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
                <router-link
                    :to="{ name: 'LocationsPage', params: { id: 2 } }"
                    class="cursor-pointer block w-full"
                    :class="[{ 'font-semibold' : activeLocation === 2 }, { 'bg-[#1E3D3729] rounded px-1' : activeLocation === 2 }]"
                    @mouseover="activeLocation = 2"
                    @mouseleave="activeLocation = $route.params.id">
                  Astana
                </router-link>
              </div>
            </div>
            <p class="border-b border-mainColor py-1 font-bold">
              Uzbekistan
            </p>
            <div class="pt-2 pb-5 border-b border-mainColor">
              <div class="flex items-center mb-1">
                <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
                <router-link
                    :to="{ name: 'LocationsPage', params: { id: 3 } }"
                    class="cursor-pointer block w-full"
                    :class="[{ 'font-semibold' : activeLocation === 3 }, { 'bg-[#1E3D3729] rounded px-1' : activeLocation === 3 }]"
                    @mouseover="activeLocation = 3"
                    @mouseleave="activeLocation = $route.params.id">
                  Tashkent
                </router-link>
              </div>
            </div>
            <p class="border-b border-mainColor py-1 font-bold">
              Russia
            </p>
            <div class="pt-2">
              <div class="flex items-center mb-1">
                <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
                <router-link
                    :to="{ name: 'LocationsPage', params: { id: 4 } }"
                    class="cursor-pointer block w-full"
                    :class="[{ 'font-semibold' : activeLocation === 4 }, { 'bg-[#1E3D3729] rounded px-1' : activeLocation === 4 }]"
                    @mouseover="activeLocation = 4"
                    @mouseleave="activeLocation = $route.params.id">
                  Moskow
                </router-link>
              </div>
              <div class="flex items-center mb-1">
                <img class="w-6 h-6" src="@/assets/img/locations/pin.png" alt="">
                <router-link
                    :to="{ name: 'LocationsPage', params: { id: 5 } }"
                    class="cursor-pointer block w-full"
                    :class="[{ 'font-semibold' : activeLocation === 5 }, { 'bg-[#1E3D3729] rounded px-1' : activeLocation === 5 }]"
                    @mouseover="activeLocation = 5"
                    @mouseleave="activeLocation = $route.params.id">
                  Saint - Petersburg
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Locations",
  data() {
    return {
      block: null,
      activeLocation: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters(['getLocations'])
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
    this.block = this.getLocations[this.$route.params.id - 1]
  }
}
</script>