import React, { useState } from "react";

const AuthPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="mx-auto max-w-md space-y-8 px-4">
      <div className="space-y-2 text-center">
        <p className="text-[11px] font-semibold tracking-[0.4em] text-neutral-400">
          {mode === "login" ? "WELCOME BACK" : "JOIN H&M"}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          {mode === "login" ? "Sign in to your account" : "Create an account"}
        </h1>
      </div>

      <div className="space-y-4">
        <div className="space-y-1 text-left text-xs font-semibold tracking-[0.2em] text-neutral-500">
          <label className="block">EMAIL</label>
          <input
            type="email"
            className="w-full rounded-full border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-1 text-left text-xs font-semibold tracking-[0.2em] text-neutral-500">
          <label className="block">PASSWORD</label>
          <input
            type="password"
            className="w-full rounded-full border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
            placeholder="••••••••"
          />
        </div>

        <button className="mt-4 w-full rounded-full bg-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-black">
          {mode === "login" ? "Login" : "Register"}
        </button>
      </div>

      <div className="text-center text-sm text-neutral-500">
        {mode === "login" ? (
          <p>
            New to H&M?{" "}
            <button
              type="button"
              className="font-semibold text-neutral-900 underline-offset-4 hover:underline"
              onClick={() => setMode("register")}
            >
              Create an account
            </button>
          </p>
        ) : (
          <p>
            Already a member?{" "}
            <button
              type="button"
              className="font-semibold text-neutral-900 underline-offset-4 hover:underline"
              onClick={() => setMode("login")}
            >
              Sign in
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;


