import { useState } from "react"

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']

function HttpMethodSelector({updateHttp}) {

  let [httpMethod, setHttpMethod] = useState(methods[0]);

  const methodHandel = (e) => {
    setHttpMethod(e.target.innerText)
    updateHttp(e.target.innerText);
  }
  return (
    <section className="dash-card" aria-labelledby="http-method-label">
      <div className="dash-card__head">
        <h2 id="http-method-label" className="dash-card__title">HTTP Method</h2>
      </div>
      <div className="dash-methods" role="group" aria-label="HTTP methods">
        {methods.map((method, index) => (
          <button
            key={method}
            type="button"
            className={`dash-method-btn ${method === httpMethod ? 'is-active' : ''}`}
            // aria-pressed={index === 0}
            onClick={methodHandel}
          >
            {method}
          </button>
        ))}
      </div>
    </section>
  )
}

export default HttpMethodSelector
