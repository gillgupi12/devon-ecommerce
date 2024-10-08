import {  TextInput } from '@mantine/core';
import CustomButton from '../../atoms/button';
import api from '../../../api/auth'
import { Container } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { isLoginResponse } from '../../../utils/responses';


const LoginPage: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate()

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            username: '',
            password: '',
        },
        validate: {
            username: (value) => value.length < 2 ? 'Please input username' : null,
            password: (value) => value.length < 2 ? 'Please input password' : null,
        },
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setLoading(true)
        form.validate();
        if (form.isValid()) {
            try {
                const response = await api.login({ userName: form.getValues().username, password: form.getValues().password })
                if ('error' in response) {
                    setErrorMessage(response.message);
                    notifications.show({
                        title: 'Error',
                        message: `${response.message}`,
                        position: 'top-right',
                        color: 'red'
                    })
  
                } else if(isLoginResponse(response)) {
                    setErrorMessage(null);
                    navigate('/')
                    notifications.show({
                        title: 'Success',
                        message: `Welcome back, ${response.user.userName}!`,
                        position: 'top-right',
                        color: 'green'
                    })

                }
            } catch (err) {
                setErrorMessage('An unexpected error occurred. Please try again later.');
            }
        }
        setLoading(false)

    }
    return (
        <>
            <Container size={'xs'} py={35} bg={'white'} className='border rounded my-6'>
                <p className="text-xl font-semibold pb-4">Log into your Devondemo account</p>
                <form onSubmit={handleSubmit} className='space-y-3'>
                    <TextInput label="Username"
                        placeholder="Username"
                        {...form.getInputProps("username")}
                    />
                    <TextInput label="Password"
                        placeholder="Password"
                        type='password'
                        {...form.getInputProps("password")}

                    />
                    <small className="text-red-500">{errorMessage}</small>
                    <div className='flex flex-row justify-between items-center justify-center'>
                        <Link to="/forgot-password" className='text-sm underline text-red-500'>Forgot Password?</Link>
                        <CustomButton loading={loading} disabled={loading} type="submit" className='w-1/4' color={'black'} > {loading ? 'Logging in...' : 'Login'}</CustomButton>
                    </div>
                </form>
            </Container>

        </>
    )
}

export default LoginPage