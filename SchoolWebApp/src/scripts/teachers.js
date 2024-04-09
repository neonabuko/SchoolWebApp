import axios from "axios";
import {URL} from "./variables.js";

export default {
    methods: {
        async getTeachers() {
            let response = await axios.get(URL + "/teachers")
            this.teachers = response.data
        }
    }
}