<template>
  <div class="container-sm py-5"
       id="interactive-table-div">
    <div class="interactive-group-title mb-5"
         :style="{textAlign: 'center'}">
      <h1>{{ interactiveGroup.name }}</h1>
      <h5>{{ interactiveGroup.time }}</h5>
    </div>

    <div v-for="student in studentsClasses.keys()"
         class="m-2 p-1">
      <router-link :to="{ name: 'Student', params: { studentId: student.id }}"
                   :key="student.id"
                   class="student-class-table">
        <h4>{{ student.name }}</h4>
      </router-link>
      <table class="table table-bordered table-striped table-hover"
             :style="{textAlign: 'center'}"
             id="interactive-table">
        <thead>
        <tr>
          <th>Lesson</th>
          <th>Oral</th>
          <th>HW Delivered?</th>
          <th>HW Grade</th>
          <th>Student Present?</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td title="Lesson">
            <a>
              {{ studentsClasses.get(student).lesson }}
            </a>
          </td>
          <td title="Oral">
            <a>
              {{ studentsClasses.get(student).oral.toUpperCase() }}
            </a>
          </td>
          <td title="HW Delivered?">
            <a :style="{ color: studentsClasses.get(student).hwDelivered ? 'green' : 'red' }">
              {{ studentsClasses.get(student).hwDelivered ? 'YES' : 'NO' }}
            </a>
          </td>
          <td title="HW Grade">
            <a>
              {{ studentsClasses.get(student).hwGrade.toUpperCase() }}
            </a>
          </td>
          <td title="Student Present?">
            <a :style="{ color: studentsClasses.get(student).hwDelivered ? 'green' : 'red' }">
              {{ studentsClasses.get(student).hwDelivered ? 'YES' : 'NO' }}
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import interactiveGroups from "../scripts/interactiveGroups.js";

export default {
  data() {
    return {
      interactiveGroup: '',
      studentsClasses: new Map()
    }
  }, methods: {
    ...interactiveGroups.methods
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