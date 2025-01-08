"use client";
import React, { useState } from "react";
import Link from "next/link";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "@/firebaseConfig";

export default function SigninWithPassword() {
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [error, setError] = useState<string | null>(null);
  const auth = getAuth(firebaseApp); // Initialize Firebase Auth

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      // Sign in using Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful sign-in here (e.g., redirect or update UI)
      console.log("User signed in successfully");
    } catch (err: any) {
      setError(err.message); // Set error message if sign-in fails
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="password"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
            autoComplete="password"
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      {error && (
        <div className="mb-4 text-sm text-red-500">
          {error} {/* Display error message */}
        </div>
      )}

      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-4 py-3 text-white focus:outline-none"
      >
        Sign In
      </button>
    </form>
  );
}
