import axios from "axios";
import {URL} from './variables.js';

export default {
    methods: {
        async getInteractiveGroupsAsync() {
            let response = await axios.get(URL + "/interactive-groups")
            let interactiveGroups = await response.data
            
            let today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace(/\//g, '/');

            interactiveGroups = interactiveGroups.filter(group => {
                let datePart = group.dateTime.split(' ')[0]

                return datePart === today
            })

            for (const group of interactiveGroups) {
                let teacherResponse = await axios.get(URL + `/teachers/${group.teacherId}`)
                let teacher = await teacherResponse.data
                this.groupsTeachers.set(group, teacher)
            }
        }
    }
}