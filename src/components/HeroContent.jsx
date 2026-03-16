import { useNavigate } from "react-router-dom"

function HeroContent() {
  const navigate = useNavigate();

  const handelCTA = () => {
    navigate('/auth');
  }

  return (
    <div className="">
      <div className="hero__content d-flex flex-column">
        <h1 className="hero__title">Build, Test, and Debug APIs Faster</h1>

        <p className="hero__subtitle">
          A powerful API client for developers to send requests, inspect responses, and streamline API workflows.
        </p>
        <div className="pt-3 pb-5">
          <button className="btn hero__cta" onClick={handelCTA}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroContent
