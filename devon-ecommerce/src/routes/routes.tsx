import { lazy } from "react";

// Lazy load pages for better performance (optional)
const LoginPage = lazy(() => import("../pages/auth/login"));
const RegisterPage = lazy(() => import("../pages/auth/register"));
const ForgotPasswordPage = lazy(() => import("../pages/auth/forgot-password"));
const ResetPasswordPage = lazy(() => import("../pages/auth/reset-password"));
const ProfilePage = lazy(() => import("../pages/user/profile"));
const ProductPage = lazy(() => import("../pages/product/index"));
const ProductDetails = lazy(() => import("../pages/product/product-detail"));
const AboutPage = lazy(() => import("../pages/about/index"));
const ContactPage = lazy(() => import("../pages/contact/index"));
const HomePage = lazy(() => import("../pages/home/index"));

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
