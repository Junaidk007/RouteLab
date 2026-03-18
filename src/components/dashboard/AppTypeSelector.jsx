function AppTypeSelector() {
  return (
    <section className="dash-card" aria-labelledby="app-type-label">
      <div className="dash-card__head">
        <h2 id="app-type-label" className="dash-card__title">Application Type</h2>
      </div>
      <div className="dash-field-grid">
        <div className="dash-field">
          <label htmlFor="application-type">App Type</label>
          <select id="application-type" defaultValue="json">
            <option value="json">JSON</option>
            <option value="form-data">Form Data</option>
            <option value="x-www-form-urlencoded">URL Encoded</option>
            <option value="xml">XML</option>
          </select>
        </div>
        <div className="dash-field">
          <label htmlFor="accept-type">Accept</label>
          <select id="accept-type" defaultValue="application/json">
            <option value="application/json">application/json</option>
            <option value="text/plain">text/plain</option>
            <option value="application/xml">application/xml</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default AppTypeSelector
