import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import swal from "sweetalert";

import logoImg from "../../assets/logo.svg";
import "./style.css";

import axios from "../../services/api";

export default function Registro() {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cidade, setCidade] = useState("");
  const [endereco, setEndereco] = useState("");
  const [uf, setUf] = useState("");
  const [perfil, setPerfil] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [instituicao, setInstituicao] = useState("");
  const [site, setSite] = useState("");

  const history = useHistory();

  function validate() {
    if (perfil === "Instituicao") {
      if (nome !== "" && email !== "" && cnpj !== "" && instituicao !== "")
        return true;
      else return false;
    } else {
      if (nome !== "" && email !== "" && senha !== "" && instituicao !== "")
        return true;
      else return false;
    }
  }

  async function handleRegistro(event) {
    event.preventDefault();

    if (validate()) {
      const data = {
        nome,
        cnpj,
        cidade,
        endereco,
        uf,
        email,
        site,
      };

      try {
        await axios.post("registro", data);

        swal({
          title: `Cadastro realizado com sucesso`,
          text: "Acesse seu email e confirme sua ativação!",
          icon: "success",
          button: true,
          dangerMode: true,
        });

        history.push("/");
      } catch (err) {
        swal({
          title: `Problema ao realizar cadastro`,
          text: "Verifique as informações de entrada e tente novamente",
          icon: "error",
          button: true,
          dangerMode: true,
        });
      }
    } else {
      swal({
        title: "Opa!",
        text: "Todos os campos são obrigatórios",
        icon: "error",
        button: true,
        dangerMode: true,
      });
    }
  }

  return (
    <div className="registro-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo Bilíngua" className="logo" srcset="" />
          <h1>Cadastro</h1>
          <p>
            Cadastre sua instituição para ter acesso ao conteúdo personalizado
            da plataforma Bilíngua
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#6605D2" />
            Possuo um código de acesso
          </Link>
        </section>

        <form onSubmit={handleRegistro}>
          <input
            type="text"
            placeholder="Nome da Instituição"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            type="number"
            placeholder="Cnpj"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />

          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <input
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              maxLength={2}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="site"
            placeholder="Site"
            value={site}
            onChange={(e) => setSite(e.target.value)}
          />

          <button className="button" type="submit">
            Realizar Solicitação
          </button>
        </form>
      </div>
    </div>
  );
}
