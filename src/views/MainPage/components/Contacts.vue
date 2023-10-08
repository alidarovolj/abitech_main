<template>
  <div class="py-24 bg-[#F6F6F6]">
    <iframe
        frameborder="0"
        height="388"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A07ec4f2a037d035027265a8e6e3cd7865c0a2ca3bf2483236a04f93046a9e286&amp;source=constructor"
        width="100%">
    </iframe>
    <div class="container mx-auto px-4 lg:px-0 relative">
      <div class="w-third absolute top-0 left-0 -translate-y-[89%]">
        <div class="bg-mainColor h-[46px] rounded-t-lg">
        </div>
        <p class="bg-secondaryColor text-4xl px-7 py-3">Contact us</p>
        <div class="bg-mainColor rounded-b-lg px-7 py-8 text-secondaryColor">
          <p class="text-xl mb-5">TOO "ADVANCED BUSINESS TECHNOLOGIES "
            info@abitech.kz</p>
          <div class="flex items-center gap-2.5 mb-5">
            <img alt="" src="@/assets/img/contacts/phone-call.svg">
            <p class="text-base">+7 (771) 762-22-85</p>
          </div>
          <div class="flex items-center gap-2.5 mb-5">
            <img alt="" src="@/assets/img/contacts/brand-instagram.svg">
            <p class="text-base">INSTAGRAM - abitechkz</p>
          </div>
          <div class="flex items-center gap-2.5 mb-5">
            <img alt="" src="@/assets/img/contacts/brand-facebook.svg">
            <p class="text-base">FACEBOOK - ABiTech</p>
          </div>
          <div class="flex items-center gap-2.5 mb-5">
            <img alt="" src="@/assets/img/contacts/brand-linkedin.svg">
            <p class="text-base">LINKEDIN - abitechkz</p>
          </div>
          <div class="flex items-center gap-2.5 mb-5">
            <img alt="" src="@/assets/img/contacts/map-pin.svg">
            <p class="text-base">050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsBlock",
  data() {
    return {
      currentTheme: localStorage.getItem("theme"),
    };
  },
}
</script>