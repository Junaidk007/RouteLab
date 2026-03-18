const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']

function HttpMethodSelector() {
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
            className={`dash-method-btn ${index === 0 ? 'is-active' : ''}`}
            aria-pressed={index === 0}
          >
            {method}
          </button>
        ))}
      </div>
    </section>
  )
}

export default HttpMethodSelector
