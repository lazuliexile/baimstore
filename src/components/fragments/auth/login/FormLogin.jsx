import React from 'react'
import { InputForm } from '../../../elements/Input'
import userSVG from '../../../assets/user.svg'
import passwordSVG from '../../../assets/password.svg'
import { BtnPry } from '../../../elements/Button/BtnPry'
import { Link } from 'react-router-dom'
import { login } from '../../../../api/auth'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCredential } from '../../../../redux/slices/authSlice'

export const FormLogin = () => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState("true")
    const user = useSelector((state) => state.auth)
    console.log(user)

    const handleLogin = async (event) => {
        event.preventDefault(); 
        const payload = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        const { status, response} = await login(payload)
        const { token } = response.data;

        setIsLogin(status)
        console.log("status clg", token)
        dispatch(setCredential({token}))
    }

    return (
        <form onSubmit={handleLogin} className='w-full h-fit'>
            {!isLogin && <p className='text-red-500 mb-2'>Username or Password is incorrect</p>}
            <InputForm type="text" placeholder="username" nameSVG={userSVG} name='username' htmlfor />
            <InputForm type="password" placeholder="******" nameSVG={passwordSVG} name='password' />
            <BtnPry text="CONTINUE >" type="submit" />
            <p className="font-light text-base text-center">Are you newbie? <Link to="/register" className="font-bold">GET SARTED - IT'S FREE</Link></p>
        </form>
    )
}
