<template>
  <div class="container py-5">
    <div class="">
      <div class="text-center mb-5">
        <h1 class="h1">Today</h1>
      </div>
      <div class="custom-card-div">
        <div v-for="group in interactiveGroups"
             :key="group.id"
             class="custom-card-div-middle">
          <router-link :to="{ name: 'Interactive Group', params: { groupId: group.id }}">
            <div class="card shadow custom-card-div-inside">
              <div class="card-body">
                <div>
                  <h2 class="card-title icon-link">{{ group.name }}</h2>
                </div>
                <img alt="wizard-logo"
                     class="card-img"
                     src="../assets/wizard-logo.jpg"
                     :style="{borderRadius: '5%'}">
                <h4 class="card-subtitle icon-link pb-1">{{ group.daysOfTheWeek }}</h4><br>
                <h5 class="card-subtitle icon-link">{{ group.time }}</h5>
              </div>
            </div>
          </router-link>
        </div>  
      </div>
      
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