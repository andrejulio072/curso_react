import React from "react";

function FirstComponent() {
  // Algum comentario
  <div>
    <div className="Component"></div>;
    {/* <button onClick={handleClick}>Evento de Click</button> */}
    <hr />
    <button onClick={()=> console.log('teste')}>Evento no Elemento</button>
  </div>;
}

export default FirstComponent;
