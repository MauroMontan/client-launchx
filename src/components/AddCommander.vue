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
            <button @click="saveCommander" class="btn btn-success">
                Agregar
            </button>
        </div>
        <div v-else>
            <h4>Explorer creado exitosamente.</h4>
            <button class="btn btn-success" @click="newCommander">Add</button>
        </div>
    </div>
</template>

<script>
import CommanderService from "../services/CommanderService";
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
        saveCommander() {
            var data = {
                lang: this.commander.lang,
                name: this.commander.name,
                missionCommander: this.commander.missionCommander,
                hasCerfication: this.commander.hasCertification,
            };
            CommanderService.create(data)
                .then((response) => {
                    this.commander.id = response.data.id;
                    this.submitted = true;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        newCommander() {
            this.submitted = false;
            this.commander = {};
        },
    },
};
</script>
