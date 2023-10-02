<template>
  <div>
    <HeroBlock/>
    <IndSectors/>
    <Locations/>
    <OurAccomplishments/>
    <Insights/>
    <Partners />
  </div>
</template>

<script>
import IndSectors from "@/views/MainPage/components/IndSectors.vue";
import OurAccomplishments from "@/views/MainPage/components/OurAccomplishments.vue";
import Locations from "@/views/MainPage/components/Locations.vue";
import HeroBlock from "@/views/MainPage/components/HeroBlock.vue";
import Insights from "@/views/MainPage/components/Insights.vue";
import Partners from "@/views/MainPage/components/Partners.vue";

export default {
  name: "MainPage",
  components: {Insights, HeroBlock, OurAccomplishments, IndSectors, Locations, Partners},
}
</script>