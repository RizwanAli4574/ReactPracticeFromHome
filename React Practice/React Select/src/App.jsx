import Select from 'react-select';
// import { useState } from 'react';

function App() {

  // const [fruit, setFruit] = useState(null);

  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];


  return (
    <div style={{width: "300px"}}>
      <h1>React Select Example</h1>
      <Select  options={options}  onChange={(selected) => console.log(selected)} 
      isMulti clearValue isDisabled={true}  placeholder="Select your flavors"/>
      {/* <p>{fruit?.label}</p> */}
    </div>
  );
}

export default App;
