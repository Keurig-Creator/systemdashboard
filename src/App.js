import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [cpu, setCpu] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/cpu")
      .then(res => res.json())
      .then(data => setCpu(data));
  }, []);

  if (!cpu) return <div>Loading...</div>;

  return (
    <div>
      <h1>CPU Info</h1>

      <p>Cores: {cpu.cores}</p>
      <p>Usage: {cpu.percent}%</p>

      <h2>Frequency</h2>
      <ul>
        {Object.entries(cpu.freq).map(([key, value]) => (
          <li key={key}>
            {key}: {Math.round(value)} MHz
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;