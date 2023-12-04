"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
  const [darkMode, setDarkMode] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setDarkMode(currentTheme === "dark");
  }, [systemTheme, theme]);

  const sendMail = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const host = process.env.SERVER_HOSTNAME || "http://localhost:8000";
    const id = toast.loading("Checking Credentials...", {
      position: toast.POSITION.TOP_RIGHT,
    });
    await fetch(`${host}/api/send_email/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        response.json().then((result) => {
          if (result.status_code !== 200) {
            setTimeout(
              function () {
                toast.update(id, {
                  render: result.message,
                  type: "error",
                  isLoading: false,
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 1000,
                });
              },
              [500],
            );
          } else {
            setTimeout(function () {
              toast.update(id, {
                render: "Email Sent Successfully",
                type: "success",
                isLoading: false,
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
              });
            }, []);
          }
        });
      })
      .catch((error) => {
        setTimeout(
          function () {
            toast.update(id, {
              render: error,
              type: "error",
              isLoading: false,
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 1000,
            });
          },
          [500],
        );
      });
  };
  const backgroundImageURL = "/zen-lang-img.jpg";

  return (
    <div
      className={
        darkMode ? "bg-no-repeat bg-cover ag dark" : "bg-no-repeat bg-cover ag"
      }
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
    >
      <ToastContainer />
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
                CHANGE PASSWORD
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
