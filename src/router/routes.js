import HomePage from "@/components/HomePage/HomePage.vue";
import WorkPage from "@/components/HomePage/WorkPage.vue";
import FormFooter from "@/components/HeaderFooter/FormFooter.vue";
import OurProcessHome from "@/components/OurProcess/OurProcessHome.vue";
import PortfolioHome from "@/components/Portfolio/PortfolioHome.vue";
import AboutPage from "@/components/AboutPage/AboutPage.vue";
import AgentHome from "@/components/AgentPage/AgentHome.vue";
import LoginPage from "@/components/Login/LoginPage.vue";
import RegisterPage from "@/components/Login/RegisterPage.vue";
import PartnersPage from "@/components/AboutPage/PartnersPage.vue";
import UserBookings from "@/components/UserBookings.vue";
import UserEvents from "@/components/UserEvents.vue";
import AddEvents from "@/components/AddEvents.vue";
import ChatHome from "@/ChatHome.vue";

export default [
    {
        path: '/',
        component: HomePage,
        name: 'home',
    },
    {
        path: '/why-boutiq',
        component: WorkPage,
        name: 'why-boutiq',
    },
    {
        path: '/contact',
        component: FormFooter,
        name: 'contact',
    },
    {
        path: '/our-process',
        component: OurProcessHome,
        name: 'our-process',
    },
    {
        path: '/portfolio',
        component: PortfolioHome,
        name: 'portfolio',
    },
    {
        path: '/about-page',
        component: AboutPage,
        name: 'about-page',
    },
    {
        path: '/agent-page',
        component: AgentHome,
        name: 'agent-page',
    },
    {
        path: '/login-page',
        component: LoginPage,
        name: 'login-page',
    },
    {
        path: '/register-page',
        component: RegisterPage,
        name: 'register-page',
    },
    {
      path: '/partners',
      component: PartnersPage,
      name: 'partners',
    },
    {
        path: '/user/bookings',
        component: UserBookings,
        name: 'bookings'
    },
    {
        path: '/user/events',
        component: UserEvents,
        name: 'events'
    },
    {
        path: '/user/add-events',
        component: AddEvents,
        name: 'add-events'
    },
    {
        path: '/user/chat',
        component: ChatHome,
        name: 'chat'
    }
];