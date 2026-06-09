export default function SystemInfo({ system }) {
  return (
    <div>
      <h1 style={{ margin: '0 0 8px 0' }}>System Info</h1>
      <p style={{ margin: '4px 0' }}>OS: {system.os}</p>
      <p style={{ margin: '4px 0' }}>Distro: {system.distro}</p>
    </div>
  );
}