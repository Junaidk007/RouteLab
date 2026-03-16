import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function SocialButtons() {
  return (
    <div className="auth-socials">
      <button type="button" className="auth-social-btn" aria-label="Continue with Facebook">
        <FontAwesomeIcon icon={faFacebookF} />
      </button>
      <button type="button" className="auth-social-btn" aria-label="Continue with Google">
        <FontAwesomeIcon icon={faGoogle} />
      </button>
      <button type="button" className="auth-social-btn" aria-label="Continue with LinkedIn">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </button>
    </div>
  )
}

export default SocialButtons
