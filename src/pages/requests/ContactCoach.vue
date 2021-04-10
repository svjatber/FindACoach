<template>
  <form @submit.prevent="submitForm" class="m-4 border border-gray-400 rounded-2xl p-4">
    <div class="my-2 mx-0">
      <label for="email" class="font-bold mb-2 block">Email</label>
      <input type="text" id="email" v-model.trim="email" class="block w-full p-1 border border-gray-400 focus:border-purple-900 bg-white-100 outline-none">
    </div>
    <div class="my-2 mx-0">
      <label for="message" class="font-bold mb-2 block">Message</label>
      <input type="text" id="message" v-model.trim="message" class="block w-full p-1 border border-gray-400 focus:border-purple-900 bg-white-100 outline-none">
    </div>
    <div class="text-center my-2">
      <p v-if="!formsIsValid" class="text-red-900">Please enter a valid email and message</p>
      <base-button type="submit">Send Message</base-button>
    </div>
  </form>
</template>

<script>
import BaseButton from "@/component/ui/BaseButton";

export default {
  components: {
    BaseButton
  },
  data() {
    return {
      email: '',
      message: '',
      formsIsValid: true
    }
  },
  methods: {
     submitForm() {
      try{
        if(this.email === '' || !this.email.includes('@') || !this.message.length > 2 ){
          this.formsIsValid = false
          return
        }
         this.$store.dispatch('requests/contactCoach', {
          email: this.email,
          message: this.message,
          coachId: this.$route.params.id
        })
        this.$router.push('/requests')
      }catch (e) {
        console.log(e.message)
      }
    }


  }
}
</script>

<style scoped>

</style>
