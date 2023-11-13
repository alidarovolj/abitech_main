<template>
  <div id="contacts" class="py-10 sm:py-24">
    <div class="flex flex-col-reverse sm:block">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.9834251224374!2d76.85627007664084!3d43.209836980992705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836830b210f111%3A0x11c14c21ab78baed!2sABiTech!5e0!3m2!1sru!2skz!4v1698696989863!5m2!1sru!2skz"
          width="100%" height="388" style="border:0;" allowfullscreen="" loading="lazy" class="px-4 sm:px-0"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="container mx-auto px-4 lg:px-0 relative">
        <div class=" sm:w-1/2 lg:w-third sm:absolute top-0 left-0 sm:-translate-y-[80%] lg:-translate-y-[85%]">
          <div class="bg-mainColor h-[46px] rounded-t-lg">
          </div>
          <p class="bg-secondaryColor text-4xl px-7 py-3">
            {{ $t('contactUs.title') }}
          </p>
          <div class="bg-mainColor rounded-b-lg px-7 py-8 text-secondaryColor">
            <p class="text-xl mb-5">ADVANCED BUSINESS TECHNOLOGIES</p>
            <a href="mailto:info@abitech.kz" class="flex items-center gap-2.5 mb-5">
              <img alt="" class="w-[25px] h-[25px]" src="@/assets/img/contacts/mail.png">
              <p class="text-base">info@abitech.kz</p>
            </a>
            <a href="tel:+77717622285" class="flex items-center gap-2.5 mb-5">
              <img alt="" class="w-[25px] h-[25px]" src="@/assets/img/contacts/phone-call.svg">
              <p class="text-base">+7 (771) 762-22-85</p>
            </a>
            <a href="https://www.instagram.com/abitechkz/" class="flex items-center gap-2.5 mb-5">
              <img alt="" class="w-[25px] h-[25px]" src="@/assets/img/contacts/brand-instagram.svg">
              <p class="text-base">Instagram</p>
            </a>
            <a href="https://www.facebook.com/abitechkz/" class="flex items-center gap-2.5 mb-5">
              <img alt="" class="w-[25px] h-[25px]" src="@/assets/img/contacts/brand-facebook.svg">
              <p class="text-base">Facebook</p>
            </a>
            <a href="https://kz.linkedin.com/company/abitechkz" class="flex items-center gap-2.5 mb-5">
              <img alt="" class="w-[25px] h-[25px]" src="@/assets/img/contacts/brand-linkedin.svg">
              <p class="text-base">Linkedin</p>
            </a>
<!--            <a href="https://www.google.com/maps/place/ABiTech/@43.209837,76.8562701,17z/data=!3m1!4b1!4m6!3m5!1s0x38836830b210f111:0x11c14c21ab78baed!8m2!3d43.2098331!4d76.858845!16s%2Fg%2F11h42x8zfr?entry=ttu" class="flex items-center gap-2.5 mb-5">-->
<!--              <img alt="" class="w-[25px] h-[25px]" src="@/assets/img/contacts/map-pin.svg">-->
<!--              <p class="text-base">{{ $t('contactUs.address') }}</p>-->
<!--            </a>-->
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