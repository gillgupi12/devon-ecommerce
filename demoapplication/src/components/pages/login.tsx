import { useState } from 'react';
import { TextInput } from '@mantine/core';
import CustomButton from '../atoms/button';
import api from '../../api/auth/index'

const LoginPage: React.FC = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const response = await api.login({ userName: username, password })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='space-y-2'>
                <TextInput label="Username"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <TextInput label="Password"
                    placeholder="Password"
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <CustomButton type="submit">Login</CustomButton>
            </form>
        </>
    )
}

export default LoginPage