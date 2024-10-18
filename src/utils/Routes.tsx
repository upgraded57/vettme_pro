import Skeleton from "@/components/Skeleton";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import Index from "@/pages/user/auth/Index";
import AppIndex from "@/pages/user/dashboard/Index";

import { lazy, Suspense } from "react";
const ConfirmMail = lazy(() => import("@/pages/user/auth/ConfirmMail"));
const VerifyEmail = lazy(() => import("@/pages/user/auth/VerifyEmail"));
const ForgotPassword = lazy(() => import("@/pages/user/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("@/pages/user/auth/ResetPassword"));
const Login = lazy(() => import("@/pages/user/auth/Login"));
const Register = lazy(() => import("@/pages/user/auth/Register"));
const Dashboard = lazy(() => import("@/pages/user/dashboard/Dashboard"));
const Verifications = lazy(
  () => import("@/pages/user/verification/Verifications")
);
const Verification = lazy(
  () => import("@/pages/user/verification/Verification")
);
const Wallet = lazy(() => import("@/pages/user/wallet/Wallet"));
const Notification = lazy(
  () => import("@/pages/user/notification/Notification")
);
const Support = lazy(() => import("@/pages/user/support/Support"));
const Account = lazy(() => import("@/pages/user/account/Account"));
const Personnel = lazy(() => import("@/pages/user/personnel/Personnel"));
const NewVerification = lazy(() => import("@/pages/user/new/NewVerification"));
const Upload = lazy(() => import("@/pages/user/upload/Upload"));
const FormSetup = lazy(() => import("@/pages/user/setup/FormSetup"));
const Forms = lazy(() => import("@/pages/user/forms/Forms"));

export const routes = [
  {
    path: "/auth",
    element: (
      <AuthLayout>
        <Index />
      </AuthLayout>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "confirm-mail",
        element: <ConfirmMail />,
      },
      {
        path: "verify-mail",
        element: <VerifyEmail />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },

  {
    path: "/",
    element: (
      <DashboardLayout>
        <AppIndex />
      </DashboardLayout>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "verifications",
        element: <Verifications />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "notifications",
        element: <Notification />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "verifications/:verification_id",
        element: <Verification />,
      },
      {
        path: "verifications/:verification_id/personnel/:personnel_id",
        element: <Personnel />,
      },
      {
        path: "verifications/new",
        element: <NewVerification />,
      },
      {
        path: "verifications/new/upload",
        element: <Upload />,
      },
      {
        path: "verifications/new/form",
        element: <FormSetup />,
      },
      {
        path: "verifications/new/:type/setup",
        element: <FormSetup />,
      },
    ],
  },

  {
    path: "/forms/:form_id",
    element: (
      <Suspense fallback={<Skeleton />}>
        <Forms />
      </Suspense>
    ),
  },
];
