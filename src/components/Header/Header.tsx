import DownloadCVButton from "../DownloadCVButton/DownloadCVButton";
import NavMenu from "../NavMenu/NavMenu";
import "./Header.css";

const Header = () => {
  // https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
  // https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp
  // https://www.w3schools.com/howto/howto_js_off-canvas.asp

  return (
    <header>
      <NavMenu />
      <DownloadCVButton />
    </header>
  );
};

export default Header;
