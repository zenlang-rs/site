"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { ThemeContext } from "../../components/contextapi/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignUp() {
  const router = useRouter();
  const { darkMode } = useContext(ThemeContext);
  const [passwordError, setPasswordError] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("uname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const data = { name, username, email, password };
    const host = process.env.SERVER_HOSTNAME || "http://localhost:8000";
    const id = toast.loading("Checking Credentials...", {
      position: toast.POSITION.TOP_RIGHT,
    });
    await fetch(`${host}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response
          .json()
          .then((result) => {

            if (result.token === null) {
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
                [500]
              );
            } else {
              const Token = result.token;
              sessionStorage.setItem("jwtToken", Token);
              setTimeout(function () {
                toast.update(id, {
                  render: "Sign Up Successfully",
                  type: "success",
                  isLoading: false,
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 1500,
                });
              }, []);
              router.push("/");
            }
          })
          .catch((error) => {
            setTimeout(
              function () {
                toast.update(id, {
                  render: result.message || error,
                  type: "error",
                  isLoading: false,
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 1000,
                });
              },
              [500]
            );
          });
      })
      .catch((err) => {
        setTimeout(
          function () {
            toast.update(id, {
              render: err,
              type: "error",
              isLoading: false,
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 1000,
            });
          },
          [500]
        );
      });
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
      style={{
        backgroundImage: `url(${backgroundImageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ToastContainer />

      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div
          className={
            darkMode
              ? "max-w-lg w-full text-white px-5 rounded-md py-4 bg-gray-800 shadow-lg"
              : "max-w-lg w-full text-gray-600 px-5 rounded-md py-4 bg-white shadow-lg"
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
                CREATE NEW ACCOUNT
              </h3>
              <p className={darkMode ? "text-white mt-4" : "mt-4"}>
                Already have an account?{" "}
                <Link href="/login">
                  <span className="font-medium text-indigo-600 hover:text-indigo-500">
                    log-in
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              handleSignUp(e);
            }}
            className="mt-8 space-y-5 mb-5"
          >
            <div>
              <label
                htmlFor="name"
                className={darkMode ? "font-medium text-white" : "font-medium"}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="uname"
                className={darkMode ? "font-medium text-white" : "font-medium"}
              >
                UserName
              </label>
              <input
                id="uname"
                name="uname"
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={darkMode ? "font-medium text-white" : "font-medium"}
              >
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
              <label
                htmlFor="pass"
                className={darkMode ? "font-medium text-white" : "font-medium"}
              >
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
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
