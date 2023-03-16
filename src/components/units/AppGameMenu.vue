<template>
    <div id="app-game-menu">
        <AppGameMenuHeader/>
        <div id="app-game-menu-content">
            <div id="app-game-menu-content-buttons">
                <button class="buttons" @click="activeTab = 'vvh'">
                    <img src="../../models/images/icon-chart.png" height="30" with="30">

                </button>
                <!-- <button class="buttons" @click="activeTab = 'analysis'">
                    Analysis
                </button> -->
                <button class="buttons" @click="activeTab = 'startPos'">
                    <img src="../../models/images/icon-position.png" height="30" with="30">
                </button>
                <button class="buttons" @click="activeTab = 'moveHist'">
                    <img src="../../models/images/icon-history.png" height="30" with="30">
                </button>
            </div>
            <div id="app-game-menu-content-active">
                <AppGameVvh v-show="activeTab === 'vvh'"/>
                <AppGameMenuPosition v-show="activeTab === 'startPos'"/>
                <AppGameMenuHistory v-show="activeTab === 'moveHist'"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    import AppGameVvh from "./AppGameVvh.vue";
    import AppGameMenuHeader from "./AppGameMenuHeader.vue";

    import AppGameMenuPosition from "./AppGameMenuPosition.vue";
    import AppGameMenuHistory from "./AppGameMenuHistory.vue";

    const activeTab = ref('vvh');
</script>

<style lang="scss" scoped>
    #app-game-menu {

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;

        width: max(45rem, min(5vh, 5vw));
        #app-game-menu-content {
            border-radius: 1rem;
            border: 0.1rem solid var(--neutralColor);
            padding: 1rem;
            .buttons {
                margin-right: 0.5rem;
                margin-left: 0.5rem;
                margin-bottom: 1rem;

                padding: 0 0.5rem;
                border-radius: 10rem;
                border: 0.1rem solid var(--neutralColor);
            }
        }
    }
</style>
