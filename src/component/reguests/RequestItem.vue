<template>
  <li class="border border-black rounded-2xl p-4 mb-4">
    <div>
      <a :href="emailLink" class="text-purple-900 no-underline font-bold hover: text-pink-800 active: text-pink-800">{{email}}</a>
      <p class="mt-6">{{message}}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      return 'mail:' + this.email
    }
  }
}

</script>

<style scoped>

</style>
