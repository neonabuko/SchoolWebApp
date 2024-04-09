<template>
  <main class="w-100 m-auto main-form-container">
    <form @submit.prevent="handleSubmit">
      <img src="../../assets/vue.svg"
           alt="logo"
           class="mb-3 shadow main-form-logo"
           style="border-radius: 50%">
      <div id="main-form-header-div">
        <button @click="goBack"
                title="Go back"
                type="button"
                class="border-0 bg-body-tertiary">
          <i class="fas fa-chevron-left"></i>
        </button>
        <h1 class="h2">New {{ entityNames.at(entityIndex) }}</h1>
      </div>

      <div v-for="(key, paramIndex) in entityParams.at(entityIndex)" :key="paramIndex">
        
        <div>
          <dynamic-input :key="paramIndex"
                         :type="key.at(1).at(1)"
                         :placeholder="key.at(1).at(0)"
                         :value="entitySubmit[key.at(0)]"
                         :id="paramIndex.toString()"
                         :label="key.at(1).at(0)"
                         :flatpickrOptions="flatpickrOptions"
                         :searchInput="searchInput"
                         :showDropdown="showDropdown"
                         :matchedSuggestions="matchedSuggestions"
                         :suggestionSelected="suggestionSelected">
          </dynamic-input>
        </div>

        <div class="d-flex justify-content-end flex-items-center" v-if="'select'.includes(key.at(1).at(1))">
          <select class="form-select"
                  :name="key.at(1).at(0)"
                  :id="paramIndex"
                  :title="key.at(1).at(0)"
                  v-model="entitySubmit[key.at(0)]">
            <option value="R">R</option>
            <option value="B">B</option>
            <option value="MB">MB</option>
            <option value="O">O</option>
          </select>
          <label :for="paramIndex" class="w-75 input-group-text text-nowrap">{{ key.at(1).at(0) }}</label>
        </div>

      </div>
      <button class="btn btn-primary w-100 py-2"
              type="submit"
              id="main-form-submit-btn"
              @click="createEntity(entityIndex, entitySubmit)">
        Submit
      </button>
    </form>
  </main>
</template>

<script>
import {teacherParams, groupParams, studentParams, lessonParams, apiRoutes} from '../scripts/variables.js'
import general from "../scripts/general.js";
import Flatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import mainForm from "../scripts/mainForm.js";
import DynamicInput from "../components/DynamicInput.vue";

export default {
  components: {Flatpickr, DynamicInput},

  data() {
    return {
      routes: apiRoutes,
      suggestions: [],
      entityIndex: '',
      entityNames: ['Teacher', 'Group', 'Student', 'Class'],
      entityParams: [teacherParams, groupParams, studentParams, lessonParams],
      entitySubmit: {},
      timeoutId: null,
      searchInput: '',
      canSearch: false,
      parentEntityId: '',
      parentEntityParam: '',
      suggestionSelected: false,
      flatpickrOptions: {
        enableTime: true,
        dateFormat: 'd/m H:i'
      }
    }
  },

  computed: {
    matchedSuggestions() {
      return this.suggestions.filter(suggestion =>
          suggestion.name.toLowerCase().startsWith((this.searchInput ?? '').toString().toLowerCase()))
    },
    showDropdown() {
      return (this.searchInput ?? '').length > 0
    }
  },

  methods: {
    ...general.methods, 
    ...mainForm.methods
  },

  mounted() {
    this.getEntityIndex()
  }
}

</script>