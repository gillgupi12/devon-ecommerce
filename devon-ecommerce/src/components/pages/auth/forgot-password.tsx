import { useState } from 'react';
import { Group, TextInput } from '@mantine/core';
import CustomButton from '../../atoms/button';
import { Container } from '@mantine/core';
import api from '../../../api/auth'
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { isForgotPasswordResponse } from '../../../utils/responses';

const ForgotPasswordPage: React.FC = () => {

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues:{
            email: ''
        },
        validate: {
            email: (value) => {
                if (!value) return 'Please input email';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    return 'Please input a valid email address';
                }
                return null;
            }
        }
    })
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setLoading(true)
        form.validate();
        if (form.isValid()) {
            try {
                const response = await api.forgotPassword({ email: form.getValues().email, })
                console.log(response)
                if ('error' in response) {
                    setErrorMessage(response.message);
                    notifications.show({
                        title: 'Error',
                        message: `${response.message}`,
                        position: 'top-right',
                        color: 'red'
                    })

                } else if (isForgotPasswordResponse(response)) {
                    setErrorMessage(null);
                    notifications.show({
                        title: 'Success',
                        message: `${response.message}, Please check your email and follow the instructions to reset your password!`,
                        position: 'top-right',
                        color: 'green'
                    })

                }
            } catch (err) {
                console.log(err)
                setErrorMessage('An unexpected error occurred. Please try again later.');
                notifications.show({
                    title: 'Error',
                    message: 'An unexpected error occurred. Please try again later.',
                    position: 'top-right',
                    color: 'red'
                })
            }
        }
        setLoading(false)
    }

    return (
        <>
            <Container size={'xs'} py={35} bg={'white'} className='border rounded my-6'>
                <p className="text-xl font-semibold">Need to reset your password?</p>
                <p className="text-sm  font-light pb-4 leading-0">No problem. Please type in your account email address and we’ll send you a link to reset your password.</p>
                <form onSubmit={handleSubmit} className='space-y-2'>
                    <TextInput label="Email"
                        placeholder="Email"
                        {...form.getInputProps('email')}
                    />
                     <small className="text-red-500">{errorMessage}</small>
                    <Group justify="flex-end">
                    <CustomButton loading={loading} disabled={loading} type="submit"  color={'black'} > {loading ? 'Loading..' : 'Reset Password'}</CustomButton>
                    </Group>

                </form>
            </Container>
        </>
    )
}

export default ForgotPasswordPage