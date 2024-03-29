<template>
  <div class="container py-3">
    <h1 class="mx-1 mb-5">Today</h1>
    <div class="custom-card-div">
      <router-link :to="{ name: 'Interactive Group', params: { groupId: group.id }}"
                   :key="group.id"
                   class="custom-card-div-middle"
                   v-for="group in interactiveGroups">
        <div class="card shadow-sm custom-card-div-inside">
          <div class="card-body custom-card-inner-body">
            <h2 class="card-title icon-link">{{ group.name }}</h2>
          </div>
          <img alt="wizard-logo"
               class="card-img shadow-lg wizard-card-img"
               src="../assets/wizard-logo.jpg">
          <div class="card-footer">
            <i class="fas fa-calendar-days mx-1" style="color: #ec0927"></i>
            <h6 class="card-subtitle icon-link">{{ group.daysOfTheWeek.toUpperCase() }}</h6><br>
            <i class="fas fa-clock mx-1" style=""></i>
            <h6 class="card-subtitle icon-link">{{ group.time }}</h6>
          </div>
        </div>
      </router-link>
    </div>
  </div>

</template>

<script>
import home from "../scripts/home.js";

export default {
  data() {
    return {
      interactiveGroups: []
    }
  }, methods: {
    ...home.methods
  }, mounted() {
    this.getInteractiveGroups()
  }
}
</script>