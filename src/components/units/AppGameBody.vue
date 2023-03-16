<template>
    <div id="app-game-body">

        <AppGameBodyStatistics />
        <AppGameMenu />
    </div>
</template>

<script lang="ts" setup>
    import AppGameBodyHeader from "./AppGameBodyHeader.vue";
    import AppGameBodyStatistics from "./AppGameBodyStatistics.vue";
    import AppGameBodyBoard from "./AppGameBodyBoard.vue";
    import AppGameMenu from "./AppGameMenu.vue";

</script>

<style lang="scss" scoped>
    #app-game-body {
        align: top;
        align-content: normal;
        align-items: stretch;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;

    }
</style>
