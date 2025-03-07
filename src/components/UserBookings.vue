<template>

    <div class="bookings flex items-center justify-center p-32">
        <div class="bg-gray-900  rounded-xl shadow-lg p-12" v-if="loading">Loading bookings...</div>
        <div v-else>
            <div class="flex justify-center p-8">
                <div class="w-full max-w-5xl ">
                    <div class="filters bg-gray-900 p-6 rounded-xl shadow-lg flex flex-wrap justify-center items-center gap-4">
                        <select
                            v-model="filters.status"
                            class="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">All Statuses</option>
                            <option value="accepted">Accepted</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                        <input
                            type="date"
                            v-model="filters.start"
                            class="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="date"
                            v-model="filters.end"
                            class="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            @click="fetchBookings"
                            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md"
                        >
                            Apply Filters
                        </button>
                    </div>
                    <table v-if="bookings.length" class="div1 w-full border-collapse rounded-lg overflow-hidden shadow-lg">
                        <thead class="bg-gray-800 text-white uppercase text-sm tracking-wider">
                        <tr>
                            <th class="p-4 text-left">Product</th>
                            <th class="p-4 text-left">Price ($)</th>
                            <th class="p-4 text-left">Date Start</th>
                            <th class="p-4 text-left">Date End</th>
                            <th class="p-4 text-left">Status</th>
                            <th class="p-4 text-left">Actions</th>
                        </tr>
                        </thead>
                        <tbody class="bg-gray-100 divide-y divide-gray-300">
                        <tr v-for="booking in bookings" :key="booking.id" class="hover:bg-gray-200 transition-all text-gray-800">
                            <td class="p-4">{{ booking.product.name}}</td>
                            <td class="p-4 font-semibold">{{ booking.price ? booking.price : booking.product.price }}</td>
                            <td class="p-4">{{ booking.start }}</td>
                            <td class="p-4">{{ booking.end }}</td>
                            <td class="p-4">
                            <span class="px-3 py-1 rounded-full text-white text-xs"
                                  :class="{
                                      'bg-green-500': booking.status === 'accepted',
                                      'bg-yellow-500': booking.status === 'pending',
                                      'bg-red-500': booking.status === 'cancelled'
                                  }">
                                {{ booking.status }}
                            </span>
                            </td>
                            <td class="flex p-4 justify-center">
                                <button v-if="booking.status !== 'cancelled'"
                                        @click="cancelSession(booking.session_id)"
                                        class="px-3 py-1 text-white bg-red-700 hover:bg-red-500 rounded-lg text-xs transition-all">
                                    Cancel
                                </button>
                                <StripeCheckout class="px-3 py-1 rounded-lg text-white text-xs transition-all" v-if="booking.status === 'cancelled'" :end="booking.end" :start="booking.start" :productId="booking.product_id"></StripeCheckout>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div v-else class="bg-gray-900  rounded-xl shadow-lg p-12">
                        <p class="text-gray-100 mt-4 text-center">No bookings found.</p>
                    </div>
                    <div class="flex flex-row justify-center items-center p-3 gap-3 bg text-warmGray-100 bg-transparent">
                        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
                        <span>Page {{ currentPage }} of {{ lastPage }}</span>
                        <button @click="nextPage" :disabled="currentPage === lastPage">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import axios from "axios";
import StripeCheckout from "@/components/Stripe/StripeCheckout.vue";

const bookings = ref([]);
const loading = ref(true);
const currentPage = ref(1);
const lastPage = ref(null);
const cancelMessage = ref("");
const filters = ref({
    status: "",
    start: "",
    end: "",
});
const nextPage = () => {
    if (currentPage.value < lastPage.value) {
        currentPage.value++;
        fetchBookings(currentPage.value);
    }
};
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        fetchBookings(currentPage.value);
    }
};
const fetchBookings = async (page = 1) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/bookings?page=${page}`, {
            params: filters.value,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        bookings.value = response.data.data;
        currentPage.value = response.data.current_page;
        lastPage.value = response.data.last_page;
    } catch (error) {
        console.error("Error fetching bookings:", error);
    } finally {
        loading.value = false;
    }
};
const cancelSession = async (sessionId) => {
    try {
        const response = await axios.post("http://localhost:8000/api/cancel-payment", {
            session_id : sessionId
        } , {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const booking = bookings.value.find(b => b.session_id === sessionId);
        if (booking) {
            booking.status = "cancelled";
        }
        cancelMessage.value = response.data.message;

    } catch (error) {
        cancelMessage.value = error.response?.data?.error || "Error cancelling session";
    }
};
onMounted(fetchBookings);
</script>

<style>
.bookings {
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
.filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.filters input,
.filters select,
.filters button {
    padding: 8px;
}
</style>
