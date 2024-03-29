<template>
  <div class="container justify-content-center">
    <table class="table table-bordered table-striped"
           :style="{textAlign: 'center'}">
      <thead>
      <tr>
        <th>Lesson</th>
        <th>Date</th>
        <th>Teacher</th>
        <th>Oral</th>
        <th>HW?</th>
        <th>HW Grade</th>
        <th>Present</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="interactiveClass in interactiveClasses"
          :key="interactiveClass.id">
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
            {{ interactiveClass.teacherName ? interactiveClass.teacherName : 'N/A' }}
          </a>
        </td>
        <td>
          <a>
            {{ interactiveClass.oral.toUpperCase() }}
          </a>
        </td>
        <td>
          <a :style="{ color: interactiveClass.hwDelivered ? 'green' : 'red' }">
            {{ interactiveClass.hwDelivered ? 'YES' : 'NO' }}
          </a>
        </td>
        <td>
          <a>
            {{ interactiveClass.hwGrade.toUpperCase() }}
          </a>
        </td>
        <td>
          <a :style="{ color: interactiveClass.studentPresent ? 'green' : 'red' }">
            {{ interactiveClass.studentPresent ? 'YES' : 'NO' }}
          </a>
        </td>
        <td>
          <button class="btn btn-danger btn-sm"
                  @click="deleteClass(interactiveClass.id)">
            Delete
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import {URL} from "../scripts/variables.js";

export default {
  data() {
    return {
      interactiveClasses: []
    }
  }, methods: {
    async getClasses() {
      let response = await axios.get(URL + "/interactive-classes")
      this.interactiveClasses = response.data
    },
    async deleteClass(id) {
      await axios.delete(URL + `/interactive-classes/${id}`)
      this.getClasses()
    }
  }, mounted() {
    this.getClasses()
  }
}
</script>