<template>
  <div class="container-sm py-5">
    <h1 class="mb-5 ms-1">{{ student.name }}</h1>
    <div class="">
      <table id="student-table" class="table table-bordered table-striped table-hover">
        <thead>
        <tr>
          <th>Lesson</th>
          <th>Date</th>
          <th>Oral</th>
          <th>HW Delivered</th>
          <th>HW Grade</th>
        </tr>
        </thead>
        <tbody v-for="interactiveClass in interactiveClasses" :key="interactiveClass.id">
        <tr>
          <td>
            <a>
              {{ interactiveClass.lesson }}
            </a>
          </td>
          <td>
            <a>
              {{ interactiveClass.dateTime }}
            </a>
          </td>
          <td>
            <a>
              {{ interactiveClass.oral.toUpperCase() }}
            </a>
          </td>
          <td>
            <a :style="{ color: interactiveClass.hwDelivered.toLowerCase() === 'true' ? 'green' : 'red' }">
              {{ interactiveClass.hwDelivered.toLowerCase() === 'true' ? 'YES' : 'NO' }}
            </a>
          </td>
          <td>
            <a>
              {{ interactiveClass.hwGrade.toUpperCase() }}
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import student from "../scripts/student.js";

export default {
  data() {
    return {
      student: '',
      interactiveClasses: []
    }
  }, methods: {
    ...student.methods    
  }, mounted() {
    this.getStudent()
    this.getClasses()
  }
}
</script>