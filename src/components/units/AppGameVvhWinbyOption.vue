<template>
    <button id="app-game-vvh-winby" @click="displayWinby">+</button>
</template>

<script lang="ts" setup>
    import AppGameVvhHeaderGuidesOptions from "./AppGameVvhHeaderGuidesOptions.vue";
    import AppGameVvhHeaderMetersOptions from "./AppGameVvhHeaderMetersOptions.vue";
    import AppGameVvhHeaderTitle from "./AppGameVvhHeaderTitle.vue";
    import { computed } from "vue";
    import { mutationTypes, useStore } from "../../scripts/plugins/store";


    const store = useStore();
    const options = computed(() => store.getters.options);
    
    const displayWinby = () => {
        const isWinby = computed(() => (options.value ? options.value.showWinby : false));
        store.commit(mutationTypes.showWinby, !isWinby.value);
        console.log(options.value.showWinby);
    };
</script>

<style lang="scss" scoped>
    #app-game-vvh-winby {
        border-radius: 100%;
        font-size: 2rem;
        height: max(2.5rem, min(5vh, 5vw));
        margin: 0.5rem 0;
        width: max(2.5rem, min(5vh, 5vw));
    }
</style>
