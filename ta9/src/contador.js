import React, { useState, useEffect } from 'react';
import './App.css'; 

function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('El contador ha cambiado:', count);
    document.title = `Contador: ${count}`; 
  }, [count]);

  const incrementar = () => setCount(count + 1);

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reiniciar = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>Contador: {count === 9 ? 'Luis Suarez' : count}</h1>
      
      <div className="buttons">
        <button className="button is-primary" onClick={incrementar}>Incrementar</button>
        <button className="button is-warning" onClick={decrementar}>Decrementar</button>
        <button className="button is-danger" onClick={reiniciar}>Reiniciar</button>
      </div>
      <br />
      {count === 9 && (
        <div>
          <img 
            src="https://monesport.cat/app/uploads/sites/12/2022/12/europapress_4850452_02_december_2022_qatar_al_wakrah_uruguays_luis_suarez_celebrates_after_his-1-scaled.jpg" 
            alt="Luis Suárez" 
            style={{ width: '200px', borderRadius: '10px' }}
          />
        </div>
      )}
    </div>
  );
}

export default Contador;
