<template>
    <div id="uni-popup-window">
        <div id="top-click-area" @click="$emit('close')" />
        <div id="bottom-click-area" @click="$emit('close')" />
        <div id="left-click-area" @click="$emit('close')" />
        <div id="right-click-area" @click="$emit('close')" />
        <div id="shell">
            <button id="x-button" @click="$emit('close')">⨉</button>
            <div id="container"><slot /></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #uni-popup-window {
        background-color: rgba(0, 0, 0, 0.75);
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9998;
        > #top-click-area {
            bottom: 90%;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
        }
        > #bottom-click-area {
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 90%;
        }
        > #left-click-area {
            bottom: 0;
            left: 0;
            position: absolute;
            right: 90%;
            top: 0;
        }
        > #right-click-area {
            bottom: 0;
            left: 90%;
            position: absolute;
            right: 0;
            top: 0;
        }
        > #shell {
            > #x-button {
                border-radius: 100%;
                font-size: 2rem;
                height: max(2.5rem, min(5vh, 5vw));
                position: absolute;
                right: 12.5%;
                top: 12.5%;
                width: max(2.5rem, min(5vh, 5vw));
                z-index: 9999;
            }
            > #container {
                background-color: var(--backgroundColor);
                border-radius: 1rem;
                border: 0.1rem solid var(--neutralColor);
                bottom: 10%;
                left: 10%;
                margin: auto;
                overflow-y: scroll;
                padding: 5% 10%;
                position: absolute;
                right: 10%;
                top: 10%;
            }
        }
    }
</style>
