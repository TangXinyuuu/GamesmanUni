<template>
    <div id="app-game-menu-customPos">
        <div id="app-game-menu-customPos-input">
            <button class="roundButton" @click="showInfo = !showInfo">𝓲</button>
            <button class="roundButton" @click="randomize">⚅</button>
            <input
                v-model.lazy="inputPos"
                id="app-game-menu-customPos-input-input"
                placeholder="Enter starting position of game here"
                @keyup.enter="onTextSubmit"
            />
            <button id="app-game-menu-customPos-input-submit" @click="onTextSubmit">Submit</button>
        </div>
        <div class="error" v-show="errorMsg">Error: {{ errorMsg }}</div>
        <h3>Current Start Position</h3>
        <textarea
            id="app-game-menu-customPos-currStartPos"
            type="text"
            v-model="currStartPosText"
            readonly
        ></textarea>
        <p v-show="showInfo" id="app-game-menu-customPos-infoText">
            Instructions on how to format the start position...
        </p>

        <h3 style="margin: 2rem 0 0 0;">Current Position</h3>
        <div id="app-game-menu-currPos">
            <textarea
                id="app-game-menu-currPos-display"
                type="text"
                v-model="currPosText"
                readonly
            ></textarea>
            <button @click="copyCurrentPositionToClipboard"
                :class="'roundButton' + copied">⎘</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, ref } from "vue";
    import { actionTypes, useStore } from "../../../scripts/plugins/store";

    const store = useStore();
    const isPuzzleGame = computed(() => store.getters.currentGameType === "puzzles");
    const randomize = async () => {
        await store.dispatch(actionTypes.initiateMatch, {
            gameType: store.getters.currentGameType,
            gameId: store.getters.currentGameId,
            variantId: store.getters.currentVariantId,
            startPosition: "random"
        });
    }

    const showInfo = ref(false);
    const inputPos = ref("");
    const errorMsg = ref("");
    const copied = ref('');
    const currStartPosText = computed(() => store.getters.currentStartPosition);
    const currPosText = computed(() => {
        copied.value = '';
        return store.getters.currentPosition;
    });
    const currGameId = computed(() => store.getters.currentGameId);
    const currVariantId = computed(() => store.getters.currentVariantId);
    const currGameType = computed(() => store.getters.currentGameType);
    const onTextSubmit = async () => {
        const error = await store.dispatch(actionTypes.updateMatchStartPosition, { position: inputPos.value });
        if (error) {
            errorMsg.value = error.message;
        } else {
            errorMsg.value = "";
            inputPos.value = "";
        }
    };

    const copyCurrentPositionToClipboard = () => {
        navigator.clipboard.writeText(`${window.location.origin}/uni/${currGameType.value}/${currGameId.value}/variants/${currVariantId.value}/${currPosText.value}`);
        copied.value = 'clicked';
    }
</script>

<style lang="scss" scoped>
    #app-game-menu-customPos {
        #app-game-menu-customPos-input {
            flex: 1 1 auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            margin: 2rem;
            align-items: center;
            #app-game-menu-customPos-input-input {
                border-radius: 1rem;
                border: 0.1rem solid var(--neutralColor);
                padding: 1rem;
                border-spacing: 5rem;
                width: 30vw;
                height: 3vh;
                resize: none;
            }
            #app-game-menu-customPos-input-submit {
                padding: 0.5rem;
                margin-left: 2rem;
                border: 0.1rem solid var(--neutralColor);
            }
            .roundButton {
                margin-right: 2rem;
                border-radius: 100%;
                font-size: 2rem;
                height: max(2.5rem, min(5vh, 5vw));
                width: max(2.5rem, min(5vh, 5vw));
            }
        }
        #app-game-menu-customPos-currStartPos {
            border-radius: 1rem;
            border: 0.1rem solid var(--neutralColor);
            padding: 0.5rem;
            width: 40vw;
            height: 3vh;
            resize: none;
            margin-top: 1rem;
        }
        #app-game-menu-currPos {
            flex: 1 1 auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            #app-game-menu-currPos-display {
                border-radius: 1rem;
                border: 0.1rem solid var(--neutralColor);
                padding: 0.5rem;
                border-spacing: 5rem;
                width: 30vw;
                height: 3vh;
                margin: 0 2rem 0 0;
                resize: none;
            }

            .roundButton {
                margin-right: 2rem;
                border-radius: 100%;
                font-size: 2rem;
                height: max(2.5rem, min(5vh, 5vw));
                width: max(2.5rem, min(5vh, 5vw));

                &clicked {
                    margin-right: 2rem;
                    border-radius: 100%;
                    font-size: 2rem;
                    height: max(2.5rem, min(5vh, 5vw));
                    width: max(2.5rem, min(5vh, 5vw));
                    background-color: rgba(76, 220, 37, 0.645);
                }
            }
        }
        #app-game-menu-customPos-infoText {
           padding: 1rem;
           text-align: center;
        }
        .error {
            color: red;
            margin: 1rem;
        }
    }
</style>
