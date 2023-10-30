<template>
  <div v-if="block" class="relative bg-mainColor location">
    <img class="w-full h-full absolute left-0 top-0" src="@/assets/img/locations/map.png" alt="">
    <div class="w-full h-full absolute left-0 top-0 bg-mainColor opacity-90"></div>
    <div class="relative z-40 container mx-auto px-4 lg:px-0 py-[67px]">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl lg:text-5xl font-semibold text-white whitespace-normal lg:whitespace-nowrap mr-1">
          {{ $t('header.locations') }}</h1>
        <div class="hidden lg:flex border-b-2 border-white w-full"></div>
      </div>
      <div class="relative mb-11">
        <div v-html="getLocations[activeLocation - 1].addresses[0].map"></div>
        <div class="static lg:absolute left-0 top-0 w-full lg:w-1/3 bg-white h-full pt-9">
          <p class="bg-secondaryColor text-mainColor text-4xl py-3 px-8 mb-4">{{ $t('locations.title') }}</p>
          <div :class="{ 'expanded' : isExpanded }"
               class="text-mainColor mt-3 px-3 text-base overflow-y-hidden first_state w-[90%] mx-auto py-4">
            <p class="border-y border-mainColor py-1 font-bold">
              {{ $t('locations.kazakhstan.title') }}
            </p>
            <div class="pt-2 pb-5 border-b border-mainColor">
              <div class="flex items-center mb-1">
                <img alt="" class="w-6 h-6" src="@/assets/img/locations/pin.png">
                <router-link
                    :class="[{ 'font-semibold' : activeLocation === 1 }, { 'bg-[#1E3D3729] rounded px-1' : activeLocation === 1 }]"
                    :to="{ name: 'LocationsPage', params: { id: 1 } }"
                    class="cursor-pointer block w-full text-mainColor"
                    @mouseleave="activeLocation = $route.params.id"
                    @mouseover="activeLocation = 1">
                  {{ $t('locations.kazakhstan.almaty') }}
                </router-link>
              </div>
              <div class="flex items-center">
                <img alt="" class="w-6 h-6" src="@/assets/img/locations/pin.png">
                <router-link
                    :class="[{ 'font-semibold' : activeLocation === 2 }, { 'bg-[#1E3D3729] rounded px-1' : activeLocation === 2 }]"
                    :to="{ name: 'LocationsPage', params: { id: 2 } }"
                    class="cursor-pointer block w-full text-mainColor"
                    @mouseleave="activeLocation = $route.params.id"
                    @mouseover="activeLocation = 2">
                  {{ $t('locations.kazakhstan.astana') }}
                </router-link>
              </div>
            </div>
            <p class="border-b border-mainColor py-1 font-bold">
              {{ $t('locations.uzbekistan.title') }}
            </p>
            <div class="pt-2 pb-5 border-b border-mainColor">
              <div class="flex items-center mb-1">
                <img alt="" class="w-6 h-6" src="@/assets/img/locations/pin.png">
                <router-link
                    :class="[{ 'font-semibold' : activeLocation === 3 }, { 'bg-[#1E3D3729] rounded px-1' : activeLocation === 3 }]"
                    :to="{ name: 'LocationsPage', params: { id: 3 } }"
                    class="cursor-pointer block w-full text-mainColor"
                    @mouseleave="activeLocation = $route.params.id"
                    @mouseover="activeLocation = 3">
                  {{ $t('locations.uzbekistan.tashkent') }}
                </router-link>
              </div>
            </div>
            <p class="border-b border-mainColor py-1 font-bold">
              {{ $t('locations.russia.title') }}
            </p>
            <div class="pt-2">
              <div class="flex items-center mb-1">
                <img alt="" class="w-6 h-6" src="@/assets/img/locations/pin.png">
                <router-link
                    :class="[{ 'font-semibold' : activeLocation === 4 }, { 'bg-[#1E3D3729] rounded px-1' : activeLocation === 4 }]"
                    :to="{ name: 'LocationsPage', params: { id: 4 } }"
                    class="cursor-pointer block w-full !text-mainColor"
                    @mouseleave="activeLocation = $route.params.id"
                    @mouseover="activeLocation = 4">
                  {{ $t('locations.russia.moskow') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block lg:flex">
        <img alt=""
             class="rounded-tl-lg rounded-tr-lg lg:rounded-tr-none rounded-bl-none lg:rounded-bl-lg w-full lg:w-[55%]"
             src="@/assets/img/locations/almaty.png">
        <div
            class="p-7 bg-white w-full rounded-br-lg rounded-tr-none lg:rounded-tr-lg rounded-bl-lg lg:rounded-bl-none">
          <h2 v-if="$i18n.locale === 'ru'" class="text-4xl font-semibold mb-2.5">{{ block.name }}</h2>
          <h2 v-if="$i18n.locale === 'kz'" class="text-4xl font-semibold mb-2.5">{{ block.name_kz }}</h2>
          <h2 v-if="$i18n.locale === 'en'" class="text-4xl font-semibold mb-2.5">{{ block.name_en }}</h2>
          <div class="flex items-center mb-4">
            <div class="mr-4">
              <img alt="" src="@/assets/img/locations/map-pin.svg">
            </div>
            <p v-if="$i18n.locale === 'ru'" class="text-xl font-medium">{{ block.addresses[0].address }}</p>
            <p v-if="$i18n.locale === 'kz'" class="text-xl font-medium">{{ block.addresses[0].address_kz }}</p>
            <p v-if="$i18n.locale === 'en'" class="text-xl font-medium">{{ block.addresses[0].address_en }}</p>
          </div>
          <div class="flex items-center mb-4">
            <div class="mr-4">
              <img alt="" src="@/assets/img/locations/phone-call.svg">
            </div>
            <p class="text-xl font-medium">{{ block.addresses[0].phone }}</p>
          </div>
          <div class="text-white w-full lg:w-max font-bold rounded-lg bg-mainColor px-[54px] py-2.5">
            <p class="text-xl font-medium">{{ $t("general.feedback") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {useMeta} from "vue-meta";

export default {
  name: "Locations",
  data() {
    return {
      block: null,
      activeLocation: this.$route.params.id
    }
  },
  setup() {
    useMeta({title: "Локация"});
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