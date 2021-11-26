import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.mp4";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <video className="logo" autoPlay loop muted id="logo">
            <source src={logo} type="video/mp4" />
          </video>
        </header>
        <main>
          <Dictionary defaultKeyword="love" />
        </main>
        <footer className="text-center">
          <a
            href="https://github.com/jagodasad/weather-react"
            target="_blank"
            className="created-by"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          This project was coded by{" "}
          <strong>
            <a
              href="https://www.linkedin.com/in/jagoda-sadowska-5352bb9b"
              target="_blank"
              rel="noreferrer"
            >
              Jagoda Sadowska
            </a>
          </strong>
        </footer>
      </div>
    </div>
  );
}
