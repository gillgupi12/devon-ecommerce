import { useState } from 'react';
import { TextInput } from '@mantine/core';
import CustomButton from '../atoms/button';
import { Container } from '@mantine/core';
import api from '../../api/auth/index'

const ForgotPasswordPage: React.FC = () => {
    const [email, setEmail] = useState('')
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const response = await api.forgotPassword({ email: email })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <Container size={'xs'} py={35} bg={'white'} className='border rounded'>
            <p className="text-xl font-semibold">Need to reset your password?</p>
            <p className="text-base  font-light pb-4 leading-0">No problem. Please type in your account email address and we’ll send you a link to reset your password.</p>
            <form onSubmit={handleSubmit} className='space-y-2'>
                <TextInput label="Email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <CustomButton type="submit">Reset Password</CustomButton>
            </form>
            </Container>
        </>
    )
}

export default ForgotPasswordPage