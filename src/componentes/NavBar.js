import{Outlet,Link}from"react-router-dom";
const NavBar=()=>{
  return <div>
    <nav>
      <ul>
        <li>
          <Link to="/Pag1">Pag1</Link>
        </li>
        <li>
          <Link to="/Pag2">Pag2</Link>
        </li>
        <li>
          <Link to="/Pag3">pag3</Link>
        </li>
        <li>
          <Link to="/Pag4">pag4</Link>
        </li>
        <li>
          <Link to="/Pag5">pag5</Link>
        </li>
        <li>
          <Link to="/Pag6">pag6</Link>
        </li>
        <li>
          <Link to="/Pag7">pag7</Link>
        </li>
        <li>
          <Link to="/Pag8">pag8</Link>
        </li>
        <li>
          <Link to="/Pag9">pag9</Link>
        </li>
      </ul>
    </nav>
    <hr/>
    <Outlet/>
  </div>;
}
export default NavBar;
