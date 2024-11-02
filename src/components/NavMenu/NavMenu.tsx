import "./NavMenu.css";

const NavMenu = () => {
  const closeButtonClickHandler = (e: any) => {
    e.preventDefault();
    const wow = document.getElementsByClassName(
      "smNavMenuContainer"
    )[0] as HTMLElement;
    wow.style.width = "0";
  };

  const smallMenuButtonClickHandler = (e: any) => {
    e.preventDefault();
    const wow = document.getElementsByClassName(
      "smNavMenuContainer"
    )[0] as HTMLElement;
    wow.style.width = "250px"; // or 40%? honestly 250px doesnt look bad at all, but hc :/
  };

  return (
    <nav>
      <div className="smMenu">
        <a href="#" onClick={(e) => smallMenuButtonClickHandler(e)}>
          =
        </a>
      </div>
      <div className="smNavMenuContainer">
        <a
          href="#"
          className="closebtn"
          onClick={(e) => closeButtonClickHandler(e)}
        >
          &times;
        </a>
        <a href="">Profile</a>
        <a href="">Work experience</a>
        <a href="">Education</a>
      </div>
      <div className="lgMenu">
        <a href="">Profile</a>
        <a href="">Work experience</a>
        <a href="">Education</a>
      </div>
    </nav>
  );
};

export default NavMenu;
