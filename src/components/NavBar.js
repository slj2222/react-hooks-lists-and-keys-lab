import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const addAs = links.map(element => {
    return <a key={element} href={"#"+element}>{element}</a>
  })

  return <nav>{addAs}</nav>;
}

export default NavBar;
