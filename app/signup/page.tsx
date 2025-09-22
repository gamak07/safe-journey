import { FaShieldAlt } from "react-icons/fa";
import Signup from "../../features/Authentication/Signup";
import Link from "next/link";

export default function SignupPage() {
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
            Create Account
          </h2>
          <p className="mt-2 text-gray-600">Join our safety community.</p>
        </div>

        <Signup />

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              className="cursor-pointer font-medium text-blue-600 hover:text-blue-500"
              href="/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
