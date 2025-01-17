// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  //const inputRef = React.useRef(null)
  const [inputValue, setInputValue] = React.useState('')
  //const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    //const value = event.target.elements.username.value
    //const value = inputRef.current.value
    onSubmitUsername(inputValue)
  }

  const handleChange = event => {
    const value = event.target.value
    setInputValue(value.toLowerCase())
    //const isValid = value === value.toLowerCase()
    //setError(isValid ? null : 'Username must be lower case')
  }

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      {/*error && <div role="alert">{error}</div>*/}
      <button type="submit" /*disabled={error}*/>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
