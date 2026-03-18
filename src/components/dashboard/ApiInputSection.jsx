function ApiInputSection() {
  return (
    <section className="dash-card" aria-labelledby="api-input-label">
      <div className="dash-card__head">
        <h2 id="api-input-label" className="dash-card__title">API Endpoint</h2>
      </div>
      <div className="dash-api-input-wrap">
        <label className="sr-only" htmlFor="api-url">API URL</label>
        <input
          id="api-url"
          className="dash-api-input"
          type="url"
          placeholder="https://api.example.com/v1/users"
        />
        <button type="button" className="dash-send-btn">Send</button>
      </div>
    </section>
  )
}

export default ApiInputSection
