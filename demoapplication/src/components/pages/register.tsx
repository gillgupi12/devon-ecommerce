import { useState } from 'react';
import { TextInput } from '@mantine/core';
import CustomButton from '../atoms/button';
import api from '../../api/auth/index'

const RegisterPage: React.FC = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const response = await api.register({ userName: username, password, firstName, lastName, email })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='space-y-2 container-sm'>
                <TextInput label="First name"
                    placeholder="First name"
                    type='text'
                    className='flex-grow'
                    value={firstName}
                    onChange={(event) => setFirstname(event.target.value)}
                />
                <TextInput label="Last name"
                    placeholder="Last name"
                    className='flex-grow'
                    type='text'
                    value={lastName}
                    onChange={(event) => setLastname(event.target.value)}
                />

                <TextInput label="Email"
                    placeholder="Email"
                    className='flex-grow'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
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

export default RegisterPage