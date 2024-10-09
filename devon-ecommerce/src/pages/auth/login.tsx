import { Container, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/auth'
import { RootState } from '../../stores';
import { login } from '../../stores/authSlice';
import { isLoginResponse } from '../../utils/responses';
import CustomButton from '../../components/atoms/button';


const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state: RootState)=> state.auth.isAuthenticated)

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

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

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
                    dispatch(login(response.user));
                    navigate('/')
                    notifications.show({
                        title: 'Success',
                        message: `Welcome back, ${response.user.userName}!`,
                        position: 'top-right',
                        color: 'green'
                    })

                }
            } catch (err) {
                console.log(err)
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
                        <CustomButton loading={loading} disabled={loading} type="submit" className='w-1/4' color={'blue'} > {loading ? 'Logging in...' : 'Login'}</CustomButton>
                    </div>
                </form>
            </Container>

        </>
    )
}

export default LoginPage