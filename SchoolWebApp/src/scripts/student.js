import axios from "axios";
import {URL} from "./variables.js";

export default {
    methods: {
        async getStudent() {
            const studentId = this.$route.params.studentId
            let response = await axios.get(URL + `/students/${studentId}`)
            this.student = response.data
        },
        async getClasses() {
            const studentId = this.$route.params.studentId;
            let response = await axios.get(URL + `/lessons/student/${studentId}`)
            this.interactiveClasses = response.data
        },
        async deleteClass(id) {
            await axios.delete(URL + `/lessons/${id}`)
            await this.getClasses()
        }
    }
}