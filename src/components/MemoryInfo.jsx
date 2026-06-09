export default function MemoryInfo({ memory }) {
  return (
    <div>
      <h1 style={{ margin: '0 0 8px 0' }}>Memory Info</h1>
      <p style={{ margin: '4px 0' }}>Total: {Math.round(memory.total / 1024 / 1024 / 1024)}GB</p>
      <p style={{ margin: '4px 0' }}>Used: {Math.round(memory.used / 1024 / 1024 / 1024)}GB</p>
      <p style={{ margin: '4px 0' }}>Available: {Math.round(memory.available / 1024 / 1024 / 1024)}GB</p>
      <p style={{ margin: '4px 0' }}>Percent: {Math.round(memory.percent)}%</p>
    </div>
  );
}