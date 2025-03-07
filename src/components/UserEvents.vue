<template>
    <div class="events flex items-center justify-center p-32">
        <GoogleCalendar></GoogleCalendar>
    </div>
</template>

<script setup>
import GoogleCalendar from "@/components/GoogleCalendar.vue";
</script>

<style scoped>
.events {
    width: 100%;
    height: 100%;
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
