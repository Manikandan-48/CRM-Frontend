import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Navbar } from "../../Navbar/navbar";

export function ForgotPasswordman() {

  const [email,setEmail] = useState("")
  return (
    <div className="position">

      <div>
        <Navbar/>
      </div>

      <div className="login-section pt-5 mt-5">

        <h1 className="text-center">Forgot Password🔓</h1>

      <TextField
        style={{
          backgroundColor: "white",
          marginTop: "15px",
          width: "100%",
          borderRadius: "10px",
        }}

        label="Mail id📩"
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="Enter email id"
        value={email}
      />

      <Button
        sx={{
          ":hover": {
            bgcolor: "black",
            color: "white",
          },

          marginTop: "15px",
          width: "100%",
          color: "black",
          transition: ".5s ease-in-out",
          borderRadius: "10px",

        }}

        type="submit"
        variant="text"
      >
        Send verification code🛅
      </Button>

      <div className="pt-2 text-center">

        <span >New user❓</span>

        <Link className="text-decoration-none" to="/employeesignup"> Create an account ❗</Link>

      </div>

    </div>

    </div>
  );
}
