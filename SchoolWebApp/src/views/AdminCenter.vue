<template>
  <main class="container py-3">
    <div class="admin-center-header">
        <h1>Admin Center</h1>
      </div>
    <div class="custom-card-div">
      <div v-for="name in actions" :key="name" class="custom-card-div-middle">
        <router-link :to="{ name: 'MainTable', params: { entityId: actions.indexOf(name) } }">
          <div class="card shadow-sm custom-card-div-inside">
            <div class="card-body custom-card-inner-body">
              <h4 class="card-title icon-link">{{ name }}</h4>
            </div>
            <div class="card-img">
              <img alt="app-logo" class="card-img app-card-img" src="../assets/vue.svg">
            </div>
            <div class="card-footer text-center">
              <i class="fas fa-edit"></i>
              <h4 class="card-subtitle icon-link"></h4><br>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>
<script>

import { adminCenterEntityNames as actions } from '../scripts/variables.js';

export default {
  data() {
    return {
      actions
    }
  }
}

</script>