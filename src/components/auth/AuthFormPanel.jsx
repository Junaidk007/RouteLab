import SocialButtons from './SocialButtons'

function AuthFormPanel({
  mode,
  title,
  subText,
  buttonLabel,
  showNameField = false,
  showForgotPassword = false,
  handelAuth
}) {

  const handelFormSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className={`auth-form-container ${mode === 'signup' ? 'auth-sign-up-container' : 'auth-sign-in-container'}`}>
      <form onSubmit={handelFormSubmit} className="auth-form">
        <h2 className="auth-heading">{title}</h2>
        <SocialButtons />
        <span className="auth-subtext">{subText}</span>

        {showNameField && <input type="text" placeholder="Name" className="auth-input" />}
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />

        {showForgotPassword && <a href="#forgot" className="auth-forgot">Forgot your password?</a>}

        <button onClick={handelAuth} className="auth-submit mt-3">{buttonLabel}</button>
      </form>
    </div>
  )
}

export default AuthFormPanel
