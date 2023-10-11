<template>
  <select
      v-model="currentLang"
      class="cursor-pointer w-max bg-mainColor p-2 text-white rounded-lg border border-white"
      :class="{ '!bg-white !text-mainColor !border-mainColor' : $route.name === 'SectorPage' }" name="" id=""
      @change="switchLocale($event)"
  >
    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.value" class="px-5 py-2">
      {{ lang.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  beforeCreate() {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      this.$i18n.locale = savedLocale;
    } else {
      localStorage.setItem("locale", "ru");
    }
  },
  methods: {
    switchLocale(event) {
      localStorage.setItem("locale", event.target.value);
      this.$i18n.locale = event.target.value;
    },
  },
  data() {
    return {
      currentLang: localStorage.getItem("locale"),
      langs: [
        {
          id: 1,
          value: "ru",
          title: "RU",
        },
        {
          id: 2,
          value: "en",
          title: "EN",
        },
        {
          id: 3,
          value: "kz",
          title: "KZ",
        },
      ],
    };
  }
}
</script>