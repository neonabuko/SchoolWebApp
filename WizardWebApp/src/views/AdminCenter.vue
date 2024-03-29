<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="h1">Admin Center</h1>
    </div>
    <div class="custom-card-div">
      <div v-for="name in actions"
           :key="name"
           class="custom-card-div-middle">
        <router-link :to="{ name: 'MainTable', params: {entityId: actions.indexOf(name)} }">
          <div class="card shadow custom-card-div-inside">
            <div class="card-body">
              <h2 class="card-title icon-link">{{ name }}</h2>
            </div>
            <div class="card-img">
              <img alt="wizard-logo"
                   class="card-img wizard-card-img"
                   src="../assets/wizard-logo.jpg"
                   :style="{borderRadius: '5%'}">
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

import {adminCenterEntityNames as actions} from '../scripts/variables.js';

export default {
  data() {
    return {
      actions
    }
  }
}

</script>