import { useState } from "react";


function App() {
  const [text, setText] = useState("deneme")
  const [message, setMessage] = useState([])

  const OnChangeFunc = (e) => {
    setText(e.target.value)
  }

  const messageFunc = () => {
    setMessage(prev => [...prev, text])
    setText('')
  }


  return (
    <>
      <input value={text} onChange={OnChangeFunc} type="text" placeholder="ekle" />
      <button onClick={messageFunc}>Ekle</button>
      {
        message?.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))
      }
    </>
  );
}

export default App;
