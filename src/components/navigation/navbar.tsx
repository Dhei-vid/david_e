import React from "react";

const Navbar = () => {
  const iconMenu = document.querySelector(".bodymovinanim");
  const animationMenu = bodymovin.loadAnimation({
    container: iconMenu,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/menu.json",
  });

  let directionMenu = 1;
  iconMenu.addEventListener("click", (e) => {
    animationMenu.setDirection(directionMenu);
    animationMenu.play();
    directionMenu = -directionMenu;
  });

  return (
    <div className="flex flex-row justify-between">
      <div></div>
      <div>
        <div className="bodymovinanim"></div>
      </div>
    </div>
  );
};

export default Navbar;
