<template>
  <main class="d-flex align-items-center">
    <div class="w-100 m-auto main-form-container">
      <form @submit.prevent="handleSubmit">
        <img src="../../assets/wizard-logo.jpg"
             alt="logo"
             class="mb-3 shadow"
             height="90"
             width="90"
             style="border-radius: 20%">
        <h1 class="h3 mb-3 fw-normal">New {{ entityNames.at(entityIndex) }}</h1>
        <div class="form-floating"
             v-for="(key, param) in entityParams.at(entityIndex)"
             :key="param">
          <input class="form-control"
                 :placeholder="param"
                 v-model="entitySubmit[key.at(0)]"
                 :id="param"
                 type="text">
          <label :for="param">{{ key.at(1) }}</label>
        </div>
        <button class="btn btn-primary w-100 py-2 mt-4"
                type="submit"
                @click="createEntity(entityIndex, entitySubmit)">
          Submit
        </button>
      </form>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import {URL} from "../../scripts/variables.js";
import {teacherParams} from "../../scripts/variables.js";
import {groupParams} from "../../scripts/variables.js";
import {studentParams} from "../../scripts/variables.js";
import {classParams} from "../../scripts/variables.js";
import {routes} from "../../scripts/variables.js";

export default {
  data() {
    return {
      entityIndex: '',
      entityNames: [
        'Teacher',
        'Group',
        'Student',
        'Class'
      ],
      entityParams: [
        teacherParams,
        groupParams,
        studentParams,
        classParams
      ],
      entitySubmit: {}
    }
  }, methods: {
    async getEntity() {
      this.entityIndex = await this.$route.params.entityIndex
    },
    async createEntity(entityIndex, params) {
      console.log(params)
      const baseRoute = routes.at(entityIndex)
      await axios.post(URL + `${baseRoute}`, params)
      alert("Created.")
    },
    async editEntity(entityIndex, params) {
      const baseRoute = routes.at(entityIndex)
      // await axios.put(URL + `${baseRoute}/${}`, params)
    },
    handleSubmit() {
    }
  }, mounted() {
    this.getEntity()
  }
}

</script>