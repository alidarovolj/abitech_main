<template>
  <div>
    <HeroBlock />
    <IndSectors />
  </div>
</template>

<script>
import IndSectors from "@/views/MainPage/components/IndSectors.vue";
import HeroBlock from "@/views/MainPage/components/HeroBlock.vue";

export default {
  name: "MainPage",
  components: {HeroBlock, IndSectors},
}
</script>