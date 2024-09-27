import { useState } from 'react';
import { TextInput } from '@mantine/core';
import CustomButton from '../atoms/button';
import api from '../../api/auth/index'
import { Container } from '@mantine/core';
import { Link } from 'react-router-dom';

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
            <Container size={'xs'} py={35} bg={'white'} className='border rounded'>
                <p className="text-xl font-semibold pb-4">Log into your Devondemo account</p>
                <form onSubmit={handleSubmit} className='space-y-3'>
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
                    <div className="w-full flex flex-row justify-between">
                        <Link to="/forgot-password" className='text-sm underline text-red-500'>Forgot Password?</Link>
                        <CustomButton type="submit" className='w-1/4' color={'black'} >Login</CustomButton>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default LoginPage