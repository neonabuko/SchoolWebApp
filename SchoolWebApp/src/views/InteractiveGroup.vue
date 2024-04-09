<template>
  <main class="container py-5 flex-justify-center"
        id="interactive-table-div">

    <div class="interactive-group-title mb-5 text-center w-100">
      <h1>
        <button @click="goBack"
                title="Go back"
                type="button"
                class="border-0 bg-body-tertiary h5">
          <i class="fas fa-chevron-left"></i>
        </button>
        {{ interactiveGroup.name }}
      </h1>
      <h5>{{ interactiveGroup.dateTime }}</h5>
    </div>

    <div v-for="student in studentsClasses.keys()"
         class="d-grid flex-justify-center">
      <router-link :to="{ name: 'Student', params: { studentId: student.id }}"
                   :key="student.id">
        <h4 class="text-body mx-1">{{ student.name }}</h4>
      </router-link>
      
      <div id="interactive-table-inner-div">
        <table class="table table-bordered table-striped border-secondary-subtle"
               :id="student.id">
          <thead>
          <tr>
            <th>Lesson</th>
            <th>Oral</th>
            <th>HW?</th>
            <th>HW Grade</th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="studentsClasses.get(student) != null">
            <td title="Lesson">
              <input class="form-control border-secondary-subtle"
                     v-model="studentsClasses.get(student).lesson">
            </td>
            <td title="Oral">
              <select class="form-select border-secondary-subtle"
                      v-model="studentsClasses.get(student).oral">
                <option value="R">R</option>
                <option value="B">B</option>
                <option value="MB">MB</option>
                <option value="O">O</option>
              </select>
            </td>
            <td title="HW Delivered?">
              <input class="form-check-input form-check form-check-inline border-secondary-subtle"
                     type="checkbox"
                     v-model="studentsClasses.get(student).hwDelivered">
            </td>
            <td title="HW Grade">
              <select class="form-select border-secondary-subtle"
                      v-model="studentsClasses.get(student).hwGrade">
                <option value="R">R</option>
                <option value="B">B</option>
                <option value="MB">MB</option>
                <option value="O">O</option>
              </select>
            </td>
          </tr>
          </tbody>
        </table>
        <i class="fas fa-check d-flex flex-items-center shining-green-check" 
           v-if="submittedSuccessfully" 
           style="color: green"></i>
      </div>
    </div>
    <div class="d-flex flex-justify-center">
      <button class="btn btn-primary mt-2" @click="submitClasses">Submit</button>
    </div>
  </main>
</template>

<script>

import interactiveGroups from "../scripts/interactiveGroups.js";
import general from "../scripts/general.js";
import axios from 'axios'
import {URL} from "../scripts/variables.js";

export default {
  data() {
    return {
      interactiveGroup: '',
      studentsClasses: new Map(),
      submittedSuccessfully: false
    }
  }, methods: {
    ...interactiveGroups.methods,
    ...general.methods,
    
    async submitClasses() {
      for (const student of this.studentsClasses) {
        let iClass = student.at(1)
        let iClassId = iClass.id
        delete iClass.id
        iClass.hwDelivered = (iClass.hwDelivered ?? '').toString().toLowerCase()
        delete iClass.studentPresent
        
        console.log(iClass)
        await axios.put(`${URL}/interactive-classes/${iClassId}`, iClass)
            .then(() => {
              this.submittedSuccessfully = true
            })
      }
    }
  }, mounted() {
    this.getInteractiveGroupAsync()
    this.addStudentsToStudentsClassesMapAsync().then(
        async () => {
          for (let key of this.studentsClasses.keys()) {
            let studentClass = await this.getFirstClassScheduledForTodayByStudentIdAsync(key.id)
            this.studentsClasses.set(key, studentClass)
          }
        }
    )
  }
}
</script>