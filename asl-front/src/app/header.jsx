export default function header() {

  return (
    <header>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">
            <img></img>
            Window Header </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
        </div>
      </div>
    </header>
  )
}