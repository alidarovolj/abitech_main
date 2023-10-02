<template>
  <div>
    <HeroBlock/>
    <IndSectors/>
    <OurAccomplishments/>
    <Insights/>
  </div>
</template>

<script>
import IndSectors from "@/views/MainPage/components/IndSectors.vue";
import OurAccomplishments from "@/views/MainPage/components/OurAccomplishments.vue";
import HeroBlock from "@/views/MainPage/components/HeroBlock.vue";
import Insights from "@/views/MainPage/components/Insights.vue";

export default {
  name: "MainPage",
  components: {Insights, HeroBlock, OurAccomplishments, IndSectors},
}
</script>