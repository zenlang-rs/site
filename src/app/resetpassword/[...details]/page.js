"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";
import "react-toastify/dist/ReactToastify.css";

export default function ResetPassword({ params }) {
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setDarkMode(currentTheme === "dark");
  }, [systemTheme, theme]);

  const email = decodeURIComponent(params.details[0]);
  const verification_token = decodeURIComponent(params.details[1]);
  const resetpass = async (e) => {
    e.preventDefault();
    const new_password = document.getElementById("pass").value;
    const host = process.env.SERVER_HOSTNAME || "http://localhost:8000";
    const data = { email, new_password, verification_token };
    const id = toast.loading("Resetting Password", {
      position: toast.POSITION.TOP_RIGHT,
    });
    await fetch(`${host}/api/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json().then((result) => {
          if (result.status_code === 200) {
            setTimeout(function () {
              toast.update(id, {
                render: "Password Reset Successfully",
                type: "success",
                isLoading: false,
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
              });
              setTimeout(function () {
                router.push("/login");
              }, 1500);
            }, 1500);
          } else {
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
  const [passwordError, setPasswordError] = useState("");
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_\-%*?&])[A-Za-z\d_@$\-!%*?&]{6,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (event) => {
    if (!validatePassword(event.target.value)) {
      setPasswordError(
        "Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      );
    } else {
      setPasswordError("");
    }
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
                RESET PASSWORD
              </h3>
            </div>
          </div>
          <form
            onSubmit={(e) => resetpass(e)}
            className="mt-8 space-y-9 ml-20px"
          >
            <div>
              <label htmlFor="pass" className="font-medium">
                New Password
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
                RESET PASSWORD
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
