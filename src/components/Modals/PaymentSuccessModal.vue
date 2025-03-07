<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({ show: Boolean });
const emit = defineEmits(["close"]);

if (props.show) {
    setTimeout(() => {
        emit("close");
    }, 3000);
}
</script>

<template>
    <teleport to="body">
        <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 class="text-2xl font-semibold text-green-500">✅ Payment Successful!</h2>
            </div>
        </div>
    </teleport>
</template>

<style scoped>

</style>
