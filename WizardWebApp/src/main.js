import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import { createStore } from "vuex";
import { apiRoutes } from "../src/scripts/variables.js";
import { URL } from "../src/scripts/variables.js";
import axios from "axios";

const store = createStore({
    state() {
        return {
            entityRoutes: [...apiRoutes],
            entities: [],
            loading: false,
        };
    },
    actions: {
        async getEntities({ state }, routeId) {
            let response = await axios.get(URL + state.entityRoutes.at(routeId));
            const entities = await Promise.all(
                response.data.map(async (entity) => {
                    delete entity.id;
                    delete entity.teacherId;
                    delete entity.studentPresent;

                    if (entity.studentId) {
                        let studentResponse = await axios.get(
                            URL + `/students/${entity.studentId}`
                        );
                        entity.studentId = studentResponse.data.name;
                    }

                    return entity;
                })
            );
            return entities
        },
    },
    mutations: {
        setEntities(state, entities) {
            state.entities = entities;
        }
    },
});

createApp(App).use(router).use(store).mount("#app");
