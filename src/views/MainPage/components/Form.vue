<template>
  <div id="contacts" class="py-24">
    <div class="container mx-auto px-4 lg:px-0">
      <img alt="" class="absolute" src="@/assets/img/form/bg.png">
      <div class="relative z-10">
        <div class="mb-16">
          <h2 class="text-4xl font-semibold mb-[6px]">{{ $t('form.title') }}</h2>
          <p class="text-xl">{{ $t('form.content') }}</p>
        </div>
        <form @subrelativemit.prevent="sendForm">
          <div class="flex flex-col sm:flex-row gap-5 mb-5">
            <label class="flex flex-col w-full sm:w-half" for="name">
              <p class="mb-4 text-2xl">{{ $t('form.name.title') }}*</p>
              <input id="name"
                     class="bg-transparent border-b border-[#1A3A2E] outline-none px-5 py-3 text-[18px] text-[#757575]"
                     :placeholder="$t('form.name.placeholder')" type="text">
            </label>
            <label class="flex flex-col w-full sm:w-half" for="title">
              <p class="mb-4 text-2xl">{{ $t('form.subject.title') }}*</p>
              <input id="title"
                     class="bg-transparent border-b border-[#1A3A2E] outline-none px-5 py-3 text-[18px] text-[#757575]"
                     :placeholder="$t('form.subject.placeholder')" type="text">
            </label>
          </div>
          <div class="flex flex-col sm:flex-row gap-5 mb-12">
            <label class="flex flex-col w-full sm:w-half" for="name">
              <p class="mb-4 text-2xl">{{ $t('form.email.title') }}*</p>
              <input id="name"
                     class="bg-transparent border-b border-[#1A3A2E] outline-none px-5 py-3 text-[18px] text-[#757575]"
                     :placeholder="$t('form.email.placeholder')" type="text">
            </label>
            <label class="flex flex-col w-full sm:w-half" for="title">
              <p class="mb-4 text-2xl">{{ $t('form.phone.title') }}*</p>
              <input id="title"
                     class="bg-transparent border-b border-[#1A3A2E] outline-none px-5 py-3 text-[18px] text-[#757575]"
                     :placeholder="$t('form.phone.placeholder')" type="text">
            </label>
          </div>
          <button class="py-4 px-8 bg-mainColor w-full lg:w-max text-white rounded-lg text-2xl" type="submit">{{ $t('form.button') }}</button>
        </form>
      </div>
    </div>
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