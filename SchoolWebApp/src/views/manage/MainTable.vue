<template>
  <main class="main-table container">
    <div class="main-table-header d-inline-flex flex-items-center">
      <button @click="goBack" title="Go back" type="button" class="border-0 bg-body-tertiary">
        <i class="fas fa-chevron-left"></i>
      </button>
      <div>
        <h2 class="h1 mx-3" style="font-size: 40px">{{ entityNames.at(routeId) }}</h2>
      </div>
      <div class="btn-new-entity d-flex justify-content-end w-100 mx-1 mb-1">
      <router-link :to="{ name: 'MainForm', params: { entityIndex: routeId } }">
        <button class="btn btn-primary">+ New</button>
      </router-link>
    </div>
    </div>
    
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th v-for="paramNames in params.at(routeId)">
            <span>
              {{ paramNames.at(1).at(0) }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody v-for="entityValues in entities" v-if="!loading">
        <tr>
          <td v-for="value in entityValues">
            <span :style="{
        color: 'TrueFalse'.includes(value) ? ('True'.includes(value) ? 'green' : 'red') : '',
        fontWeight: 'TrueFalse'.includes(value) ? 'bold' : ''
      }">
              {{ 'TrueFalse'.includes(value) ? ('True'.includes(value) ? 'YES' : 'NO') : value }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="loading-container">
      <h3 class="text-center" v-if="loading">
        <div class="spinner"></div>
      </h3>
    </div>
  </main>
</template>
<script>

import {
  adminCenterEntityNames,
  classParams,
  groupParams,
  studentParams,
  teacherParams
} from "../../scripts/variables.js";
import general from "../../scripts/general.js";
import MainForm from "./MainForm.vue";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      routeId: this.$route.params.entityId,
      entityNames: [...adminCenterEntityNames],
      params: [
        teacherParams,
        groupParams,
        studentParams,
        classParams
      ]
    }
  }, computed: {
    MainForm() {
      return MainForm
    },
    ...mapState(['entities', 'loading'])
  }, methods: {
    ...mapActions(['getEntities']),
    async fetchData() {
      this.$store.state.loading = true
      const entities = await this.getEntities(this.$route.params.entityId)
      this.$store.commit('setEntities', entities)
      this.$store.state.loading = false
    },
    ...general.methods
  }, created() {
    this.fetchData()
  }
}

</script>