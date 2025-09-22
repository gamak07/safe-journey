"use client";
import React, { useState } from "react";
import Button from "../../ui/Button";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
  });

  const [error, setError] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    agree?: string;
  }>({});
  const [success, setSuccess] = useState<boolean>(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newError: {
      name?: string;
      email?: string;
      phone?: string;
      password?: string;
      agree?: string;
    } = {};
    if (!form.name) {
      newError.name = "Name is required.";
    }
    if (!form.email) {
      newError.email = "Email is required.";
    } else if (!emailRegex.test(form.email)) {
      newError.email = "Please enter a valid email address.";
    }
    if (!form.phone) {
      newError.phone = "Phone number is required.";
    } else if (!phoneRegex.test(form.phone)) {
      newError.phone = "Please enter a valid phone number.";
    }
    if (!form.password) {
      newError.password = "Password is required.";
    }
    if (form.password.length < 6) {
      newError.password = "Password must be at least 6 characters long.";
    }

    if (!form.agree) {
     alert("You must agree to the terms.");
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      setSuccess(false);
      return
    }

    setError({});
    setSuccess(true);
    console.log(form);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {error.name && (
          <p className="text-sm text-red-600 italic">{error.name}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {error.email && (
          <p className="text-sm text-red-600 italic">{error.email}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {error.phone && (
          <p className="text-sm text-red-600 italic">{error.phone}</p>
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
          placeholder="Create a strong password"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {error.password && (
          <p className="text-sm text-red-600 italic">{error.password}</p>
        )}
      </div>
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          id="agree"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="agree" className="ml-2 text-sm text-gray-700">
          I agree to the Terms of Service and Privacy Policy
        </label>
      </div>
      <Button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-blue-600 py-3 text-lg font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-700"
      >
        Create Account
      </Button>
    </form>
  );
}
