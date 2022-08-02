import {useState} from 'react';

const Prueba = () => {
  const [num, setNum] = useState('');

  const handleNumChange = event => {
    const limit = 4;
    setNum(event.target.value.slice(0, limit));
  };

  console.log(num);

  return (
    <div>
      <h2>123456789</h2>
      <input
        type="number"
        id="num"
        name="num"
        value={num}
        onChange={handleNumChange}
      />
    </div>
  );
};

export default Prueba;
