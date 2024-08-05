import React from 'react'
import { InputForm } from '../../../elements/Input'
import userSVG from '../../../assets/user.svg'
import passwordSVG from '../../../assets/password.svg'
import emailSVG from '../../../assets/email.svg'
import { BtnPry } from '../../../elements/Button/BtnPry'
import { Link } from 'react-router-dom'

export const FormRegister = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const payload = {
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        console.log(payload)
    }
    return (
        <form onSubmit={handleLogin} className='w-full h-fit'>
            <InputForm type="text" placeholder="email" nameSVG={emailSVG} name='email' />
            <InputForm type="text" placeholder="username" nameSVG={userSVG} name='username' />
            <InputForm type="password" placeholder="******" nameSVG={passwordSVG} name='password' />
            <BtnPry text="SIGN UP >" type="submit" />
            <p className="font-light text-base text-center">Already a Member? <Link to="/login" className="font-bold">LOG IN</Link></p>
        </form>
    )
}
