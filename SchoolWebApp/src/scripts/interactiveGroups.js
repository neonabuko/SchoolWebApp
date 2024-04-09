import axios from "axios";
import {URL} from "./variables.js";

export default {
    methods: {
        async getInteractiveGroupAsync() {
            const groupId = this.$route.params.groupId;
            let response = await axios.get(URL + `/interactive-groups/${groupId}`)
            this.interactiveGroup = await response.data
        },
        async addStudentsToStudentsClassesMapAsync() {
            const groupId = this.$route.params.groupId;
            let response = await axios.get(URL + `/interactive-classes/interactive-group/${groupId}/today`)
            for (let student of await response.data) {
                this.studentsClasses.set(student, undefined)
            }
        },
        async getFirstClassScheduledForTodayByStudentIdAsync(studentId) {
            let response = await axios.get(URL + `/interactive-classes/student/${studentId}/today`)
            return await response.data
        }
    }
}