<template>
  <div>
    <HeroBlock/>
    <IndSectors/>
    <Locations/>
    <OurAccomplishments/>
    <Partners />
  </div>
</template>

<script>
import IndSectors from "@/views/MainPage/components/IndSectors.vue";
import OurAccomplishments from "@/views/MainPage/components/OurAccomplishments.vue";
import Locations from "@/views/MainPage/components/Locations.vue";
import HeroBlock from "@/views/MainPage/components/HeroBlock.vue";
import Partners from "@/views/MainPage/components/Partners.vue";

export default {
  name: "MainPage",
  components: {HeroBlock, OurAccomplishments, IndSectors, Locations, Partners},
}
</script>