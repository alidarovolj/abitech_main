<template>
  <div>
    <div class="w-max fixed z-50 top-1/2 -translate-y-1/2 left-5 text-element">
      <router-link v-for="(link, index) of links" :key="index" class="block text-base w-max cursor-pointer"
                   :class="[{ 'mb-[30px]' : links.length !== index + 1 }, { 'text-mainColor font-semibold' : active === index }]"
                   :to="link.to">{{ link.name }}
      </router-link>
    </div>
    <div class="w-max fixed z-50 top-1/2 -translate-y-1/2 right-5">
      <router-link :to="link.to" class="block w-3 h-3 mb-[30px] bg-mainColor rounded-full cursor-pointer"
                   :class="[{ 'mb-[30px]' : links.length !== index + 1 }, { 'border-2 border-red-500' : active === index }]"
                   v-for="(link, index) of links" :key="index"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      active: 0,
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
  }
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