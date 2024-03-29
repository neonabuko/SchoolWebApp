<template>
  <main class="m-2 p-1 ">
    <div class="m-1 mb-5 mt-3 d-inline-flex">
      <button class="btn btn-sm bg-dark btn-secondary m-auto"
              style="border-radius: 50%" @click="goBack">
        <i class="fas fa-arrow-left"
           style="vertical-align: middle; color: white"></i>
      </button>
      <div class="">
        <h2 class="h1 m-auto mx-3">{{ entityNames.at(routeId) }}</h2>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <table class="table table-bordered table-striped table-hover entity-table border-secondary table-sm">
        <thead>
        <tr>
          <th class="bg-primary-subtle" v-for="paramNames in params.at(routeId)">
            <span>
            {{ paramNames.at(1) }}
            </span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="entityValues in entities">
          <td v-for="value in entityValues">
            <span :style="{ color: 'truefalse'.includes(value) ? 'true'.includes(value) ? 'green' : 'red' : auto }">
              {{ 'truefalse'.includes(value) ? 'true'.includes(value) ? 'YES' : 'NO' : value}}
            </span>
          </td>
        </tr>
        <tr v-if="addingEntity">
          <td v-for="param in params.at(routeId)">
            <form class="form-floating">
              <input :placeholder="param.at(1)"
                     class="form-control"
                     v-model="entitySubmit[param.at(0)]"
                     type="text"
              id="input-id">
              <label for="input-id">{{param.at(1)}}</label>  
            </form>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="btn-new-entity m-1">
      <button v-if="!addingEntity" class="btn btn-primary" @click="addingEntity = true">+ New</button>
    </div>
    <div class="text-end m-1 btn-save-entity" v-if="addingEntity">
      <button :disabled="isFormInvalid" class="btn btn-success" @click="createEntity(routeId, entitySubmit)">Save
      </button>
      <button class="btn btn-danger ms-2" @click="addingEntity = false">Cancel</button>
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
      addingEntity: false,
      entitySubmit: {}
    }
  }, computed: {
    isFormInvalid() {
      return Object.values(this.entitySubmit).some(value => value.trim() === '');
    }
  }, methods: {
    async getEntities() {
      let response = await axios.get(URL + `${this.entityRoutes.at(this.routeId)}`)
      this.entities = response.data
      for (let entity of this.entities) {
        delete entity.id
        delete entity.teacherId
        delete entity.interactiveGroupId
        delete entity.studentId
      }
    },
    async createEntity(routeId, params) {
      console.log(params)
      const baseRoute = this.entityRoutes.at(this.routeId)
      await axios.post(URL + `${baseRoute}`, params).then(await this.getEntities)
      this.addingEntity = false
    },
    ...general.methods
  }, mounted() {
    this.getEntities()
  }
}

</script>