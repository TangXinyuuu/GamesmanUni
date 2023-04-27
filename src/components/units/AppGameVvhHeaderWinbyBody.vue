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
    import { mutationTypes, useStore } from "../../scripts/plugins/store";


    const store = useStore();
    const options = computed(() => store.getters.options);

    //const showWinby = computed(() => (options.value ? options.value.showWinby : false));
    //const currentWinby = computed(() => store.getters.currentWinby);
    
    const updateWinby = () => {
        var currentWinby = 0;
        if (store.getters.currentWinby !== undefined) {
            const current = computed(() => store.getters.currentWinby);
            currentWinby = current.value;
        }
        console.log(currentWinby);

        var elem = document.getElementById("leftSpan")

        if (elem) {
           
            /* elem.setAttribute("style", `width:${Math.abs(50+(currentWinby*10))}%`)
            console.log(Math.abs(50+(currentWinby*10))) */
            var newWidth = Math.abs(50+(currentWinby*10));

            elem.setAttribute("style", `width:${newWidth}%`)
            console.log(newWidth)
        };
    };


   /*  var elem = document.getElementById("leftSpan")
    if (elem) {
        elem.addEventListener("unload", updateWinby);
    }; */
    
</script>

<style lang="scss" scoped>
    #winby {
        padding: 1rem;
        .leftPlayer { 
            height: 1rem;
            position: relative;
            background: #b10909;
            
        }

        .leftPlayer span {
            display: block;
            height: 100%;
        }

        .rightPlayer {
            background-color: #230786;
            animation: progressBar 2s ease-in-out;
            animation-fill-mode:both; 
        }

        @keyframes progressBar {
        0% { width: 0; }
        100% { width: 100%; }
        }
    }
</style>
