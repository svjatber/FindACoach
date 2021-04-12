<template>
  <base-dialog :show="!!error" title="An error occurred" @close="handleError">
    <p>{{error}}</p>
  </base-dialog>
  <section>
   <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <base-card>
    <section>
      <div class="flex justify-between m-6">
        <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
        <base-button v-if="!isLoggedIn" link to="/auth">Login</base-button>
        <base-button link="true" to="/register" v-if="isLoggedIn && !isCoach && !isLoading" >Register Coach</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner />
      </div>
      <ul v-else-if="hasCoaches" class="list-none m-6">
        <coach-item v-for="coach in filterCoach"
                    :key="coach.id"
                    :id="coach.id"
                    :firstName="coach.firstName"
                    :lastName="coach.lastName"
                    :rate="coach.hourlyRate"
                    :areas="coach.areas"
        />
      </ul>
      <h3 v-else>Not Coaches</h3>
    </section>
  </base-card>
</template>

<script>
import CoachItem from "@/component/coaches/CoachItem";
import BaseButton from "@/component/ui/BaseButton";
import CoachFilter from "@/component/coaches/CoachFilter";
import BaseSpinner from "@/component/ui/BaseSpinner";
import BaseDialog from "@/component/ui/BaseDialog";
export default {
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
          frontend: true,
          backend: true,
          career: true
      }
    }
  },
  components: {
    BaseSpinner,
    BaseButton,
    CoachItem,
    CoachFilter,
    BaseDialog
  },
  computed: {
    isLoggedIn(){
      console.log(this.$store.getters['auth/isAuthenticated'])
      return this.$store.getters['auth/isAuthenticated']
    },
    filterCoach() {
      const coaches =  this.$store.getters['coaches/coaches']
      return coaches.filter(c => {
              if(this.activeFilters.frontend && c.areas.includes('frontend')){

                return true
              }
              if(this.activeFilters.backend && c.areas.includes('backend')){

                return true
              }
              if(this.activeFilters.career && c.areas.includes('career')){

                return true
              }
              return false
            })
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']
    },
    isCoach() {
      return !this.isLoading && this.$store.getters['coaches/isCoach']
    }
  },
  created() {
    this.loadCoaches()
  },
  methods: {
    setFilters(updatesFilter){
      this.activeFilters = updatesFilter
    },
    async loadCoaches(refresh = false){
      this.isLoading = true
      try {
        await this.$store.dispatch('coaches/loadCoaches', {refresh})
      }catch (e) {
        this.error = e.message || 'Something went wrong'
      }
      this.isLoading = false
    },
    handleError() {
      this.error = null
    }
  }
}

</script>
<style scoped>

</style>


