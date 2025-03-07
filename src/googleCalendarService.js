import axios from 'axios';

const API_URL = 'https://www.googleapis.com/calendar/v3';
const calendarId = 'primary';

export default {
    async listUpcomingEvents(token) {
        try {
            const response = await axios.get(`${API_URL}/calendars/${calendarId}/events`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    timeMin: new Date().toISOString(),
                    showDeleted: false,
                    singleEvents: true,
                    maxResults: 10,
                    orderBy: 'startTime',
                },
            });
            return response.data.items;
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error;
        }
    },
};
