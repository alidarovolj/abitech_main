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
          class="text-secondaryColor el block text-base w-max cursor-pointer mb-[30px]"
          href="https://abitech.creoad.kz/#hero">
        {{ $t('header.main') }}
      </a>
      <a
          class="text-secondaryColor el block text-base w-max cursor-pointer mb-[30px]"
          href="https://abitech.creoad.kz/#indSectors">
        {{ $t('header.indSectors') }}
      </a>
      <a
          class="text-secondaryColor el block text-base w-max cursor-pointer mb-[30px]"
          href="https://abitech.creoad.kz/#locations">
        {{ $t('header.locations') }}
      </a>
      <a
          class="text-secondaryColor el block text-base w-max cursor-pointer mb-[30px]"
          href="https://abitech.creoad.kz/#accomplishments">
        {{ $t('header.accomplishments') }}
      </a>
      <a
          class="text-secondaryColor el block text-base w-max cursor-pointer"
          href="https://abitech.creoad.kz/#products">
        {{ $t('header.products') }}
      </a>
    </div>
    <div class="w-max fixed z-50 top-1/2 -translate-y-1/2 right-5">
      <a
          class="text-secondaryColor el block w-3 h-3 mb-[30px] bg-white rounded-full cursor-pointer"
          href="https://abitech.creoad.kz/#hero">
      </a>
      <a
          class="text-secondaryColor el block w-3 h-3 mb-[30px] bg-white rounded-full cursor-pointer"
          href="https://abitech.creoad.kz/#indSectors">
      </a>
      <a
          class="text-secondaryColor el block w-3 h-3 mb-[30px] bg-white rounded-full cursor-pointer"
          href="https://abitech.creoad.kz/#locations">
      </a>
      <a
          class="text-secondaryColor el block w-3 h-3 mb-[30px] bg-white rounded-full cursor-pointer"
          href="https://abitech.creoad.kz/#accomplishments">
      </a>
      <a
          class="text-secondaryColor el block w-3 h-3 mb-[30px] bg-white rounded-full cursor-pointer"
          href="https://abitech.creoad.kz/#products">
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
  computed: {
    generateHref() {
      return location.host;
    },
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
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>