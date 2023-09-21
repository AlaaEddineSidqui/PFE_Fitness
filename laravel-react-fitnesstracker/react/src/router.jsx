import { Navigate, createBrowserRouter } from "react-router-dom"
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Workouts from "./views/Workouts";
import Goals from "./views/Goals";
import Profile from "./views/Profile";
import Settings from "./views/Settings";
import ExerciseDetail from "./views/ExerciseDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home" />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/exercise/:id',
                element: <ExerciseDetail />
            },
            {
                path: '/workouts',
                element: <Workouts />
            },
            {
                path: '/goals',
                element: <Goals />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/settings',
                element: <Settings />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router;