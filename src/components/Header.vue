<template>
  <div class="w-full flex items-center justify-between absolute left-0 top-0 z-50 py-3 px-5">
    <router-link v-if="$route.name === 'SectorPage' || $route.name === 'AccompPage' || $route.name === 'InsightsPage'"
                 to="/"><img class="" src="@/assets/img/logo-main.png" alt=""></router-link>
    <router-link v-else to="/"><img class="" src="@/assets/img/logo-white.png" alt=""></router-link>
    <LocaleSwitcher/>
  </div>
  <div class="hidden lg:flex">
    <div class="w-max fixed z-50 top-1/2 -translate-y-1/2 left-5 text-element">
      <a
          class="block text-base w-max cursor-pointer mb-[30px] text-white"
          href="#hero"
          :class="[{ 'font-semibold': activeAnchor === 'hero' }, { '!text-mainColor': activeAnchor === 'indSectors' || activeAnchor === 'accomplishments' || activeAnchor === 'insights' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }]">
        {{ $t('header.main') }}
      </a>
      <a
          class="block text-base w-max cursor-pointer mb-[30px] text-white"
          href="#indSectors"
          :class="[{ 'font-semibold': activeAnchor === 'indSectors' }, { '!text-mainColor': activeAnchor === 'indSectors' || activeAnchor === 'accomplishments' || activeAnchor === 'insights' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }]">
        {{ $t('header.indSectors') }}
      </a>
      <a
          class="block text-base w-max cursor-pointer mb-[30px] text-white"
          href="#locations"
          :class="[{ 'font-semibold': activeAnchor === 'locations' }, { '!text-mainColor': activeAnchor === 'indSectors' || activeAnchor === 'accomplishments' || activeAnchor === 'insights' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }]">
        {{ $t('header.locations') }}
      </a>
      <a
          class="block text-base w-max cursor-pointer mb-[30px] text-white"
          href="#accomplishments"
          :class="[{ 'font-semibold': activeAnchor === 'accomplishments' }, { '!text-mainColor': activeAnchor === 'indSectors' || activeAnchor === 'accomplishments' || activeAnchor === 'insights' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }]">
        {{ $t('header.accomplishments') }}
      </a>
      <a
          class="block text-base w-max cursor-pointer"
          href="#products"
          :class="[{ 'font-semibold': activeAnchor === 'products' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }, { '!text-mainColor': activeAnchor === 'indSectors' || activeAnchor === 'accomplishments' || activeAnchor === 'insights' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }]">
        {{ $t('header.products') }}
      </a>
    </div>
    <div class="w-max fixed z-50 top-1/2 -translate-y-1/2 right-5">
      <a
          class="block w-3 h-3 mb-[30px] bg-white rounded-full cursor-pointer"
          :class="[{ 'border-2 border-red-500' : activeAnchor === 'hero' }, { '!bg-mainColor': activeAnchor === 'indSectors' || activeAnchor === 'accomplishments' || activeAnchor === 'insights' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }]"
          href="#hero">
      </a>
      <a
          class="block w-3 h-3 mb-[30px] bg-white rounded-full cursor-pointer"
          :class="[{ 'border-2 border-red-500' : activeAnchor === 'indSectors' }, { '!bg-mainColor': activeAnchor === 'indSectors' || activeAnchor === 'accomplishments' || activeAnchor === 'insights' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }]"
          href="#hero">
      </a>
      <a
          class="block w-3 h-3 mb-[30px] bg-white rounded-full cursor-pointer"
          :class="[{ 'border-2 border-red-500' : activeAnchor === 'locations' }, { '!bg-mainColor': activeAnchor === 'indSectors' || activeAnchor === 'accomplishments' || activeAnchor === 'insights' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }]"
          href="#hero">
      </a>
      <a
          class="block w-3 h-3 mb-[30px] bg-white rounded-full cursor-pointer"
          :class="[{ 'border-2 border-red-500' : activeAnchor === 'accomplishments' }, { '!bg-mainColor': activeAnchor === 'indSectors' || activeAnchor === 'accomplishments' || activeAnchor === 'insights' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }]"
          href="#hero">
      </a>
      <a
          class="block w-3 h-3 mb-[30px] bg-white rounded-full cursor-pointer"
          :class="[{ 'border-2 border-red-500' : activeAnchor === 'products' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }, { '!bg-mainColor': activeAnchor === 'indSectors' || activeAnchor === 'accomplishments' || activeAnchor === 'insights' || activeAnchor === 'contacts' }, { 'text-white': $route.name === 'locationsPage' || $route.name === 'prodPage' }, { '!text-mainColor' : $route.name === 'InsightsPage' }]"
          href="#hero">
      </a>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/General/LocaleSwitcher.vue";

export default {
  name: "Header",
  components: {
    LocaleSwitcher
  },
  data() {
    return {
      active: 0,
      activeAnchor: null,
      links: [
        {
          id: 1,
          name: "Main",
          to: "/",
        },
        {
          id: 2,
          name: "Industry sectors",
          to: "/",
        },
        {
          id: 3,
          name: "Locations",
          to: "/",
        },
        {
          id: 4,
          name: "Our accomplishments",
          to: "/",
        },
        {
          id: 5,
          name: "Products",
          to: "/",
        }
      ]
    }
  },
  mounted() {
    if (this.$route.name === 'MainPage') {
      this.active = 0
    }
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Remember to remove the event listener when the component is unmounted.
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Calculate the current scroll position and viewport height.
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Define the anchors and their positions.
      const anchors = {
        hero: document.getElementById('hero').offsetTop,
        indSectors: document.getElementById('indSectors').offsetTop,
        locations: document.getElementById('locations').offsetTop,
        accomplishments: document.getElementById('accomplishments').offsetTop,
        products: document.getElementById('products').offsetTop,
        contacts: document.getElementById('contacts').offsetTop,
      };

      // Find the anchor that is currently in view.
      for (const anchor in anchors) {
        if (scrollPosition >= anchors[anchor] && scrollPosition < anchors[anchor] + viewportHeight) {
          this.activeAnchor = anchor;
          break; // Stop searching when we find the active anchor.
        }
      }
    },
  },
}
</script>

<style>
/* Your existing CSS styles here */

.container {
  position: relative;
}

.text-element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* Default text color */
}

.background-element {
  background-color: #333; /* Default background color */
  width: 100%;
  height: 100vh;
}
</style>