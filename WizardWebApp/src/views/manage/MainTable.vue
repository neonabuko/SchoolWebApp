<template>
  <main class="main-table container">
    <div class="main-table-header d-inline-flex flex-items-center">
      <button @click="goBack"
              title="Go back"
              type="button"
              class="border-0 bg-body-tertiary">
        <i class="fas fa-chevron-left"></i>
      </button>
      <div class="">
        <h2 class="h1 mx-3" style="font-size: 40px">{{ entityNames.at(routeId) }}</h2>
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
      <tbody v-for="entityValues in entities">
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
    <div class="btn-new-entity text-end mx-1 mb-1">
      <router-link :to="{ name: 'MainForm', params: { entityIndex: routeId } }">
        <button class="btn btn-primary">+ New</button>
      </router-link>
    </div>
  </main>

</template>
<script>

import {
  adminCenterEntityNames,
  classParams,
  groupParams,
  routes,
  studentParams,
  teacherParams
} from "../../scripts/variables.js";
import axios from "axios";
import {URL} from "../../scripts/variables.js";
import general from "../../scripts/general.js";
import MainForm from "./MainForm.vue";

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
      ],
      entityRoutes: [...routes],
      entities: [],
      entitySubmit: {}
    }
  }, computed: {
    MainForm() {
      return MainForm
    }
  }, methods: {
    async getEntities() {
      let response = await axios.get(URL + `${this.entityRoutes.at(this.routeId)}`)
      this.entities = response.data
      for (let entity of this.entities) {
        delete entity.id
        delete entity.teacherId
        delete entity.studentPresent

        if (entity.studentId) {
          let studentResponse = await axios.get(URL + `/students/${entity.studentId}`)
          entity.studentId = studentResponse.data.name
        }
      }
    },
    ...general.methods
  }, mounted() {
    this.getEntities()
  }
}

</script>