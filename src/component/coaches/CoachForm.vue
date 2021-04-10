<template>
  <form @submit.prevent="submitForm" class="m-4 border border-gray-400 rounded-2xl p-4">
    <div class="my-2 mx-0">
      <label for="firstName" class="font-bold mb-2 block">First Name</label>
      <input type="text" id="firstName" v-model.trim="firstName" class="block w-full p-1 border border-gray-400 focus:border-purple-900 bg-white-100 outline-none">
    </div>
    <div class="my-2 mx-0">
      <label for="lastName" class="font-bold mb-2 block" >First Name</label>
      <input type="text" id="lastName" v-model.trim="lastName" class="block w-full p-1 border border-gray-400 focus:border-purple-900 bg-white-100 outline-none">
    </div>
    <div class="my-2 mx-0">
      <label for="description" class="font-bold mb-2 block">Description</label>
      <textarea id="description" rows="5" v-model.trim="description" class="block w-full p-1 border border-gray-400 focus:border-purple-900 bg-white-100 outline-none"/>
    </div>
    <div class="my-2 mx-0">
      <label for="rate" class="font-bold mb-2 block">Rate</label>
      <input type="number" id="rate" v-model="rate" class="block w-full p-1 border border-gray-400 focus:border-purple-900 bg-white-100 outline-none">
    </div>
    <div class="my-2 mx-0">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" class="font-normal inline mt-0 mr-0 mb-0 ml-2 focus: outline-purple">
        <label for="frontend" class="ml-2">Front-end</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas" class="font-normal inline mt-0 mr-0 mb-0 ml-2">
        <label for="backend" class="ml-2">backend</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas" class="font-normal inline mt-0 mr-0 mb-0 ml-2">
        <label for="career" class="ml-2">Career</label>
      </div>
    </div>
    <p v-if="isInvalid" class="text-red-900">Please enter a valid email and password</p>
    <base-button type="submit">Register</base-button>
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
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
      isInvalid: false
    }
  },
  methods: {
    submitForm() {
      this.isInvalid = false
      if(!this.firstName || this.firstName === ''){
        this.isInvalid = true
        return
      }
      if(!this.lastName || this.lastName === ''){
        this.isInvalid = true
        return
      }
      if(!this.description || this.description === ''){
        this.isInvalid = true
        return
      }
      if(!this.rate || this.rate === 0){
        this.isInvalid = true
        return
      }
      if(!this.areas || this.areas === []){
        this.isInvalid = true
        return
      }
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        rate: this.rate,
        areas: this.areas
      }
      this.$emit('save-data', formData)
    }
  }
}
</script>

<style scoped>

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}


.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
