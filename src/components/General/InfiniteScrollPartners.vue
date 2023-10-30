<template>
  <div class="relative w-full h-full"
       x-data="{ ul: null }"
       x-on:loaded="
      ul = $refs.logos;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    ">
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-4/5">
      <div class="relative h-full flex">
        <div
            class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/1.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/2.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/3.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/4.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/5.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/6.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/1.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/2.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/3.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/4.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/5.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/6.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/1.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/2.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/3.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/4.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/5.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/6.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/1.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/2.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/3.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/4.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/5.png"
                />
              </div>
            </li>
            <li>
              <div class="colored-image">
                <img
                    alt=""
                    src="@/assets/img/partners/green/6.png"
                />
              </div>
            </li>
          </ul>
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

<style>
ul li img {
  object-fit: contain;
  width: auto;
  height: 100px;
}
</style>