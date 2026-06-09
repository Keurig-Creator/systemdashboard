export default function DiskInfo({ disk }) {
  return (
    <div>
      <h1 style={{ margin: '0 0 8px 0' }}>Disk Info</h1>
      <p style={{ margin: '4px 0' }}>Total: {disk.total}gb</p>
      <p style={{ margin: '4px 0' }}>Used: {disk.used}gb</p>
      <p style={{ margin: '4px 0' }}>Free: {disk.free}gb</p>
    </div>
  );
}