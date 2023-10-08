<template>
  <div class="relative w-full h-full">
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-4/5">
      <div class="relative h-full flex items-center">
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
            <!-- Добавьте отступ в 30px для каждого элемента -->
            <div class="scroll-element tertiary">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/3.png"
                  alt=""
              />
            </div>
            <div class="scroll-element quaternary">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/1.png"
                  alt=""
              />
            </div>
            <div class="scroll-element quinary">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/2.png"
                  alt=""
              />
            </div>
            <!-- Дублируйте элементы с отступом в 30px -->
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
            <div class="scroll-element tertiary">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/3.png"
                  alt=""
              />
            </div>
            <div class="scroll-element quaternary">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/1.png"
                  alt=""
              />
            </div>
            <div class="scroll-element quinary">
              <img
                  class="w-max h-1/2"
                  src="@/assets/img/partners/2.png"
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
.scroll-container {
  width: 200%;
  overflow: hidden;
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: scroll 30s linear infinite; /* Увеличьте продолжительность анимации */
}

.scroll-element {
  display: inline-block;
  width: calc(10% - 30px);
  margin-right: 30px;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
