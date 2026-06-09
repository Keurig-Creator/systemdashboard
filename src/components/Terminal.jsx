import { useState } from 'react';

export default function Terminal() {
  const [output, setOutput] = useState(['$ Welcome to console']);
  const [input, setInput] = useState('');

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      setOutput([...output, `$ ${input}`]);
      setInput('');
    }
  };

  return (
    <div style={{
      background: '#000000',
      color: '#bc11df',
      padding: '15px',
      borderRadius: '5px',
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: 0,
      overflow: 'hidden'
    }}>
      <h2 style={{ margin: '0 0 10px 0', flexShrink: 0 }}>Terminal</h2>
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: '10px', minHeight: 0 }}>
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleCommand}
        style={{
          background: '#1a1919',
          color: '#ffffff',
          border: 'none',
          borderTop: '2px solid #29062e',
          padding: '8px 12px',
          fontFamily: 'monospace',
          flexShrink: 0
        }}
        autoFocus
      />
    </div>
  );
}