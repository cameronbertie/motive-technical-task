import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';


export default function Nav() {
  return (
    <nav className="nav">
        <div className="nav__container">
            <div className="nav__left">
                <a href=""><Image className="nav__logo" src="/images/logo.svg" alt="NSC Logo" height="40" width="72"/></a>
            </div>
            <div className="nav__right">
                <div className="nav__link"><a href="">Who we are</a></div>
                <div className="nav__link"><a href="">What we do</a></div>
                <div className="nav__link"><a href="">Service portfolio</a></div>
                <div className="nav__link"><a href="">Case studies</a></div>
                <div className="nav__link"><a href="">Partners</a></div>
                <div className="nav__link"><a href="">Work with us</a></div>
                <div className="nav__link"><a href="">Careers</a></div>
                <div className="nav__link"><a href="">Contact</a></div>
                <div className="nav__link"><Image className="nav__flag" src="/images/gb.png" alt="NSC Logo" width="16" height="11" /><span>English</span></div>
                <div className="nav__searchIcon"><SearchIcon/></div>
                <div className="nav__menuIcon"><MenuIcon id="menu"/></div>
            </div>
            </div>
    </nav>
  )
}
