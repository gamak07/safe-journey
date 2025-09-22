"use client";
import React, { useState } from "react";
import Button from "../../ui/Button";

export default function Login() {
  const [form, setForm] = useState({
    identifier: "",
    password: "",
    remember: false,
  });

  const combinedRegex =
    /^(?:[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}|\+?[1-9]\d{1,14})$/;

  const [error, setError] = useState<{ identifier?: string; password?: string }>({});
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    const newError: { identifier?: string; password?: string } = {};
    e.preventDefault();
    if (!form.identifier) {
      newError.identifier = "Please fill in your email or phone number.";
      setError(newError);
      setSuccess(false);
    }

    if (!form.password) {
      newError.password = "Please fill in your password.";
      setError(newError);
      setSuccess(false);
    }

    if (!combinedRegex.test(form.identifier)) {
      newError.identifier = "Please enter a valid email or phone number.";
      setError(newError);
      setSuccess(false);
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setError({});
    console.log("Form submitted:", form);
    // alert("Login successful!");
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
        {error.identifier && <p className="mt-2 text-sm text-red-600 italic">{error.identifier}</p>}
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
        {error.password && <p className="mt-2 text-sm text-red-600 italic">{error.password}</p>}
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
      <Button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Sign In
      </Button>
    </form>
  );
}
