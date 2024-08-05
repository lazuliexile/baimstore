import React from 'react'
import { InputForm } from '../../../elements/Input'
import userSVG from '../../../assets/user.svg'
import passwordSVG from '../../../assets/password.svg'
import { BtnPry } from '../../../elements/Button/BtnPry'
import { Link } from 'react-router-dom'
import { login } from '../../../../api/auth'

export const FormLogin = () => {

    const handleLogin =(event) => {
        event.preventDefault();
        const payload = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        

        const {response, status} = login(payload)
        
    }

    return (
        <form onSubmit={handleLogin} className='w-full h-fit'>
            <InputForm type="text" placeholder="username" nameSVG={userSVG} name='username' htmlfor />
            <InputForm type="password" placeholder="******" nameSVG={passwordSVG} name='password' />
            <BtnPry text="CONTINUE >" type="submit" />
            <p className="font-light text-base text-center">Are you newbie? <Link to="/register" className="font-bold">GET SARTED - IT'S FREE</Link></p>
        </form>
    )
}
