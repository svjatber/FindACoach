<template>
  <section>
    <base-card>
      <h2 class="text-center font-bold my-2">Register as a coach now</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>

import CoachForm from "@/component/coaches/CoachForm";

export default {
  components: {
    CoachForm
  },
  methods:{
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data)
      this.$router.replace('/coaches')
    }
  }
}
</script>

<style scoped>

</style>
