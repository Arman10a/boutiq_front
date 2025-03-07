<template>
    <div class="chat flex items-center justify-center p-32">
        <ChatComponent></ChatComponent>
    </div>
</template>

<script setup>

import ChatComponent from "@/components/ChatComponent.vue";
</script>
<style scoped>
.chat {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center ;
    align-items: center;
    background-size: cover;
    color: white;
    flex-direction: column;
    background-image: url('@/assets/images/logo.jpg');
    background-attachment: fixed;
}
</style>