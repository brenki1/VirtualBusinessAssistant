import { useState } from "react";

const App = () => {
    const [error, setError] = useState("Algo deu errado!")
  return (
    <div className="app">
      <section className="search-section">
        <p>Boa tarde, jovem!
          <button className="surprise">Me surpreenda</button>
        </p>
          <div className="input-container">
            <input
                value={""}
                placeholder="Osvaldo"
                onChange={""}
            />
            {!error && <button>Me pergunte</button>}
            {error &&<button>Limpar</button>}
          </div>
          {error && <p>{error}</p>}
          <div className="search-result">
              <div key={""}>
                <p className="answer"></p>
              </div>
          </div>
      </section>
    </div>
  )
}

export default App;
