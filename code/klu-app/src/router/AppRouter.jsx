import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginView, Home, TwoFactor, ForgottenPassword, ResetPassword } from '../auth/';
import { DashboardRoutes } from '../dashboard';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path='home/*' element={
          <PublicRoute>
            <Routes>
              <Route path='/*' element={<Home />} />
              {/* <Route path='home' element={<Home />} /> */}
              <Route path='login' element={<LoginView />} />
              <Route path='twof' element={<TwoFactor />} />
              <Route path='fpassword' element={<ForgottenPassword />} />
              <Route path='rpassword' element={<ResetPassword />} />
              {/* <Route path='/*' element={<Navigate to='/home' />} /> */}
            </Routes>
          </PublicRoute>
        } />


        <Route path='/*' element={
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        } />

      </Routes>
    </>
  )
}
