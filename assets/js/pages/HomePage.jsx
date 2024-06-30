import React from "react";

function HomePage() {
  return (
    <div>
      <h2 className="test">Exemple de Page React</h2>
      <h1 className="text-3xl font-bold underline bg-blue-500">Hello world!</h1>
      <p className="text-3xl font-bold underline">
        Ceci est une page exemple en React. test
      </p>
      <div className="bg-blue-500 text-white p-4 m-4">
        Contenu avec Tailwind CSS
      </div>
    </div>
  );
}

export default HomePage;
