"use client";

import { authenticate } from "@/app/(dashboard)/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

import { useState } from "react";

const LoginForm = () => {
  const [err, setErr] = useState();

  // const [state, formAction] = useFormState(authenticate, undefined);

  const handleLogin = async (formData) => {
    // console.log(formData);
    const data = await authenticate(formData);

    data.error && setErr(data.error);
  };

  return (
    <form action={handleLogin} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {err && err}
    </form>
  );
};

export default LoginForm;
