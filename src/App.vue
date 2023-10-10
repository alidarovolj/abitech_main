<template>
  <metainfo>
    <template #title="{ content }">{{
        content ? `${content} | Abitech` : `SITE_NAME`
      }}
    </template>
  </metainfo>
  <div class="relative">
    <DefaultLayout>
      <router-view :key="$route.fullPath"></router-view>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/default.vue";
import "vue3-toastify/dist/index.css";
import { useMeta } from "vue-meta";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
  setup() {
    useMeta({
      title: "Abitech",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
  beforeCreate() {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
};
</script>
