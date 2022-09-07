import React from 'react'
import {Navigate,Route, Routes } from 'react-router-dom'
import {Dashboard, Account, ConfigTF} from '../pages'

export const DashboardRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path='dashboard/account' element={<Account />} />
      <Route path='dashboard/tf' element={<ConfigTF />} />
    </Routes>
    </>
  )
}
