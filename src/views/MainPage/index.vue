<template>
  <div>
    <IndSectors/>
    <OurAccomplishments/>
  </div>
</template>

<script>
import IndSectors from "@/views/MainPage/components/IndSectors.vue";
import OurAccomplishments from "@/views/MainPage/components/OurAccomplishments.vue";

export default {
  name: "MainPage",
  components: {OurAccomplishments, IndSectors},
}
</script>