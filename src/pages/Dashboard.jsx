import DashboardTopbar from '../components/dashboard/DashboardTopbar'
import HttpMethodSelector from '../components/dashboard/HttpMethodSelector'
import ApiInputSection from '../components/dashboard/ApiInputSection'
import AppTypeSelector from '../components/dashboard/AppTypeSelector'
import './dashboard.css'

function Dashboard() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-shell container">
        <DashboardTopbar />

        <div className="dashboard-grid">
          <section className="dashboard-column dashboard-column--request" aria-label="Request builder">
            <HttpMethodSelector />
            <ApiInputSection />
            <AppTypeSelector />

            <section className="dash-card" aria-labelledby="request-body-label">
              <div className="dash-card__head">
                <h2 id="request-body-label" className="dash-card__title">Request Body</h2>
                <span className="dash-card__hint">Raw</span>
              </div>
              <div className="dash-codebox" role="textbox" aria-label="Request body" tabIndex={0}>
                {'{\n  "sample": true\n}'}
              </div>
            </section>
          </section>

          <section className="dashboard-column dashboard-column--response" aria-label="Response preview">
            <section className="dash-card dash-card--response" aria-labelledby="response-label">
              <div className="dash-card__head">
                <h2 id="response-label" className="dash-card__title">Response</h2>
                <div className="dash-status-row">
                  <span className="dash-pill dash-pill--success">200 OK</span>
                  <span className="dash-pill">312 ms</span>
                </div>
              </div>

              <div className="dash-response-tabs" role="tablist" aria-label="Response tabs">
                <button type="button" className="dash-tab-btn is-active" role="tab" aria-selected="true">Body</button>
                <button type="button" className="dash-tab-btn" role="tab" aria-selected="false">Headers</button>
                <button type="button" className="dash-tab-btn" role="tab" aria-selected="false">Tests</button>
              </div>

              <pre className="dash-codebox dash-codebox--response" aria-label="Response body preview">
{`{
  "status": "success",
  "data": {
    "message": "Hello from dashboard template"
  }
}`}
              </pre>
            </section>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
