<template>
    <div id="app-game-body-statistics-moves">
        <button id="app-game-body-statistics-moves-undo" @click="store.dispatch(actionTypes.undoMove)" :disabled="disabledUndo">
            <img src="../../models/images/icon-undo.svg" height="12" with="12">
        </button>
        <button id="app-game-body-statistics-moves-restart" @click="store.dispatch(actionTypes.restartMatch)">
            <img src="../../models/images/icon-restart.svg" height="12" with="12">
        </button>
        <button id="app-game-body-statistics-moves-redo" @click="store.dispatch(actionTypes.redoMove)" :disabled="disabledRedo">
            <img src="../../models/images/icon-redo.svg" height="12" with="12">
        </button>
    </div>
</template>

<script lang="ts" setup>
    import AppGameBodyStatisticsMessage from "./AppGameBodyStatisticsMessage.vue";
    import { computed } from "vue";
    import { actionTypes, useStore } from "../../scripts/plugins/store";

    const store = useStore();
    const disabledUndo = computed(() => store.getters.currentRoundId <= 1);
    const disabledRedo = computed(() => store.getters.currentRoundId >= Object.keys(store.getters.currentRounds).length);
</script>

<style lang="scss" scoped>
    #app-game-body-statistics-moves {
        align-content: stretch;
        align-items: center;
        border-radius: 1rem;
        border: 0.1rem solid var(--neutralColor);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        padding: 1rem;
        > button {
            margin: 0.5rem;
            padding: 0 0.5rem;
        }
    }

</style>
