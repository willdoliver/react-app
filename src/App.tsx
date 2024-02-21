import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Alert from './components/Alert';
import Person from './components/Person';
import CounterButton from './components/CounterButton';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
        <Button onClick={() => setAlertVisibility(true)}>Click Me!</Button>
        <Person name="William" lastName="Souza" age={28}></Person>

        <CounterButton />
        <CounterButton />
      </div>
    </>
  )
}

export default App
