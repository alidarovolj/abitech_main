<template>
  <div class="w-full h-[50vh] relative bg-mainColor flex flex-col justify-between flex-end">
    <img
        class="absolute w-full h-full top-0 left-0 z-10 object-cover object-bottom"
        src="@/assets/img/bg_gold.png"
        alt=""
    />
    <div class="w-4/5 mx-auto flex h-1/2 items-end">
      <p class="text-3xl text-secondaryColor mb-12">Наши ключевые партнеры и клиенты</p>
    </div>
    <div class="h-1/2 bg-secondaryColor">
      <InfiniteScrollPartners/>
    </div>
  </div>
</template>

<script>
import InfiniteScrollPartners from "@/components/General/InfiniteScrollPartners.vue";

export default {
  name: "Partners",
  components: {
    InfiniteScrollPartners
  }
}
</script>