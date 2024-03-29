<template>
  <div class="container py-3">
    <div class="text-center mb-5">
      <h1 class="h1">Teachers</h1>
    </div>
    <div class="custom-card-div">
      <div v-for="teacher in teachers" 
           :key="teacher.id" 
           class="custom-card-div-middle">
        <div class="card shadow custom-card-div-inside">
          <div class="card-body custom-card-inner-body">
            <h3 class="card-title icon-link">{{ teacher.name }}</h3>
          </div>
          <div class="card-img">
            <img alt="wizard-logo"
                 class="card-img wizard-card-img"
                 src="../assets/wizard-logo.jpg">
          </div>
            <div class="card-footer">
              <h5 class="card-subtitle icon-link">{{ teacher.birthday }}</h5><br>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import teachers from "../scripts/teachers.js";

export default {
  data() {
    return {
      teachers: []
    }
  }, methods: {
    ...teachers.methods
  }, mounted() {
    this.getTeachers()
  }
}
</script>