<template>
  <main class="container py-3">
    <div class="home-header">
      <h1>Today</h1>
    </div>
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
          <img alt="app-logo"
               class="card-img app-card-img"
               src="../assets/vue.svg">
          <div class="card-footer">
            <i class="fas fa-calendar-days mx-1" style="color: #ec0927"></i>
            <h6 class="card-subtitle icon-link">{{ entry.at(0).dateTime }}</h6><br>
          </div>
        </div>
      </router-link>
    </div>
  </main>
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