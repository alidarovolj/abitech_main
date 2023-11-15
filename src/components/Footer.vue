<template>
  <div class="py-12 lg:py-24 flex items-center justify-center bg-[#F6F6F6]">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="block lg:flex mb-7">
        <div class="w-full lg:w-1/2 md:w-2/3 block md:flex mb-5 lg:mb-0">
          <div class="w-max">
            <div class="mb-7">
              <h3 class="text-base font-medium mb-5">{{ $t('footer.safety.title') }}</h3>
              <router-link class="text-[#757575] block mb-4" to="/">{{ $t('footer.safety.privacy') }}</router-link>
              <router-link class="text-[#757575] block" to="/">{{ $t('footer.safety.cookie') }}</router-link>
            </div>
            <div>
              <h3 class="text-base font-medium mb-5">{{ $t('footer.social') }}</h3>
              <div class="flex gap-6">
                <router-link class="block" to=""><img alt="" src="@/assets/img/footer/phone-call.svg"></router-link>
                <router-link class="block" to=""><img alt="" src="@/assets/img/footer/brand-instagram.svg">
                </router-link>
                <router-link class="block" to=""><img alt="" src="@/assets/img/footer/brand-facebook.svg"></router-link>
                <router-link class="block" to=""><img alt="" src="@/assets/img/footer/brand-linkedin.svg"></router-link>
                <router-link class="block" to=""><img alt="" src="@/assets/img/footer/map-pin.svg"></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-max">
          <h3 class="text-base font-medium mb-2.5">{{ $t('footer.news.title') }}</h3>
          <p class="text-[#757575] mb-7">{{ $t('footer.news.content') }}</p>
          <form class="flex flex-col xl:flex-row  xl:items-end justify-between" @submit.prevent="sendForm">
            <div class="mb-2 xl:mb-0">
              <p class="text-[#757575] mb-2.5">Email</p>
              <input :placeholder="$t('footer.form.placeholder')" class="py-3 pl-4 w-full pr-10 border border-solid rounded-lg"
                     name=""
                     type="text">
            </div>
            <button class="py-3 px-8  bg-mainColor text-white rounded-lg" type="submit">{{
                $t('footer.form.button')
              }}
            </button>
          </form>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <h3 class="text-[#757575]">© Abitech, 2003-2023</h3>
      </div>
    </div>
    <a class="absolute left-[200%] top-[100%]" href="https://creoad.kz">CREOAD</a>
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