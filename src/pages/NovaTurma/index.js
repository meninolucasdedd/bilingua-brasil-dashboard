import React from 'react';
import './style.css'

import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

export default function NovaTurma() {
  return (
    <div className="nova-turma-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo Bilíngua" srcset="" />
          <h1>Cadastrar nova turma</h1>
          <p>Cadastre uma turma-piloto para exercício no aplicativo Bilíngua</p>
          <Link className="back-link" to="/perfil">
            <FiArrowLeft size={16} color="#6605D2" />
            Voltar
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Título da turma" />
          <textarea type="number" placeholder="Descrição" />
          <textarea placeholder="Objetivos" />
          <input type="text" placeholder="Conteudos" />
          <input type="date" placeholder="data" />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}