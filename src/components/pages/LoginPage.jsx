import React from 'react'
import { AuthLayout } from '../layouts/AuthLayout'
import { FormLogin } from '../fragments/auth/login/FormLogin'

export const LoginPage = () => {
  return (
    <AuthLayout type='login'>
        <FormLogin/>
    </AuthLayout>
  )
}
