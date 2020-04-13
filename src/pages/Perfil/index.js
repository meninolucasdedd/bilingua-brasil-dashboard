import React from 'react';

import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css'
import logoImg from '../../assets/logo.svg';
export default function Perfil() {
  return (
    <div className="perfil-container">
      <header>
        <img src={logoImg} alt="Logo Bilíngua" srcset="" />
        <span>Bem vindo, SOBAM</span>
        <Link className="button " to="/turmas/nova">
          Cadastrar nova turma
        </Link>
        <button type="button">
          <FiPower size={18} color="#6605D2"></FiPower>
        </button>
      </header>
      <h1>Turmas cadastradas</h1>
      <ul>
        <li>
          <strong>Turma:</strong>
          <p>Turma teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>
          <strong>Quantidade de Participantes</strong>
          <p>120 alunos</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Turma:</strong>
          <p>Turma teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>
          <strong>Quantidade de Participantes</strong>
          <p>120 alunos</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Turma:</strong>
          <p>Turma teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>
          <strong>Quantidade de Participantes</strong>
          <p>120 alunos</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Turma:</strong>
          <p>Turma teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>
          <strong>Quantidade de Participantes</strong>
          <p>120 alunos</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  )
}