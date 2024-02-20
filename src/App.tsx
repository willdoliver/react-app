import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Alert from './components/Alert';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
        <Button onClick={() => setAlertVisibility(true)}>Click Me!</Button>
      </div>
    </>
  )
}

export default App
