import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';


export default function Footer() {
  return (
    <div className="footer">
        <div className="footer__top">
          <div className="container">
            <div className="footer__topContainer">
            <button>Learn More</button>
            <button>Request a demo link</button>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
          <div className="footer__bottomContainer">
          <div className="footer__column">
          <Image className="footer__logo" src="/images/footer-logo.svg" alt="NSC Logo" height="53" width="96"/>
          <div className="footer__info">
            Lorem Ipsum,
          </div>
          <div className="footer__info">
            Dolor Sit,
          </div>
          <div className="footer__info">
            Amet Sum Sit,
          </div>
          <div className="footer__info">
            Ait Utem
          </div>
          <br></br>
          <div className="footer__info">
            <a href="">Lorem Ipsum</a>
          </div>
          <div className="footer__info">
            <a href="">Dolor Sit</a>
          </div>
          </div>
          <div className="footer__column">
            <div className="footer__heading">Lorem Ipsum</div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
          </div>
          <div className="footer__column">
            <div className="footer__heading">Lorem Ipsum</div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
          </div>
          <div className="footer__column">
            <div className="footer__heading">Lorem Ipsum</div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
          </div>
          <div className="footer__column">
            <div className="footer__heading">Lorem Ipsum</div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
            <div className="footer__link"><a href="">Lorem Ipsum</a></div>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}
