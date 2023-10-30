<template>
  <div class="container mx-auto px-4 lg:px-0 py-10 mt-10">
    <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">{{ $t('form.heading') }}</h2>
    <div class="block lg:flex rounded-2xl bg-white dark:bg-darkBgColor text-blackColor dark:text-white">
      <div class="w-full lg:w-1/3">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.9834251224374!2d76.85627007664084!3d43.209836980992705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836830b210f111%3A0x11c14c21ab78baed!2sABiTech!5e0!3m2!1sru!2skz!4v1698696989863!5m2!1sru!2skz"
            width="100%" height="649" style="border:0;" allowfullscreen="" loading="lazy" class="rounded-t-xl lg:rounded-tr-none lg:rounded-l-2xl"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="w-full lg:w-2/3 p-7 flex flex-col justify-center">
        <h3 class="text-2xl font-semibold mb-3">{{ $t('form.header') }}</h3>
        <p class="text-sm mb-10">{{ $t('form.text') }}</p>
        <form action="" @submit.prevent="sendForm">
          <div class="mb-4">
            <p class="mb-1">{{ $t('form.email.name') }}</p>
            <input
                v-model="form.email"
                :class="{
                      'border-red-500': v$.form.email.$errors.length,
                    }"
                class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                :placeholder="$t('form.email.placeholder')" type="text">
          </div>
          <div class="mb-4">
            <p class="mb-1">{{ $t('form.name.name') }}</p>
            <input
                v-model="form.name"
                :class="{
                      'border-red-500': v$.form.name.$errors.length,
                    }"
                class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                :placeholder="$t('form.name.placeholder')" type="text">
          </div>
          <div class="mb-4">
            <p class="mb-1">{{ $t('form.phone.name') }}</p>
            <input
                v-model="form.phone"
                :class="{
                      'border-red-500': v$.form.phone.$errors.length,
                    }"
                class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                :placeholder="$t('form.phone.placeholder')" type="text">
          </div>
          <div class="mb-4">
            <p class="mb-1">{{ $t('form.note.name') }}</p>
            <textarea
                v-model="form.note"
                class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                :placeholder="$t('form.note.placeholder')" type="text"/>
          </div>
          <div class="flex flex-col lg:flex-row items-center">
            <div class="flex items-center mb-3 lg:mb-0">
              <input v-model="form.agreement" :class="{
                      'border-red-500': v$.form.agreement.$errors,
                    }"
                     class="mr-2"
                     type="checkbox">
              <p :class="{ 'text-red-500' : v$.form.agreement.$error }" class="text-xs">{{ $t('form.agreement') }}</p>
            </div>
            <button class="bg-mainColor text-white px-4 py-2 rounded-md whitespace-nowrap" type="submit">
              {{ $t('form.button') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {required, email, sameAs} from "@vuelidate/validators";
import {inject} from "vue";
import {useVuelidate} from "@vuelidate/core";
import {mapActions} from "vuex";

export default {
  name: "LeaveMessage",
  setup() {
    const toast = inject('notify');
    return {
      v$: useVuelidate(),
      toast
    };
  },
  data() {
    return {
      form: {
        email: null,
        name: null,
        phone: null,
        note: null,
        agreement: false,
      }
    }
  },
  validations() {
    return {
      form: {
        email: {required, email},
        name: {required},
        phone: {required},
        agreement: {
          checked: sameAs(true)
        }
      },
    };
  },
  methods: {
    ...mapActions(['createFeedback']),
    async sendForm() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.toast(false, "Не все поля заполнены");
        return;
      }
      await this.createFeedback(this.form)
          .then(() => {
            this.loading = false;
            this.toast(true, "Письмо успешно отправлено");
            this.form.email = null
            this.form.name = null
            this.form.note = null
            this.form.phone = null
            this.form.agreement = false
            this.v$.$reset();
          })
          .catch((error) => {
            if (error.response.data.errors) {
              if (Object.keys(error.response.data.errors).length > 0) {
                Object.values(error.response.data.errors).forEach((err) => {
                  this.toast(false, this.$t(err[0]))
                })
              }
            } else {
              this.toast(false, this.$t(error.response.data.message))
            }
          }).finally(() => {
            this.loading = false;
          })
    },
  }
}
</script>