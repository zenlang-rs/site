"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../contextapi/ThemeContext";

export default function Forgotpassword() {
  const { darkMode } = useContext(ThemeContext);

  const [passwordError, setPasswordError] = useState("");
  const sendMail = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const host = process.env.SERVER_HOSTNAME || "http://localhost:8000";
    console.log(data);
    const response = await fetch(`${host}/api/send_email/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (!response.ok) {
      console.error("HTTP error", response.status);
    } else {
      const result = await response.text();
      console.log(result);
    }
  };
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (event) => {
    if (!validatePassword(event.target.value)) {
      setPasswordError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
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
                FORGOT PASSWORD
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
            onSubmit={(e) => sendMail(e)}
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

            <div className="text-center mb-1">
              <button className="w-full px-4 py-2  text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                GET PASSWORD
              </button>
            </div>
            <div></div>
            <div></div>
          </form>
        </div>
      </main>
    </div>
  );
}
