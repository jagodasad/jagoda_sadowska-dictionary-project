import "./App.css";
import logo from "./logo.mp4";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video className="logo" autoPlay loop muted id="logo">
          <source src={logo} type="video/mp4" />
        </video>
      </header>
    </div>
  );
}
