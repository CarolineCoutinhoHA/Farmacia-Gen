import './Navbar.css';
import logo from '../../assets/img/hospital-logo-design-vector-medical-cross.png';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-title-container'>
          <img src={logo} alt="Logo" className='navbar-logo' />
          <div className='navbar-title'>
            SuperFarma
          </div>
        </div>

        <div className='navbar-menu'>
          <div className='navbar-item'>Produtos</div>
          <div className='navbar-item'>Categorias</div>
          <div className='navbar-item'>Meus Pedidos</div>
          <div className='navbar-item'>Perfil</div>
          <div className='navbar-item'>Sair</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
