<template>
  <div class="py-24 flex items-center justify-center  bg-[#F6F6F6]">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="relative">
        <img alt="" class="" src="@/assets/img/form/bg.png">
        <div class="absolute top-0">
          <div class="mb-16">
            <h2 class="text-4xl font-semibold">How can we help you?</h2>
            <p class="text-lg">Thank you for your interest in the services of ABItech. Please take some time to complete
              this form. Fields marked with an asterisk (*) are mandatory.</p>
          </div>
          <form @submit.prevent="sendForm">
            <div class="flex gap-5 mb-5">
              <label class="flex flex-col w-half" for="name">
                <p class="mb-4 text-2xl">Name*</p>
                <input id="name" class="bg-transparent border-b border-[#1A3A2E] outline-none px-5 py-3 text-base text-[#757575]" placeholder="Type your name" type="text">
              </label>
              <label class="flex flex-col w-half" for="title">
                <p class="mb-4 text-2xl">Title*</p>
                <input id="title" class="bg-transparent border-b border-[#1A3A2E] outline-none px-5 py-3 text-base text-[#757575]" placeholder="Title" type="text">
              </label>
            </div>
            <div class="flex gap-5 mb-12">
              <label class="flex flex-col w-half" for="name">
                <p class="mb-4 text-2xl">E-mail*</p>
                <input id="name" class="bg-transparent border-b border-[#1A3A2E] outline-none px-5 py-3 text-base text-[#757575]" placeholder="Type your email" type="text">
              </label>
              <label class="flex flex-col w-half" for="title">
                <p class="mb-4 text-2xl">Your phone number*</p>
                <input id="title" class="bg-transparent border-b border-[#1A3A2E] outline-none px-5 py-3 text-base text-[#757575]" placeholder="Type your phone number" type="text">
              </label>
            </div>
            <button class="py-4 px-8 bg-mainColor text-white rounded-lg" type="submit">Send your request</button>
          </form>
        </div>
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