import React, { useState } from "react";

const AuthPage = ({ goBack }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f8f9fa",
      fontFamily: "Arial, sans-serif",
      padding: "2rem"
    }}>
      <div style={{
        background: "#fff",
        padding: "3rem 2rem",
        borderRadius: "20px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "1rem", color: "#7D00FF" }}>{isSignUp ? "Sign Up" : "Sign In"}</h2>

        <button style={{
          width: "100%",
          padding: "0.8rem",
          marginBottom: "1rem",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontWeight: "600",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          fontSize: "15px"
        }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" style={{ width: "18px" }} />
          Sign {isSignUp ? "Up" : "In"} with Google
        </button>

        <button style={{
          padding: "0.7rem 1rem",
          backgroundColor: "#7D00FF",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "600",
          width: "100%",
          marginBottom: "1rem"
        }}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span style={{ color: "#7D00FF", cursor: "pointer", fontWeight: "600" }} onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>

        <button onClick={goBack} style={{ marginTop: "1rem", background: "none", border: "none", color: "#7D00FF", cursor: "pointer", fontWeight: "600" }}>
          ← Back
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
