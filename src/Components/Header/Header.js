import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../Store/FireBaseContext';
import {auth} from '../../Firebase/config'
import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
   const handleLogin = async() =>{
    await auth.signOut().then(()=>{
      // console.log("logout");
        navigate('/login')
    })
   }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
  {

    user ? 
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {user.displayName}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a onClick={() =>  handleLogin()} class="dropdown-item" >Log out</a>
   
  </div>
</div> :<Link className='text-dark' to='/login'>
<a style={{cursor : 'pointer'}}>Login</a>
</Link>
  }
          <hr />
        </div>

        <div className="sellMenu">
          <Link to='/addproduct'>
          <SellButton></SellButton>
          </Link>
         
          <div className="sellMenuContent">
            <Link to="/addproduct">
            <SellButtonPlus ></SellButtonPlus>
            </Link>
           
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
