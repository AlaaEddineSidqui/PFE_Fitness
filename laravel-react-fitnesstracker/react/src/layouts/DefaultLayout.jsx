import React from 'react'
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import { Box } from "@mui/material"
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import Workouts from '../views/Workouts'
import Goals from '../views/Goals'
import Profile from '../views/Profile'
import Settings from '../views/Settings'
import Navbar from '../components/Navbar'
import ExerciseDetail from '../views/ExerciseDetail'
import Footer from '../components/Footer'

export default function DefaultLayout() {
  const { user, token } = useStateContext()


  if (!token) {
    return <Navigate to="/login" />
  }


  return (
    <>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
      </Box>
      <Outlet />
      <Footer />
    </>

  )
}
