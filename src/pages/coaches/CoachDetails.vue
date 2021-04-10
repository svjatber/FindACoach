<template>
  <base-card>
    <section class="mb-4">
      <h2 class="font-bold text-2xl">{{fullName}}</h2>
      <h3>${{rate}}</h3>
    </section>
    <section class="mb-4">
      <header class="flex justify-between">
        <h2 class="mb-4 text-2xl">Interested? Reach out now</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </section>
    <section class="mb-4">
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area" />
      <p class="mt-4 text-xl">{{description}}</p>
    </section>
  </base-card>
</template>

<script>

import BaseBadge from "@/component/ui/BaseBadge";
import BaseButton from "@/component/ui/BaseButton";
import BaseCard from "@/component/ui/BaseCard";

export default {
  props: ['id'],
  components: {
    BaseCard,
    BaseButton,
    BaseBadge
  },
  data() {
    return {
      selectedCoach: null
    }
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
    },
    rate() {
      return this.selectedCoach.hourlyRate
    },
    contactLink(){
      return this.$route.path + '/contact'
    },
    areas(){
      return this.selectedCoach.areas
    },
    description(){
      return this.selectedCoach.description
    }

  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(c => c.id === this.id)
  }

}
</script>

<style scoped>

</style>
