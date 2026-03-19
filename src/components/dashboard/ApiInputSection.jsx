import axios from "axios";
import { useState } from "react"

function ApiInputSection({http, setResponse, setStatus}) {
  const [url, setUrl] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handelUrlInp = (e) => {
    setUrl(e.target.value)
  }

  const handelRequest = async (method, url, body, headers) => {
    setIsSending(true);

    try {
      const response = await axios({
        method : method,
        url: url,
        body: body,
        headers: headers
      })

      console.log(response);
      setResponse(response.data);
      setStatus(response.status)
    } catch (error) {
      console.log(error.response);

      if (error.response) {
        setResponse(error.response.data);
        setStatus(error.response.status);
      } else {
        setResponse({ message: "Request failed" });
        setStatus(null);
      }
    } finally {
      setIsSending(false);
    }
  }

  const handelBtn = () => {
    handelRequest(http, url)
  }


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
          onChange={handelUrlInp}
          value={url}
        />
        <button
          type="button"
          className={`dash-send-btn${isSending ? " is-sending" : ""}`}
          onClick={handelBtn}
          disabled={isSending}
          aria-pressed={isSending}
          aria-busy={isSending}
        >
          {isSending ? <span className="dash-send-btn__spinner" aria-hidden="true" /> : null}
          <span className="dash-send-btn__label">{!isSending && "Send"}</span>
        </button>
      </div>
    </section>
  )
}

export default ApiInputSection
