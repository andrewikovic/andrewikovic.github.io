function App() {
  return (
    <main style={{fontFamily: "system-ui", padding: 24}}>
      <h1>Hello, GitHub Pages + JSX</h1>
      <p>If you can read this, JSX is working.</p>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);