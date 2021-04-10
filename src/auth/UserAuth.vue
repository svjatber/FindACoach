<template>
  <base-dialog :show="!!error" title="An error occurred" @close="errorHandle">
    {{error}}
  </base-dialog>
  <base-dialog fixed :show="isLoading" title="Authenticating...">
    <base-spinner></base-spinner>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitForm" class="m-4 border border-gray-400 rounded-2xl p-4">
      <div class="my-2 mx-0">
        <label for="email" class="font-bold mb-2 block">E-mail</label>
        <input type="text" id="email" v-model="email" class="block w-full p-1 border border-gray-400 focus:border-purple-900 bg-white-100 outline-none">
      </div>
      <div class="form-control">
        <label for="password" class="font-bold mb-2 block">Password</label>
        <input type="password" id="password" v-model="password" class="block w-full p-1 border border-gray-400 focus:border-purple-900 bg-white-100 outline-none">
      </div>
      <p v-if="!formIsValid" class="text-red-900">Please enter a valid email and password</p>
      <div class="mt-4">
        <base-button type="submit">{{submitButtonCaption}}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{switchModeButtonCaption}}</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from "@/component/ui/BaseButton";
import BaseCard from "@/component/ui/BaseCard";
import BaseSpinner from "@/component/ui/BaseSpinner";
import BaseDialog from "@/component/ui/BaseDialog";

export default {
  components: {
    BaseCard,
    BaseButton,
    BaseSpinner,
    BaseDialog
  },
  data(){
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
    }
  },
  computed: {
    submitButtonCaption() {
      if(this.mode === 'login'){
        return 'Login'
      }else{
        return 'Sign Up'
      }
    },
    switchModeButtonCaption() {
      if(this.mode === 'login'){
        return 'Sign Up'
      }else{
        return 'Login'
      }
    }
  },
  methods: {
   async submitForm() {
      this.formIsValid = true
     if(this.email === '' || !this.email.includes('@') || !this.password.length > 6 ){
       this.formIsValid = false
       return
     }

     try{
       this.isLoading = true
       if(this.mode === 'login'){
         await this.$store.dispatch('auth/login', {email: this.email, password: this.password})
       }
       if(this.mode === 'signup'){
         await this.$store.dispatch('auth/signup', {email: this.email, password: this.password})

       }
       await this.$router.replace('/coaches')
       this.isLoading = false
     }catch (e) {
        this.isLoading = false
       this.error = e.message || 'Failed to authenticate'
     }
   },
    switchAuthMode() {
      if(this.mode === 'login'){
        this.mode = 'signup'
        return
      }
      if(this.mode === 'signup'){
        this.mode = 'login'
      }
    },
    errorHandle() {
     this.error = null
    }
  }
}
</script>

<style scoped>

</style>
