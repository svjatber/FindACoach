<template>
  <base-dialog :show="!!error" title="An error occurred" @close="handleError">
    <p>{{error}}</p>
  </base-dialog>
  <section>
    <base-card>
      <header class="text-center font-bold">
        <h2>Requests Received</h2>
      </header>
      <base-spinner v-if="isLoading && !hasRequests"/>
      <ul v-else-if="hasRequests" class="list-none my-8 mx-auto max-w-md ">
       <request-item v-for="request in receivedRequests"
        :key="request.id"
        :email="request.userEmail"
        :message="request.message"
       />
      </ul>
      <h3 v-else class="text-center">You haven't received any requests yet</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from "@/component/reguests/RequestItem";
import BaseDialog from "@/component/ui/BaseDialog";
import BaseSpinner from "@/component/ui/BaseSpinner";
import BaseCard from "@/component/ui/BaseCard";

export default {
name: "RequestReceived",
  components: {
    RequestItem,
    BaseDialog,
    BaseSpinner,
    BaseCard
  },
  data() {
    return{
      isLoading: false,
      requests: [],
      error: null
    }
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },
  created() {
    this.loadRequests()
  },
  methods: {
    async loadRequests() {
      this.isLoading = true
      try{
        await this.$store.dispatch('requests/fetchRequests')
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
