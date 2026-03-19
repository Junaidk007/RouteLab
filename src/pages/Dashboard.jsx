import DashboardTopbar from '../components/dashboard/DashboardTopbar'
import HttpMethodSelector from '../components/dashboard/HttpMethodSelector'
import ApiInputSection from '../components/dashboard/ApiInputSection'
import AppTypeSelector from '../components/dashboard/AppTypeSelector'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import './dashboard.css'
import { useState } from 'react'

function getStatusText(status) {
  if (!status) {
    return 'No request yet';
  }

  if (status >= 200 && status < 300) {
    return `${status} Success`;
  }

  if (status >= 300 && status < 400) {
    return `${status} Redirect`;
  }

  if (status >= 400 && status < 500) {
    return `${status} Client Error`;
  }

  if (status >= 500) {
    return `${status} Server Error`;
  }

  return `${status}`;
}

function getStatusClassName(status) {
  if (!status) {
    return 'dash-pill--idle';
  }

  if (status >= 200 && status < 300) {
    return 'dash-pill--success';
  }

  if (status >= 300 && status < 400) {
    return 'dash-pill--redirect';
  }

  if (status >= 400 && status < 500) {
    return 'dash-pill--warning';
  }

  if (status >= 500) {
    return 'dash-pill--error';
  }

  return 'dash-pill--idle';
}

function Dashboard({ theme }) {
  const [http, setHttp] = useState('');
  const [response, setResponse] = useState();
  const [status, setStatus] = useState();
  const codeTheme = theme === 'dark' ? vscDarkPlus : prism;

  return (
    <main className="dashboard-page">
      <section className="dashboard-shell container">
        <DashboardTopbar />

        <div className="dashboard-grid">
          <section className="dashboard-column dashboard-column--request" aria-label="Request builder">
            <HttpMethodSelector updateHttp={setHttp} />
            <ApiInputSection http={http} setResponse={setResponse} setStatus={setStatus} />
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
                  <span className={`dash-pill ${getStatusClassName(status)}`}>{getStatusText(status)}</span>
                  <span className="dash-pill">312 ms</span>
                </div>
              </div>

              <div className="dash-response-tabs" role="tablist" aria-label="Response tabs">
                <button type="button" className="dash-tab-btn is-active" role="tab" aria-selected="true">Body</button>
                <button type="button" className="dash-tab-btn" role="tab" aria-selected="false">Headers</button>
                <button type="button" className="dash-tab-btn" role="tab" aria-selected="false">Tests</button>
              </div>

              <pre className="dash-codebox dash-codebox--response" aria-label="Response body preview">
                <SyntaxHighlighter language="json" style={codeTheme} customStyle={{ background: "transparent" }}>
                  {JSON.stringify(response, null, 2)}
                </SyntaxHighlighter>
              </pre>
            </section>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
