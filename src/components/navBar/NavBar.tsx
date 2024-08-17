import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import logo from '../../assets/img/logo.png'

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
    navigate('/login');
  }

  return (
    <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
      <div className="container flex justify-between items-center text-lg">
        <div className="flex items-center">
          <img src={logo} alt="SuperFarma Logo" className="w-10 h-10 mr-2" />
          <Link to='/home' className='text-2xl font-bold uppercase hover:text-indigo-300'>SuperFarma</Link>
        </div>

        <div className='flex gap-4'>
          <Link to='/postagens' className='nav-link'>Produtos</Link>
          <Link to='/temas' className='nav-link'>Categorias</Link>
          <Link to='/cadastroTema' className='nav-link'>Cadastrar Produto</Link>
          <Link to='/perfil' className='nav-link'>Contato</Link>
          <Link to='' onClick={logout} className='nav-link'>Sair</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
