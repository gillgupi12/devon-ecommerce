
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { TextInput } from '@mantine/core';
import CustomButton from '../atoms/button';
import api from '../../api/auth'
import { Container } from '@mantine/core';

const ResetPasswordPage: React.FC = () => {

    const { token } = useParams()
    const [newPassword, setNewPassowrd] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('')



    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMessage('')
        if(newPassword === '' || confirmPassword === ''){
            setMessage('Please input valid password! It cannot be blank!');
            return
        }
        if (newPassword !== confirmPassword && newPassword !== '' && confirmPassword !== '') {
            console.log('lol')
            setMessage('Passwords do not match.');
            return;
        }
        try {
            if (!token) {
                throw new Error('Token invalid')
            }
            const response = await api.resetPassword({ token, password: newPassword })
            console.log(`Main res ${response}`)
            // if (response.ok) {
            //     setMessage('Password reset successfully!');
            // } else {
            //     setMessage('Failed to reset password. Please try again.');
            // }

        } catch (error) {
            setMessage('An error occured, Please try again later.')
        }
    }

    return (
        <>
        ok
            <Container size={'xs'} py={35} bg={'white'} className='border rounded'>
                <p className="text-xl font-semibold pb-4">Reset your password</p>
                <form onSubmit={handleSubmit} className='space-y-3'>
                    <TextInput label="New Password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(event) => setNewPassowrd(event.target.value)}
                    />
                    <TextInput label="Confirm Password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    <div className="flex justify-end">
                        <CustomButton type="submit" color={'black'} >Reset Password</CustomButton>
                    </div>
                </form>

                    {message}
            </Container>
        </>
    )
}

export default ResetPasswordPage;