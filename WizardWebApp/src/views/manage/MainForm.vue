<template>
  <main class="d-flex align-items-center">
    <div class="w-100 m-auto main-form-container">
      <form @submit.prevent="handleSubmit">
        <img src="../../assets/wizard-logo.jpg"
             alt="logo"
             class="mb-3 shadow"
             height="80"
             width="80"
             style="border-radius: 50%">
        <h1 class="h2 mb-3 mx-2 fw-normal">New {{ entityNames.at(entityIndex) }}</h1>

        <div class="form-floating"
             v-for="(key, param) in entityParams.at(entityIndex)"
             :key="param">

          <input class="form-control"
                 :placeholder="param"
                 v-model="entitySubmit[key.at(0)]"
                 @input="enableDropdown(entitySubmit['studentId'])"
                 :id="param"
                 type="text">
          <label :for="param">{{ key.at(1) }}</label>

          <div class="dropdown bg-dark" id="suggestions-container-id" v-show="showDropdown"
               v-if="'studentId'.includes(key.at(0)) && showDropdown">
            <div v-if="matchedSuggestions.length === 0" class=" dropdown-item px-2">No suggestions found</div>
            <button v-for="(suggestion, index) in matchedSuggestions"
                    class="dropdown-item px-2 mb-2 w-auto"
                    :key="index"
                    @click="selectSuggestion(suggestion.name)">
              {{ suggestion.name }}
            </button>
          </div>

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
import general from "../../scripts/general.js";

export default {
  data() {
    return {
      suggestions: [],
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
  }, computed: {
    matchedSuggestions() {
      if (this.entitySubmit['studentId'] != null)
        return this.suggestions.filter(suggestion =>
            suggestion.name.toLowerCase().startsWith(this.entitySubmit['studentId'].toLowerCase()))
    },
    showDropdown() {
      if (this.entitySubmit['studentId'] != null) return this.entitySubmit['studentId'].length > 0
    }
  }, methods: {
    async enableDropdown(name) {
      let userInput = this.entitySubmit['studentId']
      if (userInput != null && userInput.length > 0) {
        let response = await axios.get(URL + `/students/by-name/${name}`)
        this.suggestions = response.data
        let suggestionsContainer = document.getElementById('suggestions-container-id')
        if (suggestionsContainer != null) suggestionsContainer.style.display = 'auto'
      }
    },
    selectSuggestion(suggestion) {
      this.entitySubmit['studentId'] = suggestion
      let suggestionsContainer = document.getElementById('suggestions-container-id')
      if (suggestionsContainer != null) suggestionsContainer.style.display = 'none'
    },
    ...general.methods,
    async getEntity() {
      this.entityIndex = await this.$route.params.entityIndex
    },
    async createEntity(entityIndex, params) {
      console.log(params)
      const baseRoute = routes.at(entityIndex)
      await axios.post(URL + `${baseRoute}`, params)
      this.goBack()
    }
  }, mounted() {
    this.getEntity()
  }
}

</script>

<style scoped>
.dropdown-item:hover {
  background-color: black;
}
</style>