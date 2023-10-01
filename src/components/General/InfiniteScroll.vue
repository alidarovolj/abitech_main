<template>
  <div class="relative w-full h-full">
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-4/5">
      <div class="relative h-full">
        <div
          class="z-30 absolute left-0 top-0 w-full h-full"
          style="
            background: linear-gradient(
              90deg,
              #1e3d37 4.45%,
              rgba(26, 58, 46, 0.58) 48.11%,
              #1e3d37 96.98%
            );
          "
        ></div>
        <div class="scroll-parent">
          <div class="scroll-container">
            <div class="scroll-element primary">
              <img
                class="w-full h-full"
                src="@/assets/img/heroBlock/1.png"
                alt=""
              />
            </div>
            <div class="scroll-element secondary">
              <img
                class="w-full h-full"
                src="@/assets/img/heroBlock/2.png"
                alt=""
              />
            </div>
            <div class="scroll-element third">
              <img
                class="w-full h-full"
                src="@/assets/img/heroBlock/3.png"
                alt=""
              />
            </div>
            <div class="scroll-element fourth">
              <img
                class="w-full h-full"
                src="@/assets/img/heroBlock/4.png"
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
  width: 100vw;
  height: 100%;
  overflow: hidden;
}

.scroll-container {
  width: 400%; /* Увеличьте это значение, чтобы вместить все элементы */
  height: 100%;
  animation: scroll 12s linear infinite; /* 4 элемента * 3с = 12s */
}

.scroll-element {
  width: 25%;
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
