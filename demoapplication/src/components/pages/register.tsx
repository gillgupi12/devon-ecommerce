import { useState } from 'react';
import { TextInput } from '@mantine/core';
import CustomButton from '../atoms/button';
import { Container } from '@mantine/core';
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
            <Container size={'xs'} py={35} bg={'white'} className='border rounded'>
                <p className="text-xl font-semibold leading-0">Don't have a devondemo account? Sign Up!</p>
                <p className="text-sm  font-light pb-4 leading-0">Let's get started! </p>
                <form onSubmit={handleSubmit} className='space-y-3 '>
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
                    <div className="flex justify-end">
                        <CustomButton type="submit" color={'black'} >Register</CustomButton>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default RegisterPage