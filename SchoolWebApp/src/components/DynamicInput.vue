<template>
  <div>
    <template v-if="type === 'input'">
      <div class="form-text">
        <input class="form-control"
               :placeholder="placeholder"
               :id="id"
               type="text">
      </div>
    </template>

    <template v-if="type === 'checkbox'">
      <div class="d-flex flex-items-center justify-content-end">
        <input class="form-check-input form-check mx-1"
               :id="id"
               type="checkbox">
        <label class="input-group-text form-check-label" :for="id">{{ label }}</label>
      </div>
    </template>

    <template v-if="type === 'date'">
      <div class="d-flex flex-items-center">
        <Flatpickr class="form-control"
                   model-value=""
                   :id="id"
                   :config="flatpickrOptions"
                   :placeholder="placeholder">
        </Flatpickr>
        <div class="input-group-append">
          <span class="input-group-text w-100 h-100">
            <i class="fas fa-calendar-day p-1"></i>
          </span>
        </div>
      </div>
    </template>

    <template v-if="type === 'search'">
      <div class="d-flex flex-items-center">
        <div class="input-group">
          <input class="form-control"
                 @input="enableDropdown(searchInput)"
                 :value="searchInput"
                 :placeholder="placeholder"
                 :id="id"
                 type="search">
          <div class="input-group-append">
            <span class="input-group-text w-100 h-100">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="dropdown-container bg-body">
        <div class="dropdown shadow"
             id="suggestions-container-id"
             v-show="showDropdown">
          <div v-if="(matchedSuggestions ?? '').length === 0"
               style="border-bottom: 1px solid #474e55"
               class="dropdown-item bg-warning-subtle p-1">
            No suggestions found
          </div>
          <div class="flex-items-center d-flex"
               id="dropdown-item-container"
               v-if="!suggestionSelected"
               v-for="(suggestion, index) in matchedSuggestions">
            <i class="fas fa-person"></i>
            <button class="dropdown-item px-2"
                    :key="index"
                    @click="selectSuggestion(suggestion)">
              {{ suggestion.name }}
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Flatpickr from "vue-flatpickr-component";
import mainForm from "../scripts/mainForm.js";
import general from "../scripts/general.js";

export default {
  components: {
    Flatpickr
  },
  name: 'DynamicInput',
  props: {
    type: {
      type: String,
      required: true
    },
    placeholder: String,
    value: [String, Number],
    id: String,
    label: String,
    flatpickrOptions: {
      enableTime: true,
      dateFormat: 'd/m H:i'
    },
    searchInput: String,
    showDropdown: Boolean,
    matchedSuggestions: Array,
    suggestionSelected: Boolean
  },

  methods: {
    ...general.methods, 
    ...mainForm.methods
  },
}
</script>
