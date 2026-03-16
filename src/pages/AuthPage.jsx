import { useState } from 'react'
import AuthFormPanel from '../components/auth/AuthFormPanel'
import AuthOverlayPanel from '../components/auth/AuthOverlayPanel'
import './AuthPage.css'
import { useNavigate } from 'react-router-dom'

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const navigate = useNavigate();

  const handelAuth = () => {
    navigate('/')
  }

  return (
    <main className="auth-page">
      <div className={`auth-card ${isSignUp ? 'right-panel-active' : ''}`}>
        <AuthFormPanel
          mode="signup"
          title="Create Account"
          subText="or use your email for registration"
          buttonLabel="SIGN UP"
          showNameField
          handelAuth={handelAuth}
        />

        <AuthFormPanel
          mode="signin"
          title="Sign in"
          subText="or use your account"
          buttonLabel="SIGN IN"
          showForgotPassword
          handelAuth={handelAuth}
        />

        <AuthOverlayPanel
          onSwitchToSignIn={() => setIsSignUp(false)}
          onSwitchToSignUp={() => setIsSignUp(true)}
        />

      <div className="auth-tog-box text-center auth-subtext">
        {isSignUp? "Already have an account?" : "Don't have an account?"}&nbsp;
        <button className='authNavBtn' onClick={() => setIsSignUp((prv)=> !prv)}>{isSignUp? 'Sign In' : 'Sign Up'}</button>
      </div>
      </div>
    </main>
  )
}

export default AuthPage
