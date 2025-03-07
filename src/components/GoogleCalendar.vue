<template>
    <div class="bookings flex items-center justify-center p-32">
        <div class="bg-gray-900  rounded-xl shadow-lg p-12" v-if="loading">Loading Events</div>
        <div>
            <div class="flex justify-center p-8">
                <div class="w-full max-w-5xl ">
                    <table class="div1 w-full border-collapse rounded-lg overflow-hidden shadow-lg">
                        <thead class="bg-gray-800 text-white uppercase text-sm tracking-wider">
                        <tr>
                            <th class="p-4 text-left">Event Title</th>
                            <th class="p-4 text-left">Location</th>
                            <th class="p-4 text-left">Date Start</th>
                            <th class="p-4 text-left">Date End</th>
                            <th class="p-4 text-left"></th>
                            <th class="p-4 text-left">
                                <button class="view-link" @click="router.push('/user/add-events')">Add Event</button>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="event-list bg-gray-100 divide-y divide-gray-300 " v-if="paginatedEvents.length" >
                        <tr v-for="event in paginatedEvents" :key="event.id" class="hover:bg-gray-200 transition-all text-gray-800">
                            <td class="p-4">{{ event.summary}}</td>
                            <th class="p-4">{{event.location}}</th>
                            <td class="p-4">{{ formatDate(event.start?.dateTime) }}</td>
                            <td class="p-4">{{ formatDate(event.end?.dateTime) }}</td>
                            <td class="p-4">
                                <a :href="event.htmlLink" target="_blank" class="view-link">View Event</a>
                            </td>
                            <td class="p-4">
                                <span class="text-gray-700 text-lg" v-if="event.deleted">Deleted</span>
                                <button v-else class="view-link" @click="deleteEvent(event.id)">Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="flex flex-row justify-center items-center p-3 gap-3 bg text-warmGray-100 bg-transparent">
                        <div class="pagination mt-8">
                            <button @click="changePage('prev')" :disabled="currentPage === 1">Previous</button>
                            <span>Page {{ currentPage }} of {{ totalPages }}</span>
                            <button @click="changePage('next')" :disabled="currentPage === totalPages">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from "axios";
import { format } from "date-fns";
import router from "@/router";


const events = ref([]);
const loading = ref(true);
const currentPage = ref(1);
const perPage = 5;
const totalPages = computed(() => {
    return Math.ceil(events.value.length / perPage);
});
const paginatedEvents = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    const end = currentPage.value * perPage;
    return events.value.slice(start, end);
});
const changePage = (direction) => {
    if (direction === 'prev' && currentPage.value > 1) {
        currentPage.value--;
    } else if (direction === 'next' && currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};
const formatDate = (date) => {
    return date ? format(new Date(date), 'yyyy-MM-dd HH:mm:ss') : '';
};

const deleteEvent = async (eventId) => {
    try {
        const response = await axios.delete(
            `http://127.0.0.1:8000/api/google/delete-event/${eventId}`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                }
            }
        );
        console.log('Event deleted:', response.data);
        if (response.data.success) {

            const event = events.value.find(event => event.id === eventId);
            if (event) {
                event.deleted = true;
            }
            setTimeout(() => {
                location.reload();
            },1000)

        }
    } catch (error) {
        console.error('Error deleting event:', error);
    }
};

onMounted(() => {
    const getItems = () => {
        try {
            loading.value = false;
            const token = localStorage.getItem('token');
            axios.get('http://127.0.0.1:8000/api/google/calendar-events', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((data) => {
                events.value = data.data.events?.items || [];
            }).catch(error => {
                console.log(error, ' error££££')
            })
        } catch (error) {
            console.error('Error loading events:', error);
        }
    }
    setTimeout(() => {
        getItems();
    }, 1000);
});
</script>
<style>
.event-list {
    list-style: none;
    padding: 0;
}
.view-link {
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: 1px solid #007bff;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.view-link:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}
.view-link:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
button.view-link {
    background-color: #ff5c5c;
    border-color: #ff5c5c;
}
button.view-link:hover {
    background-color: #ff4747;
    border-color: #ff4747;
}
.pagination {
    text-align: center;
    margin-top: 20px;
}
.pagination button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.pagination button:disabled {
    background-color: darkslategray;
    cursor: not-allowed;
}
.pagination span {
    margin: 0 10px;
    font-size: 1.1rem;
    color: black;
}
@media (max-width: 768px) {
    .view-link {
        padding: 6px 10px;
        font-size: 0.9rem;
    }
    .pagination button {
        padding: 8px 12px;
        font-size: 0.9rem;
    }
    .pagination span {
        font-size: 0.9rem;
    }
}
@media (max-width: 500px) {
    .view-link {
        padding: 5px 8px;
        font-size: 0.85rem;
    }
    .pagination button {
        padding: 6px 10px;
        font-size: 0.85rem;
    }
    .pagination span {
        font-size: 0.85rem;
    }
}
</style>