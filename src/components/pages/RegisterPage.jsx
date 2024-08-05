import React from 'react'
import { AuthLayout } from '../layouts/AuthLayout'
import { FormRegister } from '../fragments/auth/register/FormRegister'

export const RegisterPage = () => {
    return (
        <AuthLayout type='register'>
            <FormRegister />
        </AuthLayout>
    )
}
