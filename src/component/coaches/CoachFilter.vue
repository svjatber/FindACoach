<template>
  <base-card>
    <div class="w-60 my-2 mx-auto">
      <h2 class="text-center">Find Tour Coach</h2>
      <div class="my-0 mx-auto flex justify-center">
        <span>
      <input type="checkbox" id="frontend" checked @change="setFilter">
      <label for="frontend">Frontend</label>
    </span>
        <span>
      <input type="checkbox" id="backend"  checked @change="setFilter">
      <label for="backend">Backend</label>
    </span>
        <span>
      <input type="checkbox" id="career" checked @change="setFilter">
      <label for="career">Career</label>
    </span>
      </div>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "@/component/ui/BaseCard";

export default {
  components: {
    BaseCard
  },
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      }
    }
  },
  methods: {
    setFilter(event){
      const inputId = event.target.id;
      const isActive = event.target.checked
      const updateFilters = {
        ...this.filters,
        [inputId]: isActive
      }
      this.filters = updateFilters
      this.$emit('change-filter', updateFilters)
    }
  }
}
</script>

<style scoped>

</style>
