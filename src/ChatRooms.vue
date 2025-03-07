<template>
    <div class="rooms-list">
        <div v-for="room in rooms" :key="room.id" class="room">
            <p>{{ room.name }}</p>
            <button @click="joinRoom(room.id)">Join</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const db = getFirestore();
const rooms = ref([]);

const getRooms = async () => {
    const querySnapshot = await getDocs(collection(db, "rooms"));
    querySnapshot.forEach((doc) => {
        rooms.value.push({ id: doc.id, ...doc.data() });
    });
};

const joinRoom = (roomId) => {
    console.log(`Joined room with ID: ${roomId}`);
};

onMounted(getRooms);
</script>
