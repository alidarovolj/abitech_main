<template>
  <div>
    <HeroBlock/>
    <IndSectors/>
    <OurAccomplishments/>
    <ProductsBlock/>
    <Insights/>
  </div>
</template>

<script>
import IndSectors from "@/views/MainPage/components/IndSectors.vue";
import OurAccomplishments from "@/views/MainPage/components/OurAccomplishments.vue";
import HeroBlock from "@/views/MainPage/components/HeroBlock.vue";
import Insights from "@/views/MainPage/components/Insights.vue";
import ProductsBlock from "@/views/MainPage/components/Products.vue";

export default {
  name: "MainPage",
  components: {ProductsBlock, Insights, HeroBlock, OurAccomplishments, IndSectors},
}
</script>