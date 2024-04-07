<template>
  <div class="container py-3">
    <h1 class="mx-1 mb-5">Today</h1>
    <div class="custom-card-div">
      <router-link :to="{ name: 'Interactive Group', params: { groupId: entry.at(0).id }}"
                   :key="entry.at(0).id"
                   v-for="entry in groupsTeachers.entries()"
                   class="custom-card-div-middle">
        <div class="card shadow-sm custom-card-div-inside">
          <div class="card-body custom-card-inner-body">
            <h2 class="card-title icon-link">{{ entry.at(0).name }}</h2><br>
            <h5 class="card-title icon-link">{{ entry.at(1).name }}</h5>
          </div>
          <img alt="wizard-logo"
               class="card-img shadow-lg wizard-card-img"
               src="../assets/wizard-logo.jpg">
          <div class="card-footer">
            <i class="fas fa-calendar-days mx-1" style="color: #ec0927"></i>
            <h6 class="card-subtitle icon-link">{{ entry.at(0).dateTime }}</h6><br>
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
      groupsTeachers: new Map()
    }
  }, methods: {
    ...home.methods
  }, mounted() {
    this.getInteractiveGroupsAsync()
  }
}
</script>