<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Mission Commanders</h4>
            <ul class="list-group">
                <li
                    class="list-group-item"
                    :class="{ active: index == currentIndex }"
                    v-for="(commander, index) in commanders"
                    :key="index"
                    @click="setActiveCommander(commander, index)"
                >
                    {{ commander.name }}
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <div v-if="currentCommander">
                <h4>Commander</h4>
                <div>
                    <br /><label><strong>Nombre:</strong></label>
                    {{ currentCommander.name }} <br /><label
                        ><strong>Username:</strong></label
                    >
                    {{ currentCommander.missionCommander }} <br /><label
                        ><strong>Lang:</strong></label
                    >
                    {{ currentCommander.lang }}
                    <br />
                    <label
                        ><strong>has certification: </strong>
                        {{ currentCommander.hasCertification }}
                    </label>
                </div>
                <router-link
                    :to="'/commander/' + currentCommander.id"
                    class="btn btn-info"
                >
                    Editar</router-link
                >
            </div>
            <div v-else>
                <br />
                <p>Selecciona un explorer.</p>
            </div>
        </div>
    </div>
</template>
<script>
import CommanderService from "../services/CommanderService";

export default {
    name: "explorer-list",
    data() {
        return {
            tutorials: [],
            commanders: [],
            currentTutorial: null,
            currentCommander: null,
            currentIndex: -1,
            title: "",
            explorerId: "",
        };
    },
    methods: {
        getAllCommanders() {
            CommanderService.getAll()
                .then((response) => {
                    this.commanders = response.data;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        setActiveCommander(commander, index) {
            this.currentCommander = commander;
            this.currentIndex = commander ? index : -1;
        },
    },
    mounted() {
        this.getAllCommanders();
    },
};
</script>
