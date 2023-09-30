<template>
  <div
    class="h-screen bg-mainColor relative flex items-center justify-center w-full"
  >
    <img
      class="absolute w-full h-full top-0 left-0 z-10"
      src="@/assets/img/bg.png"
      alt=""
    />
    <InfiniteScroll />
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-full"
    >
      <div class="w-full">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/logo.png" alt="" />
          <div :class="{ 'ml-7': isExpanded === true }">
            <h1
              class="text-4xl font-bold text-white w-0 overflow-hidden first_text"
              :class="{ expanded: isExpanded === true }"
            >
              EFFECTIVE MANAGEMENT OF <br />
              PROCESSES AND ASSETS
            </h1>
            <div class="flex justify-end">
              <p
                class="text-xl w-0 text-white h-0 overflow-hidden second_text"
                :class="{ expanded_second: isExpandedSecond === true }"
              >
                Professional experience in consulting and implementation of
                <br />
                own developments in various industries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="absolute left-1/2 bottom-9 -translate-x-1/2 flex">
        <img class="px-3" src="@/assets/img/heroBlock/icons/1.png" alt="" />
        <img class="px-3" src="@/assets/img/heroBlock/icons/2.png" alt="" />
        <img class="px-3" src="@/assets/img/heroBlock/icons/3.png" alt="" />
        <img class="px-3" src="@/assets/img/heroBlock/icons/4.png" alt="" />
        <img class="px-3" src="@/assets/img/heroBlock/icons/5.png" alt="" />
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
  white-space: nowrap; /* Ensure text doesn't wrap to the next line */
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
  white-space: nowrap; /* Ensure text doesn't wrap to the next line */
}
</style>