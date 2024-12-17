import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>Dictionary 🕮</section>
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <small>
          Coded by{" "}
          <strong>
            <a
              href="https://github.com/guguamanda"
              target="_blank"
              rel="noreferrer"
            >
              Gugulethu Amanda Ndlovu
            </a>
          </strong>{" "}
          and is{" "}
          <strong>
            <a
              href="https://github.com/guguamanda/dictionary-react-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced.
            </a>
          </strong>
        </small>
      </footer>
    </div>
  );
}

export default App;
