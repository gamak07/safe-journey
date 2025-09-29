import Link from "next/link";
import { FaShieldAlt } from "react-icons/fa";
import Login from "../../features/Authentication/Login";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg md:p-8">
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center space-x-2">
            <FaShieldAlt className="text-2xl text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              SafeJourney
            </span>
          </div>
          <h2 className="font-poppins text-2xl font-semibold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>
        <Login />

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              className="cursor-pointer font-medium text-blue-600 hover:text-blue-500"
              href="/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
