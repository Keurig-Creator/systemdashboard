import { useState } from 'react';

export default function ProcessList({ processes }) {
  const [sortKey, setSortKey] = useState('memory_mb');
  const [sortDir, setSortDir] = useState('desc');

  const sorted = [...processes].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortDir === 'asc' ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  return (
    <div>
      <h1>Processes</h1>
      <div style={{ border: '1px solid #ccc' }}>
        <table border="1" cellPadding="8" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th onClick={() => toggleSort('pid')} style={{ cursor: 'pointer' }}>
                PID {sortKey === 'pid' && (sortDir === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => toggleSort('name')} style={{ cursor: 'pointer' }}>
                Name {sortKey === 'name' && (sortDir === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => toggleSort('percent')} style={{ cursor: 'pointer' }}>
                CPU % {sortKey === 'percent' && (sortDir === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => toggleSort('memory_mb')} style={{ cursor: 'pointer' }}>
                Memory MB {sortKey === 'memory_mb' && (sortDir === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(p => (
              <tr key={p.pid}>
                <td>{p.pid}</td>
                <td>{p.name}</td>
                <td>{p.percent.toFixed(2)}%</td>
                <td>{p.memory_mb.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}