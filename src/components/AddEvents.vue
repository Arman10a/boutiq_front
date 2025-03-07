<template>
    <div class="addEvents flex items-center justify-center p-32">
        <div class="event-form">
            <h2>Create New Event</h2>
            <form @submit.prevent="createEvent">
                <div>
                    <label for="summary">Event Title:</label>
                    <input type="text" id="summary" v-model="eventData.summary" required />
                </div>
                <div>
                    <label for="location">Location:</label>
                    <input type="text" id="location" v-model="eventData.location" />
                </div>
                <div>
                    <label for="description">Description:</label>
                    <input type="text" id="description" v-model="eventData.description" />
                </div>
                <div>
                    <label for="start_time">Start Time:</label>
                    <input type="datetime-local" id="start_time" v-model="eventData.start_time"  required />
                </div>
                <div>
                    <label for="end_time">End Time:</label>
                    <input type="datetime-local" id="end_time" v-model="eventData.end_time"  required />
                </div>
                <button type="submit">Create Event</button>
            </form>
            <p v-if="responseMessage">{{ responseMessage }}</p>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';

const eventData = ref({
    summary: '',
    location: '',
    description: '',
    start_time: new Date().toISOString().slice(0, 16),
    end_time: new Date().toISOString().slice(0, 16)
});
const responseMessage = ref('');

const createEvent = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/google/create-event', eventData.value , {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (response.data.success) {
            responseMessage.value = 'Event created successfully!';
            setTimeout(() => {
                location.replace('/user/events')
            },2000)

        } else {
            responseMessage.value = 'Failed to create event.';
        }
    } catch (error) {
        console.error(error);
        responseMessage.value = 'An error occurred.';
    }
};
</script>

<style scoped>
.addEvents {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    flex-direction: column;
    background-image: url('@/assets/images/logo.jpg');
    background-attachment: fixed;
    position: relative;
    font-family: 'Poppins', sans-serif;
}
.event-form {
    max-width: 350px;
    padding: 15px;
    border-radius: 6px;
    background-color: #fafafa;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
}

.event-form label {
    margin-bottom: 4px;
    color: #555;
    font-size: 12px;
}

.event-form input {
    width: 100%;
    padding: 8px;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    background-color: #fff;
    transition: border 0.2s ease, background-color 0.2s ease;
}

.event-form input:focus {
    border-color: #3498db;
    background-color: #f0f8ff;
}

.event-form button {
    padding: 10px;
    font-size: 14px;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
}

h2 {
    font-size: 20px;
    margin-bottom: 10px;
}


.event-form button:hover {
    background-color: #0056b3;
}

.event-form p {
    text-align: center;
    font-size: 14px;
    color: #3498db;
    margin-top: 18px;
}

@media (max-width: 768px) {
    .event-form {
        padding: 15px;
    }

    h2 {
        font-size: 20px;
    }

    .event-form input,
    .event-form button {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .event-form {
        padding: 12px;
    }

    h2 {
        font-size: 18px;
    }

    .event-form input,
    .event-form button {
        font-size: 13px;
    }
}

</style>
