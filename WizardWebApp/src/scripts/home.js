import axios from "axios";
import {URL} from './variables.js';

export default {
    methods: {
        async getInteractiveGroups() {
            let response = await axios.get(URL + "/interactive-groups")
            this.interactiveGroups = response.data
        }
    }
}