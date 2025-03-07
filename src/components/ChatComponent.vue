<template>
    <div class="chat-container bg-gray-100 p-4 rounded-lg shadow-lg">
        <div class="messages" style="max-height: 400px; overflow-y: scroll;">
            <div v-for="msg in messages" :key="msg.id" class="message">
                <strong class="text-cyan-800">{{ msg.author }}</strong>: {{ msg.text }}
                <small>{{ new Date(msg.timestamp.seconds * 1000).toLocaleString() }}</small>
                <button  v-if="msg.uid === user.uid" @click="deleteMessage(msg.id, msg.uid)">🗑️</button>
        </div>
        </div>
        <div v-if="newMessageAlert" class="text-green-500 font-semibold">
            New Message Received!
        </div>
        <div v-if="deletedMessage" class="text-green-500 font-semibold">
            Message Deleted!
        </div>
        <input class="p-2 border rounded-md text-gray-900" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Write a message..." />
        <button class="bg-blue-500 text-white p-2 rounded-md" @click="sendMessage">Send</button>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { messagesCollection, addDoc, query, orderBy, onSnapshot, doc, deleteDoc } from "@/firebase";

const savedUser = localStorage.getItem("chatUser");
const newMessageAlert = ref(false);
const messages = ref([]);
const newMessage = ref("");
const deletedMessage = ref(false);
const user = ref(savedUser ? JSON.parse(savedUser) : {
    uid: "user_" + Math.floor(Math.random() * 1000),
    name: "User" + Math.floor(Math.random() * 1000)
});

localStorage.setItem("chatUser", JSON.stringify(user.value));

onMounted(() => {
    const q = query(messagesCollection, orderBy("timestamp"));
    onSnapshot(q, (snapshot) => {
        const previousMessageCount = messages.value.length;
        messages.value = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        if (messages.value.length > previousMessageCount) {
            newMessageAlert.value = true;
        }
        setTimeout(() => {
            newMessageAlert.value = false;
            deletedMessage.value = false;
        },3000)
    });
});

const sendMessage = async () => {
    if (newMessage.value.trim() === "") return;

    try {
        await addDoc(messagesCollection, {
            text: newMessage.value,
            author: user.value.name,
            uid: user.value.uid,
            timestamp: new Date()
        });

        newMessage.value = "";
    } catch (error) {
        console.error("Error sending message:", error);
    }
};
const deleteMessage = async (id, messageUid) => {
    if (messageUid !== user.value.uid) {
        alert("error");
        return;
    }
    try {
        await deleteDoc(doc(messagesCollection, id));
            deletedMessage.value = true
        } catch (error) {
            console.error("Error deleting message:", error);
        }
};
</script>

<style scoped>
@keyframes fadeInOut {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    50% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-10px);
    }
}

.text-green-500 {
    color: green;
    animation: fadeInOut 3s ease-in-out;
}

.font-semibold {
    font-weight: 600;
}
.chat-container.dark {
    background-color: #2d2d2d;
    color: white;
}

.chat-container.light {
    background-color: white;
    color: black;
}
.chat-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
}
.messages {
    height: 300px;
    overflow-y: auto;
    margin-bottom: 10px;
}
.message {
    background: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
    position: relative;
    color: black;
}
small {
    display: block;
    font-size: 12px;
    color: gray;
}
button {
    padding: 5px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
}
</style>
