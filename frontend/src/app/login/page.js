"use client";

import { useState } from "react";
import api from "../services/api"; // Certifique-se de que esse serviço está configurado corretamente

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password }); // Envia email e senha para a API
      if (response.status === 200) {
        alert("Login bem-sucedido!");
        localStorage.setItem("token", response.data.token); // Salva o token no localStorage
        window.location.href = "/albums"; // Redireciona para a página de albums
      } else {
        alert("Erro ao realizar login. Tente novamente.");
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        alert(`Erro: ${error.response.data.errors.join(", ")}`);
      } else {
        console.error(
          "Erro desconhecido:",
          error.response?.data || error.message
        );
        alert("Erro ao realizar login. Tente novamente.");
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Senha:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
