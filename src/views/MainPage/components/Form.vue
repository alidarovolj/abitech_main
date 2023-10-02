<template>
  <div class="py-24 flex items-center justify-center bg-[#F6F6F6]">
    <img src="@/assets/img/form/bg.png" alt="">
    <div class="container mx-auto px-4 lg:px-0"></div>
    
  </div>
</template>

<script>
export default {
  name: "FormBlock",
  data() {
    return {
      currentTheme: localStorage.getItem("theme"),

    };
  },
}
</script>