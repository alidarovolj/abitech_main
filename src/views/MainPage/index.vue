<template>
  <div>
    <HeroBlock />
    <IndSectors/>
    <OurAccomplishments/>
  </div>
</template>

<script>
import IndSectors from "@/views/MainPage/components/IndSectors.vue";
import OurAccomplishments from "@/views/MainPage/components/OurAccomplishments.vue";
import HeroBlock from "@/views/MainPage/components/HeroBlock.vue";

export default {
  name: "MainPage",
  components: {HeroBlock, OurAccomplishments, IndSectors},
}
</script>