<template>
  <div>
    <HeroBlock/>
    <IndSectors/>
    <Locations/>
    <OurAccomplishments/>
    <ProductsBlock/>
    <Partners/>
    <Insights/>
    <ContactsBlock/>
    <FormBlock/>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";

import 'vue3-carousel/dist/carousel.css';
import IndSectors from "@/views/MainPage/components/IndSectors.vue";
import OurAccomplishments from "@/views/MainPage/components/OurAccomplishments.vue";
import Locations from "@/views/MainPage/components/Locations.vue";
import HeroBlock from "@/views/MainPage/components/HeroBlock.vue";
import Insights from "@/views/MainPage/components/Insights.vue";
import ProductsBlock from "@/views/MainPage/components/Products.vue";
import Partners from "@/views/MainPage/components/Partners.vue";
import FormBlock from "@/views/MainPage/components/Form.vue";
import ContactsBlock from "@/views/MainPage/components/Contacts.vue";
import {useI18n} from "vue-i18n";

export default {
  name: "MainPage",
  components: {
    ContactsBlock,
    FormBlock,
    Insights,
    HeroBlock,
    OurAccomplishments,
    IndSectors,
    Locations,
    Partners,
    ProductsBlock
  },
  setup() {
    const {locale, t} = useI18n(); // Инъекция зависимости i18n

    if (locale.value === 'ru') {
      useMeta({title: "Главная"});
    } else if (locale.value === 'en') {
      useMeta({title: "Main Page"});
    } else {
      useMeta({title: "Басты бет"});
    }
  },
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