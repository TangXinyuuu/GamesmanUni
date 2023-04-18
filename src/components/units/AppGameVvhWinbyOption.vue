<template>
    <button id="app-game-vvh-winby" @click="store.options()">Winby</button>
</template>

<script lang="ts" setup>
    import AppGameVvhHeaderGuidesOptions from "./AppGameVvhHeaderGuidesOptions.vue";
    import AppGameVvhHeaderMetersOptions from "./AppGameVvhHeaderMetersOptions.vue";
    import AppGameVvhHeaderTitle from "./AppGameVvhHeaderTitle.vue";
</script>

<style lang="scss" scoped>
    #app-game-vvh-header {
        align-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        > * {
            margin: 1rem;
        }
    }
</style>
