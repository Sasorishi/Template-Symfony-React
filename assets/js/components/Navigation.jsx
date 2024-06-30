import React from "react";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/page1">Page 1</a>
        </li>
        <li>
          <a href="/page2">Page 2</a>
        </li>
        {/* Ajoutez d'autres liens pour vos pages ici */}
      </ul>
    </nav>
  );
}

export default Navigation;
