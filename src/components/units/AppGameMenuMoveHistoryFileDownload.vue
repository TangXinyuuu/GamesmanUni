<template>
    <button id="download" @click="downloadHistory()">Download</button>
</template>

<script lang="ts" setup>
    interface HTMLInputEvent extends Event {
        target: HTMLInputElement & EventTarget
    }
    const downloadFile = () => {
        var text = "foo\nbar\nbaz";

        var fileBlob = new Blob([text], {type: "application/octet-binary"});

        var link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(fileBlob));
        link.setAttribute("download", "HelloWorld.txt");
        link.appendChild(document.createTextNode("Save file"));
        document.body.appendChild(link);
    }
</script>

<style lang="scss" scoped>
    #download {
        padding: 0.5rem;
        border: 0.1rem solid var(--neutralColor);
    }
</style>