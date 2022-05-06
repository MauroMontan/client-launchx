<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <h3>Nuevo Commander</h3>
            <div class="form-group">
                <label for="title">Nombre </label>
                <input
                    type="text"
                    class="form-control"
                    id="title"
                    required
                    v-model="commander.name"
                    name="title"
                />

                <label for="missioncommander">Mission Commander </label>
                <input
                    type="text"
                    class="form-control"
                    id="missioncommander"
                    required
                    v-model="commander.missionCommander"
                    name="missioncommander"
                />
            </div>
            <div class="form-group">
                <label for="title">Lang</label>
                <input
                    type="text"
                    class="form-control"
                    id="username"
                    required
                    v-model="commander.lang"
                    name="username"
                />
            </div>
            <div class="form-group">
                <label for="title">has certification</label>
                <input
                    type="checkbox"
                    class="form-control"
                    id="mission"
                    required
                    v-model="commander.hasCerfication"
                    name="mission"
                />
            </div>
            <button @click="saveExplorer" class="btn btn-success">
                Agregar
            </button>
        </div>
        <div v-else>
            <h4>Explorer creado exitosamente.</h4>
            <button class="btn btn-success" @click="newExplorer">Add</button>
        </div>
    </div>
</template>

<script>
import ExplorerService from "../services/ExplorerService";
export default {
    name: "add-explorer",
    data() {
        return {
            commander: {
                id: null,
                lang: "",
                name: "",
                missionCommander: "",
                hasCerfication: false,
            },
            submitted: false,
        };
    },
    methods: {
        saveExplorer() {
            var data = {
                name: this.explorer.name,
                username: this.explorer.username,
                mission: this.explorer.mission,
            };
            ExplorerService.create(data)
                .then((response) => {
                    this.explorer.id = response.data.id;
                    this.submitted = true;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        newExplorer() {
            this.submitted = false;
            this.explorer = {};
        },
    },
};
</script>
