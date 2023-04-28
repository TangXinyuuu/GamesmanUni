<template>
    <div id="winby">
        <div id="leftPlayer" class="leftPlayer" @click="updateWinby">
            <span id="leftSpan" style="width:50%;" >
                <span id="rightPlayer" class="rightPlayer">
                </span>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed } from "vue";
    import { useStore } from "../../scripts/plugins/store";

    const store = useStore();
    const options = computed(() => (store.getters.options))
    const maximumWinby = computed(() => store.getters.maximumWinby(1, store.getters.currentRoundId));

    const updateWinby = () => {
        var currentWinby = 0;
        if (store.getters.currentWinby !== undefined) {
            const current = computed(() => store.getters.currentWinby);
            currentWinby = current.value;
        }
        var elem = document.getElementById("leftSpan")
        if (elem) {
            var rightP = document.getElementById("rightPlayer")
            var pBar = document.querySelector("progressBar")  
            var newWidth = Math.abs((((Number(currentWinby) + maximumWinby.value) / 2) / maximumWinby.value))
            elem.setAttribute("style", `width:${newWidth*100}%`)
            //const pBar = document.querySelector("progressBar");
            //if (rightP && pBar) {
            //    rightP.setAttribute("style", "animation:progressBar 2s ease-in-out")
            //};
                //rightP.setAttribute("style", "animation-fill-mode:both");
                //pBar.setAttribute("styles", `{${newWidth*100}% { width: ${newWidth*100}; } 100% { width: 100%; }`)
                /* pBar.animate([
                    // key frames
                    { transform: `translateX(${newWidth}%)` },
                    { transform: 'translateX(100%)'}])  */
            

        };
    };
    window.setInterval(updateWinby, 1000^10)

</script>

<style lang="scss" scoped>
    #winby {
        padding: 1rem;
        
        .leftPlayer { 
            height: 1rem;
            position: relative;
            background: #b10909;
            border-radius: 1rem;
            
        }

        .leftPlayer span {
            display: block;
            height: 100%;
        }

        .rightPlayer {
            background-color: #230786;
            animation: progressBar 2s ease-in-out;
            animation-fill-mode:both;
            border-radius: 1rem; 
        }

        @keyframes progressBar {
        0% { width: 0; }
        100% { width: 100%; }
        }
    }
</style>
