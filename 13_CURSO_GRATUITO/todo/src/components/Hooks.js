import React, { useEffect } from "react";
import { useState } from "react";

const Hooks = () => {
  let idade = 30;
  const [novaidade, setNovaidade] = useState(40);
  const changeAge = () => {
    idade = 31;
    console.log(idade);
  };

  const changeNewAge = () => {
    setNovaidade(45);
  };
  
  return (
    <div>
      <p> Idade: {idade}</p>
      <button onClick={changeAge}> Mudar idade</button>
    </div>
  );
};

export default Hooks;
