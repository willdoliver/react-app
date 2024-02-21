import { useState } from 'react'

const CounterButton = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1)
  }
    return (
      <>
        <button type="button" className="btn btn-secondary" onClick={handleClick}>Clicked {counter} times</button>
      </>
    )
}

export default CounterButton