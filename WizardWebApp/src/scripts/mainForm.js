import axios from "axios";
import {routes, URL} from "./variables.js";

export default {
    methods: {
        async enableDropdown(name, parentEntityParam) {
            this.parentEntityParam = parentEntityParam;
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(async () => {
                if ((this.matchedSuggestions ?? []).length === 0 && (name ?? '').length > 0) {
                    try {
                        const response = await axios.get(
                            URL + `${routes.at(this.entityIndex - 1)}/by-name/${name}`
                        )
                        const suggestions = await response.data;
                        this.suggestions.push(...suggestions);
                        // Emit an event or call a method to update suggestionSelected in the parent component
                        this.$emit('update:suggestionSelected', false);
                    } catch (error) {
                        console.error('Error fetching suggestions:', error);
                    }
                }
            }, 300);
        },
        selectSuggestion(entityParam, inputParam) {
            this.searchInput = inputParam.name;
            // Emit an event or call a method to update suggestionSelected in the parent component
            this.$emit('update:suggestionSelected', true);
            this.parentEntityId = inputParam.id;
            this.entitySubmit[entityParam] = this.parentEntityId;
        },
        async getEntityIndex() {
            this.entityIndex = await this.$route.params.entityIndex;
        },
        async createEntity(entityIndex, params) {
            const baseRoute = routes.at(entityIndex);
            try {
                await axios.post(URL + `${baseRoute}`, params);
                alert('Created.');
                this.goBack();
            } catch (error) {
                console.error('Error creating entity:', error);
            }
        }
    }
}