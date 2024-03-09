import { useState } from "react";


function App() {
  const [isla, setIsla] = useState('');
  const handleInputChange = (event) => {
    setIsla(event.target.value);
  };

  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const randomNumbers = [];
    for (let i = 0; i < 4; i++) {
      randomNumbers.push(Math.floor(Math.random() * 5001)); // Genera números entre 0 y 5000
    }
    return randomNumbers;
  };



  const handleButtonClick = () => {
    const newRandomNumbers = generateRandomNumbers();
    setRandomNumbers(newRandomNumbers);
  };
  return (
    <>  
      
       <input
        type="text"
        value={isla}
        onChange={handleInputChange}
        placeholder="Ingresa una isla..."
      />
      <button onClick={handleButtonClick}>Random</button>
      <br />
      <br />
      <hr />
      
      
        {isla &&(
          <>
        
          <iframe
            src={`https://play.pixels.xyz/pixels/share/${isla}`}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
          <br />
          </>
        )}
      

      <iframe
      src={`https://play.pixels.xyz/pixels/share/${randomNumbers[0]}`}
      title="island1"
      style={{width: '500px', height: '300px' }}
    ></iframe>
    <b>{randomNumbers[0]}</b>


          <iframe
     src={`https://play.pixels.xyz/pixels/share/${randomNumbers[1]}`}
      title="island1"
      style={{ width: '500px', height: '300px' }}
    ></iframe>
<b>{randomNumbers[1]}</b>

          <iframe
      src={`https://play.pixels.xyz/pixels/share/${randomNumbers[2]}`}
      title="island1"
      style={{ width: '500px', height: '300px' }}
    ></iframe>
<b>{randomNumbers[2]}</b>

          <iframe
     src={`https://play.pixels.xyz/pixels/share/${randomNumbers[3]}`}
      title="island1"
      style={{ width: '500px', height: '300px' }}
    ></iframe>
    <b>{randomNumbers[3]}</b>
    </>
  )
}

export default App
