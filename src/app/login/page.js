"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ThemeContext } from "../../app/contextapi/ThemeContext";

export default function Login() {
  const router = useRouter();

  const { darkMode } = useContext(ThemeContext);
  const [passwordError, setPasswordError] = useState("");
  const handleLoginIn = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const data = { email, password };
    const host = process.env.SERVER_HOSTNAME || "http://localhost:8000";
    console.log(data);
    const response = await fetch(`${host}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("HTTP error", response.status);
    } else {
      const result = await response.text();
      router.push("/");
      console.log(result);
    }
  };
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_\-%*?&])[A-Za-z\d_@$\-!%*?&]{6,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (event) => {
    if (!validatePassword(event.target.value)) {
      setPasswordError(
        "Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const backgroundImageURL = "/zen-lang-img.jpg";

  return (
    <div
      className={darkMode ? "ag dark" : "ag"}
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
    >
      <main className="w-full h-screen flex flex-col items-center justify-center px-4 ">
        <div
          className={
            darkMode
              ? "max-w-md w-full text-white px-5 rounded-md py-4 bg-gray-800 shadow-lg"
              : "max-w-md w-full text-gray-600 px-5 rounded-md py-4 bg-gray-50 shadow-lg"
          }
        >
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3
                className={
                  darkMode
                    ? "text-white text-2xl font-bold sm:text-3xl"
                    : "text-gray-800 text-2xl font-bold sm:text-3xl"
                }
              >
                Log in to your account
              </h3>
              <p className="">
                Don&apos;t have an account?{" "}
                <Link href="/signup">
                  <span className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign up
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => handleLoginIn(e)}
            className="mt-8 space-y-9 ml-20px"
          >
            <div>
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="pass" className="font-medium">
                Password
              </label>
              <input
                id="pass"
                name="pass"
                type="password"
                required
                onChange={handlePasswordChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {passwordError && (
                <small style={{ color: "red" }}>{passwordError}</small>
              )}
            </div>
            <div className="text-center mb-1">
              <button className="w-full px-4 py-2  text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Create Account
              </button>
              <Link href="/forgotpassword">
                <span className="hover:text-indigo-600 pt-4">
                  Forgot password?
                </span>
              </Link>
            </div>

            <div></div>
            <div></div>
          </form>
        </div>
      </main>
    </div>
  );
}
