function AuthOverlayPanel({ onSwitchToSignIn, onSwitchToSignUp }) {
  return (
    <div className="auth-overlay-container">
      <div className="auth-overlay">
        <div className="auth-overlay-panel auth-overlay-left">
          <h2 className="auth-overlay-title">Welcome Back!</h2>
          <p className="auth-overlay-text">
            To keep connected with us please login with your personal info
          </p>
          <button type="button" className="auth-switch-btn" onClick={onSwitchToSignIn}>
            SIGN IN
          </button>
        </div>

        <div className="auth-overlay-panel auth-overlay-right">
          <h2 className="auth-overlay-title">Hello, Friend!</h2>
          <p className="auth-overlay-text">
            Enter your personal details and start journey with us
          </p>
          <button type="button" className="auth-switch-btn" onClick={onSwitchToSignUp}>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthOverlayPanel
