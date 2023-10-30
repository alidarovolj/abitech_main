<template>
  <div
      id="hero"
      class="bg h-screen bg-mainColor relative flex items-center justify-center w-full background-element"
  >
    <img
        class="absolute w-full h-full top-0 left-0 z-10"
        src="@/assets/img/bg.png"
        alt=""
    />
    <InfiniteScroll/>
    <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-full px-4 lg:px-0"
    >
      <div class="w-full flex items-center justify-center">
        <div class="block lg:flex items-start justify-center transition-all w-full lg:w-max">
          <img class="mb-5 lg:mb-0" src="@/assets/img/logo.png" alt=""/>
          <div class="w-full lg:w-max" :class="{ 'ml-0 lg:ml-7': isExpanded === true }">
            <h1
                class="text-lg lg:text-4xl font-bold text-white whitespace-normal lg:whitespace-nowrap uppercase w-0 overflow-hidden first_text"
                :class="{ expanded: isExpanded === true }"
                v-html="$t('mainPage.hero.title')"
            ></h1>
            <div class=" mt-3">
              <p
                  class="text-sm lg:text-xl w-0 text-white h-0 whitespace-normal lg:whitespace-nowrap overflow-hidden second_text"
                  :class="{ expanded_second: isExpandedSecond === true }"
                  v-html="$t('mainPage.hero.content')"
              >
              </p>
              <div class="flex mt-3 w-0 h-0 second_text"
                   :class="{ expanded_second: isExpandedSecond === true }">
                <a class="py-3 rounded px-14 bg-secondaryColor whitespace-normal lg:whitespace-nowrap text-mainColor text-sm font-bold w-max" href="#contacts">
                  {{ $t('mainPage.hero.order') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="absolute left-1/2 bottom-9 -translate-x-1/2 flex z-30">
        <a href="tel:+77717622285"><img class="px-3 cursor-pointer" src="@/assets/img/heroBlock/icons/1.png" alt=""/></a>
        <a href="https://www.instagram.com/abitechkz/"><img class="px-3 cursor-pointer" src="@/assets/img/heroBlock/icons/2.png" alt=""/></a>
<!--        <a href=""><img class="px-3 cursor-pointer" src="@/assets/img/heroBlock/icons/3.png" alt=""/></a>-->
        <a href="https://kz.linkedin.com/company/abitechkz"><img class="px-3 cursor-pointer" src="@/assets/img/heroBlock/icons/4.png" alt=""/></a>
        <a href="https://www.google.com/maps/place/ABiTech/@43.209837,76.8562701,17z/data=!3m1!4b1!4m6!3m5!1s0x38836830b210f111:0x11c14c21ab78baed!8m2!3d43.2098331!4d76.858845!16s%2Fg%2F11h42x8zfr?entry=ttu"><img class="px-3 cursor-pointer" src="@/assets/img/heroBlock/icons/5.png" alt=""/></a>
      </div>
    </div>
  </div>
</template>

<script>
import InfiniteScroll from "@/components/General/InfiniteScroll.vue";

export default {
  name: "HeroBlock",
  components: {
    InfiniteScroll,
  },
  data() {
    return {
      isExpanded: false, // Initialize as false
      isExpandedSecond: false, // Initialize as false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isExpanded = true;
    }, "3000");
    setTimeout(() => {
      this.isExpandedSecond = true;
    }, "5000");
  },
};
</script>

<style scoped>
.first_text {
  width: 0;
  max-width: max-content;
  overflow: hidden;
  transition: width 3s ease;
}

.second_text {
  overflow: hidden;
  max-width: max-content;
  transition: all 3s ease;
}

/* Add a class to trigger the animation when needed */
.expanded {
  width: 100%;
}

.expanded_second {
  height: 100% !important;
  width: 100% !important;
}
</style>