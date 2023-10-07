<template>
  <div>
<!--    <Carousel :itemsToScroll="1" :wrapAround="true" :autoplay="10000">-->
<!--      <Slide v-for="slide in slides" :key="slide">-->
<!--        <div class="carousel__item">-->
<!--          <component :is="slide.component"/>-->
<!--        </div>-->
<!--      </Slide>-->
<!--    </Carousel>-->
    <HeroBlock/>
    <IndSectors />
    <Locations />
    <OurAccomplishments />
    <Insights />
    <Partners />
    <FormBlock/>
    <FooterBlock/>
  </div>
</template>

<script>
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import IndSectors from "@/views/MainPage/components/IndSectors.vue";
import OurAccomplishments from "@/views/MainPage/components/OurAccomplishments.vue";
import Locations from "@/views/MainPage/components/Locations.vue";
import HeroBlock from "@/views/MainPage/components/HeroBlock.vue";
import Insights from "@/views/MainPage/components/Insights.vue";
import Partners from "@/views/MainPage/components/Partners.vue";
import FooterBlock from "@/components/Footer.vue";
import FormBlock from "@/views/MainPage/components/Form.vue";

export default {
  name: "MainPage",
  components: {FormBlock, FooterBlock, Insights, HeroBlock, OurAccomplishments, IndSectors, Locations, Partners,
    Carousel,
    Slide,
    Pagination,
    Navigation,},
  data() {
    return {
      slides: [
        {id: 1, component: 'HeroBlock'},
        {id: 2, component: 'IndSectors'},
        {id: 3, component: 'Locations'},
        {id: 3, component: 'OurAccomplishments'},
        {id: 3, component: 'Insights'},
        {id: 3, component: 'Partners'},
      ],
    };
  },
}
</script>
<style>
.carousel {
  text-align: left;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>