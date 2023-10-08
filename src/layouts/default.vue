<template>
  <div class="overflow-x-hidden">
    <Header/>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header
  }
};
</script>
  