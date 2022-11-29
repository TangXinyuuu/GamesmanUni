<template>
    <div id="app-game">
        <AppGameBody />
        <AppGameBodyBoard />

    </div>
</template>

<script lang="ts" setup>
    import { computed } from "vue";
    import { onBeforeRouteLeave, useRoute } from "vue-router";
    import { actionTypes, useStore } from "../../scripts/plugins/store";
    import AppGameBody from "./AppGameBody.vue";
    import AppGameBodyBoard from "./AppGameBodyBoard.vue";

    const route = useRoute();
    const store = useStore();
    const gameType = computed(() => route.params.type as string);
    const gameId = computed(() => route.params.gameId as string);
    const variantId = computed(() => route.params.variantId as string);
    store.dispatch(actionTypes.initiateMatch, { gameType: gameType.value, gameId: gameId.value, variantId: variantId.value });
    const options = computed(() => (store.getters.currentPlayer ? store.getters.currentPlayer.options : undefined));
    const showVvh = computed(() => (options.value ? options.value.showVvh : true));
    onBeforeRouteLeave(() => store.dispatch(actionTypes.exitMatch));
</script>

<style lang="scss" scoped>
    #app-game {
        justify-content: center;
        align-content: center;
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > * {
            margin: .5rem;
            margin-left: 3rem;
            margin-right: 3rem;
        }
    }
</style>
