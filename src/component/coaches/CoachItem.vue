<template>
  <li class="border border-black rounded-2xl p-4 mb-4">
    <h3 class="text-xl my-2">{{fullName}}</h3>
    <h4 class="my-2">{{rate}}$</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"/>
    </div>
    <div class="flex justify-end">
      <base-button link mode="outline" :to="`${$route.path}/${id}/contact`">Contact</base-button>
      <base-button link :to="`${$route.path}/${id}`">Detail</base-button>
    </div>
  </li>
</template>

<script>
import BaseButton from "@/component/ui/BaseButton";
import BaseBadge from "@/component/ui/BaseBadge";
export default {
  components: {BaseBadge, BaseButton},
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      console.log(this.rate)
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>

<style scoped>

</style>
