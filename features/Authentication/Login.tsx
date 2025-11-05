"use client";
import React, { useState } from "react";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";
import { login } from "../../hooks/useLogin";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({
    identifier: "",
    password: "",
    remember: false,
  });

  const combinedRegex =
    /^(?:[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}|\+?[1-9]\d{1,14})$/;

  // --- REFACTORED STATE ---
  const [error, setError] = useState<{
    identifier?: string;
    password?: string;
  }>({});
  // Replaced 'success' with 'isLoading' and 'apiError'
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  // -------------------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear all errors on a new submission
    setError({});
    setApiError(null);

    const newError: { identifier?: string; password?: string } = {};
    if (!form.identifier) {
      newError.identifier = "Please fill in your email or phone number.";
    }
    // 2. Only check regex if identifier is not empty
    else if (!combinedRegex.test(form.identifier)) {
      newError.identifier = "Please enter a valid email or phone number.";
    }
    // -----------

    // 3. Check for password
    if (!form.password) {
      newError.password = "Please fill in your password.";
    }

    // 4. Now, check if any errors were added
    if (Object.keys(newError).length > 0) {
      setError(newError); // Set all errors at once
      return; // Stop the submission
    }

    setIsLoading(true);
    try {
      // We don't need the 'result' variable here
      await login(form.identifier, form.password);

      // --- SUCCESS ---
      // No success message needed, just redirect immediately.
      // This is the best UX for login.
      router.push("/overview");
    } catch (err: any) {
      // --- ERROR ---
      // Show the specific error message from the API
      setApiError(
        err.message || "Login failed. Please check your credentials.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="identifier"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email or Phone
        </label>
        <input
          type="text"
          id="identifier"
          name="identifier"
          value={form.identifier}
          onChange={handleChange}
          placeholder="Enter your email or phone number"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {error.identifier && (
          <p className="mt-2 text-sm text-red-600 italic">{error.identifier}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {error.password && (
          <p className="mt-2 text-sm text-red-600 italic">{error.password}</p>
        )}
      </div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            checked={form.remember}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
          Forgot password?
        </a>
      </div>
      {/* --- API Feedback --- */}
      {apiError && (
        <div className="rounded-md border border-red-300 bg-red-50 p-3 text-center">
          <p className="text-sm font-medium text-red-700">{apiError}</p>
        </div>
      )}
      {/* -------------------- */}
      <Button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
