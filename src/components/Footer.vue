<template>
  <div class="py-24 flex items-center justify-center bg-[#F6F6F6]">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex  mb-7">
        <div class="w-1/2 md:w-2/3 block md:flex">
          <div class="w-full md:w-1/2 mb-5 md:mb-0">
            <h3 class="text-base font-medium mb-5">About the company</h3>
            <div class="text-[#757575]">
              <router-link v-for="(link,index) of links" :key="index" :class="{'mb-4': links.length !== index + 1}"
                           :to="link.to" class="block">{{ link.name }}
              </router-link>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="mb-7">
              <h3 class="text-base font-medium mb-5">Safety</h3>
              <router-link class="text-[#757575] block mb-4" to="/">Privacy policy</router-link>
              <router-link class="text-[#757575] block" to="/">Cookie Policy</router-link>
            </div>
            <div>
              <h3 class="text-base font-medium mb-5">Social network</h3>
              <div class="flex gap-6">
                <router-link class="block" to=""><img alt="" src="@/assets/img/footer/phone-call.svg"></router-link>
                <router-link class="block" to=""><img alt="" src="@/assets/img/footer/brand-instagram.svg"></router-link>
                <router-link class="block" to=""><img alt="" src="@/assets/img/footer/brand-facebook.svg"></router-link>
                <router-link class="block" to=""><img alt="" src="@/assets/img/footer/brand-linkedin.svg"></router-link>
                <router-link class="block" to=""><img alt="" src="@/assets/img/footer/map-pin.svg"></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 md:w-1/3">
          <h3 class="text-base font-medium mb-2.5">I want to keep up to date with the news</h3>
          <p class="text-[#757575] mb-7">Be the first to know about our latest innovations.
            Never miss out on interesting offers and promotions.
            Get advice from experts.</p>
          <form class="flex flex-col xl:flex-row  xl:items-end justify-between" @submit.prevent="sendForm">
            <div class="mb-2 xl:mb-0">
              <p class="text-[#757575] mb-2.5">Email</p>
              <input class="py-3 pl-4 w-full pr-10 border border-solid rounded-lg" name="" placeholder="Your email address"
                     type="text">
            </div>
            <button class="py-3 px-8  bg-mainColor text-white rounded-lg" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div>
        <h3 class="text-[#757575]">© Abitech, 2018-2023</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBlock",
  data() {
    return {
      currentTheme: localStorage.getItem("theme"),
      links: [
        {
          id: 1,
          name: "About us",
          to: "/",
        },
        {
          id: 2,
          name: "Locations",
          to: "/",
        },
        {
          id: 3,
          name: "Industry sectors",
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
    };
  },
}
</script>