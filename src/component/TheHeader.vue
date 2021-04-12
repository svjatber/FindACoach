<template>
  <header class=" w-full box-border h-20 bg-purple-900 flex justify-center items-center">
    <nav class=" box-border flex justify-between items-center w-4/5">
      <h1 class="hidden sm:block">
        <router-link to="/" class="text-white no-underline px-2 leading-10 inline-block border-transparent border hover:border-pink-400 active:border-pink-400">Find A Coach</router-link>
      </h1>
      <ul class="m-0 p-0  flex justify-center items-center list-none">
        <li class="my-2 mx-auto ml-3 ">
          <router-link to="/coaches" class="text-white no-underline px-2 inline-block leading-10 border-transparent border hover:border-pink-400 active:border-pink-400 ">All Coaches</router-link>
        </li>
        <li v-if="isLoggedIn" class="my-2 mx-auto ml-3 ">
          <router-link to="/requests" class="text-white no-underline px-2 inline-block leading-10 border-transparent border hover:border-pink-400 active:border-pink-400 ">Requests</router-link>
        </li>
        <li v-else class="my-2 mx-auto ml-3 ">
          <router-link to="/auth" class="text-white no-underline px-2 inline-block leading-10 border-transparent border hover:border-pink-400 active:border-pink-400 ">Login</router-link>
        </li>
        <li v-if="isLoggedIn" class="my-2 mx-auto ml-3">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import BaseButton from "@/component/ui/BaseButton";
export default {
  components: {BaseButton},
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isAuthenticated']
    }
  },
  methods: {
   logout() {
     this.$store.dispatch('auth/logout')
     window.location.href = '/auth'
    }
  }
}
</script>

<style scoped>
.logo{
  color: red
}

a.active {
  border: 1px solid #f391e3;
}
</style>
