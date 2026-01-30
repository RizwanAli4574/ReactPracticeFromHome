import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import { useState } from 'react';

function App() {

  // const [fruit, setFruit] = useState(null);
  const [asyncValue, setAsyncValue] = useState(null);

  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry'},
  { value: 'vanilla', label: 'Vanilla' }
];

const styels = {
  control: (baseStyles) => ({
    ...baseStyles,
    borderColor: 'red',
    borderWidth: '4x',
    padding: '5px',
  }),
  option: (base) => ({
    ...base,
    backgroundColor: 'white',
    color: 'black',
  }),
};

  return (
    <div style={{width: "300px"}}>
      <h1>React Select Example</h1>
      <CreatableSelect options={options}  onChange={(selected) => console.log(selected)} 
      isMulti isClearable 
      styles={styels}
        placeholder="Select your flavors"/>
      {/* <p>{fruit?.label}</p> */}

      <br/>
      
      <AsyncSelect
        loadOptions={(input) => 
        fetch(`https://jsonplaceholder.typicode.com/users?username=${input}`)
        .then((response) => response.json())
        .then((data) => {
          const options = data.map((user) => ({
            value: user.id,
            label: user.name,
          }));
          return options;
      })
      }
        value={asyncValue}
        onChange={(selected) => setAsyncValue(selected)}
        isClearable
      />
    </div>
    
  );
}

export default App;
