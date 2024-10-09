import { lazy } from 'react';

// Lazy load pages for better performance (optional)
const LoginPage = lazy(() => import('../components/pages/auth/login'));
const RegisterPage = lazy(() => import('../components/pages/auth/register'));
const ForgotPasswordPage = lazy(() => import('../components/pages/auth/forgot-password'));
const ResetPasswordPage = lazy(() => import('../components/pages/auth/reset-password'));
const ProfilePage = lazy(() => import('../components/pages/user/profile'));
const ProductPage = lazy(() => import('../components/pages/product/index'));
const ProductDetails = lazy(() => import('../components/pages/product/product-detail'));
const AboutPage = lazy(() => import('../components/pages/about/index'));
const ContactPage = lazy(() => import('../components/pages/contact/index'));
const HomePage = lazy(() => import('../components/pages/home/index'));


export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/forgot-password", element: <ForgotPasswordPage /> },
    { path: "/reset-password/:token", element: <ResetPasswordPage /> },
    { path: "/profile/:userId", element: <ProfilePage /> },
    { path: "/products", element: <ProductPage /> },
    { path: "/products/:productId", element: <ProductDetails /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact-us", element: <ContactPage /> },
];