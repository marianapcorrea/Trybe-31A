import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState();

  return (
    <form style={{display: 'flex', flexDirection: 'column', gap:'1rem', width:'100vw', alignItems:'center'}}>
      <input type="text" placeholder='Nome Completo' value={name} onChange={({target}) => {setName(target.value)}}/>
      <input type="number" placeholder='Idade'  value={age} onChange={({target}) => {setAge(target.value)}}/>
      <input type="text" placeholder='Cidade' value={city} onChange={({target}) => {setCity(target.value)}} />
      <label htmlFor='fund' >
        <input type="radio" value='Fundamentos' id='fund' name="module" checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)} />Fundamentos
      </label>
      <label htmlFor='front' >
        <input type="radio" value='Front-End' id='front' name="module" checked={module === 'Front-End'}
            onChange={({ target }) => setModule(target.value)} />Front-End
      </label>
      <label htmlFor='back' >
        <input type="radio" value='Back-End' id='back'name="module" checked={module === 'Back-End'}
            onChange={({ target }) => setModule(target.value)} />Back-End
      </label>
      <label htmlFor='cs' >
        <input type="radio" value='Ciencia da Computação' id='cs'name="module" checked={module === 'Ciencia da Computação'}
            onChange={({ target }) => setModule(target.value)}/>Ciencia da Computação
      </label>    

      <button>Enviar</button>
    </form>
  )
}

export default Form;
