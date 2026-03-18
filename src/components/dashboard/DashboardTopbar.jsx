function DashboardTopbar() {
  return (
    <header className="dash-topbar">
      <div>
        <p className="dash-topbar__eyebrow">API Workspace</p>
        <h1 className="dash-topbar__title">Request Builder</h1>
      </div>
      <div className="dash-topbar__meta" aria-label="Workspace status">
        <span className="dash-pill dash-pill--online">Live</span>
        <span className="dash-pill">Collection: Default</span>
      </div>
    </header>
  )
}

export default DashboardTopbar
