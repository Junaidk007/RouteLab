import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCode, faPaperPlane, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function HeroVisual() {
  return (
    <div className="col-12 col-lg-6">
      <div className="hero__visual-wrap">
        <div className="hero__client-header">
          <span className="hero__chip hero__chip--method">POST</span>
          <span className="hero__chip">/v1/leads/enrich</span>
          <button className="hero__send-btn" type="button">
            <FontAwesomeIcon icon={faPaperPlane} />
            Send
          </button>
        </div>

        <div className="hero__api-card">
          <div className="hero__api-status">
            <span>
              <FontAwesomeIcon icon={faCircleCheck} />
              200 OK
            </span>
            <span>122 ms</span>
            <span>1.8 KB</span>
          </div>

          <div className="hero__code-block">
            <p>
              <span className="hero__code-key">name:</span> "Aarav Sharma"
            </p>
            <p>
              <span className="hero__code-key">email:</span> "aarav@startup.io"
            </p>
            <p>
              <span className="hero__code-key">score:</span> 93
            </p>
            <p>
              <span className="hero__code-key">source:</span> "website"
            </p>
          </div>

          {/* <div className="hero__api-footer">
            <div className="hero__mini-card">
              <FontAwesomeIcon icon={faCode} />
              <span>Tests passed</span>
            </div>
            <div className="hero__mini-card">
              <FontAwesomeIcon icon={faBolt} />
              <span>Auto-save on</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HeroVisual
