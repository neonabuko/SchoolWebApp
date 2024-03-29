<template>
  <div class="container py-5">
    <div class="text-center mb-4">
      <h1 class="h1">Teachers</h1>
    </div>
    <div class="row">
      <div v-for="teacher in teachers" :key="teacher.id" class="col-lg-2 col-md-4 col-sm-6 m-3 custom-card-div">
        <div class="card mb-3 shadow custom-card-div-inside">
          <div class="card-body">
            <div class="custom-card-inner-body">
              <h3 class="card-title icon-link">{{ teacher.name }}</h3>
            </div>
            <img alt="wizard-logo" class="card-img" src="../assets/wizard-logo.jpg"
                 :style="{borderRadius: '5%'}">
            <div class="card-footer rounded-3">
              <h5 class="card-subtitle icon-link">{{ teacher.birthday }}</h5><br>
            </div>
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