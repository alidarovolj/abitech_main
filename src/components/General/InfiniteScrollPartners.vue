<template>
  <div class="relative w-full h-full">
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-4/5">
      <div class="relative h-full">
        <div class="scroll-parent">
          <div class="scroll-container">
            <div class="scroll-element primary">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/1.png"
                  alt=""
              />
            </div>
            <div class="scroll-element secondary">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/2.png"
                  alt=""
              />
            </div>
            <div class="scroll-element third">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/3.png"
                  alt=""
              />
            </div>
            <div class="scroll-element primary">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/1.png"
                  alt=""
              />
            </div>
            <div class="scroll-element secondary">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/2.png"
                  alt=""
              />
            </div>
            <div class="scroll-element third">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/3.png"
                  alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfiniteScroll",
};
</script>

<style scoped>
.scroll-parent {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.scroll-container {
  width: 100%; /* Увеличьте это значение, чтобы вместить все элементы */
  height: 100%;
  animation: scroll 5s linear infinite; /* 4 элемента * 3с = 12s */
}

.scroll-element {
  width: max-content;
  margin-right: 70px;
  height: 100%;
  float: left;
}

@keyframes scroll {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
