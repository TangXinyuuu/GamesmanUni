<template>
    <div id="app-game">
        <AppGameBodyHeader />
        <AppGameContainer />
    </div>
</template>


<script lang="ts" setup>
    import { computed } from "vue";
    import { onBeforeRouteLeave, useRoute } from "vue-router";
    import { actionTypes, useStore } from "../../scripts/plugins/store";
    import AppGameContainer from "./AppGameContainer.vue";
    import AppGameBodyHeader from "./AppGameBodyHeader.vue";


</script>

<style lang="scss" scoped>
    #app-game {
        justify-center: space-around;
    }
</style>
