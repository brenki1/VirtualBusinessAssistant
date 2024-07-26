import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [chatHistory, setChatHistory] = useState([])

  const surpriseOptions = [
    'Quem ganhou o ultimo premio Nobel da paz?',
    'De onde vem a Pizza?',
    'Qual a historia do Linux?'
  ]

  const surprise = () => {
    const randomValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)]
    setValue(randomValue)
  }

  const getResponse = async () => {

    if (!value) {
      setError("Erro! Por favor faça uma pergunta!")
      return;
    }

    try {

      const options = {
        method: 'POST',
        body: JSON.stringify({
          history: chatHistory,
          message: value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch('http://localhost:8000/gemini', options)
      const data = await response.text()
      console.log(data)
      setChatHistory(oldChatHistory => [...oldChatHistory, {
        role: "user",
        parts: [{text:value}],
      },
      {
        role: "model",
        parts: [{text:data}],
      },

      ]);
      setValue("")

    } catch (error) {
      console.error(error)
      setError("Algo deu errado! Tente novamente mais tarde")
    }

  }

  const clear = () => {
    setValue("")
    setError("")
    setChatHistory([])
  }

  return (

    <div className="app">
      <p>Boa tarde, jovem!
        <button className="surprise" onClick={surprise} disabled={!chatHistory}>Me surpreenda</button>
      </p>
      <div className="input-container">
        <input
          value={value}
          placeholder="Osvaldo"
          onChange={(e) => setValue(e.target.value)}
        />
        {!error && <button onClick={getResponse}>Me pergunte</button>}
        {error && <button onClick={clear}>Limpar</button>}
      </div>
      {error && <p>{error}</p>}
      <div className="search-result">
        {chatHistory.map((chatItem, _index) => <div key={_index}>
          <p className="answer">{chatItem.role} : {chatItem.parts[0].text}</p>
        </div>)}
      </div>
    </div>
  )
}

export default App;
