import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { FiLogIn } from "react-icons/fi";

import swal from "sweetalert";
import axios from "../../services/api";
import "./styles.css";

import logoImg from "../../assets/logo.svg";
import pessoasImg from "../../assets/pessoas.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  function validar() {
    if ((email !== "") & (senha !== "")) return true;
    else return false;
  }

  async function handleLogin(e) {
    e.preventDefault();

    if (validar()) {
      try {
        const data = {
          email,
          senha,
        };
        const response = await axios.post("authenticate", data);
        const { id, nome } = response.data.user;

        sessionStorage.setItem("tokenAuth", response.data.token);
        sessionStorage.setItem("userId", id);
        sessionStorage.setItem("nome", nome);

        history.push("/perfil");
      } catch (err) {
        swal({
          title: "Falha ao fazer o login!",
          text: "Tente novamente.",
          icon: "error",
          button: true,
          dangerMode: true,
          focusConfirm: false,
        });
      }
    } else {
      swal({
        title: "Não é possível realizar login",
        text: "Todos os campos são obrigatórios.",
        icon: "error",
        buttons: ["Estou com problemas", "Ok"],
        dangerMode: true,
      });
    }
  }
  return (
    <div className="logo-container">
      <section className="form">
        <img className="logo" src={logoImg} alt="Logo Bilíngua" srcset="" />
        <form noValidate autoComplete="off" onSubmit={handleLogin}>
          <h1>Sistema de cadastro de atividades</h1>

          <input
            type="text"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Sua Senha"
            vaue={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="button" type="submit" onClick={handleLogin}>
            Entrar
          </button>

          <Link className="back-link" to="/registro">
            <FiLogIn size={16} color="#6605D2" />
            Solicitar acesso
          </Link>
        </form>
      </section>
      <img className="heroes" src={pessoasImg} alt="Pessoas" srcset="" />
    </div>
  );
}
