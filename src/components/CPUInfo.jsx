export default function CPUInfo({ cpu }) {
  return (
    <div>
      <h1>CPU Info</h1>
      <p>Cores: {cpu.cores}</p>
      <p>Usage: {cpu.percent}%</p>
      <h2>Frequency</h2>
      <ul>
        {Object.entries(cpu.freq).map(([key, value]) => (
          <li key={key}>{key}: {Math.round(value)} MHz</li>
        ))}
      </ul>
    </div>
  );
}