import { useEffect, useState } from "react";
import SystemInfo from './components/SystemInfo'
import CPUInfo from './components/CPUInfo'
import MemoryInfo from './components/MemoryInfo'
import DiskInfo from './components/DiskInfo'
import ProcessList from './components/ProcessList'

function App() {
  const [system, setSystem] = useState(null);
  const [cpu, setCpu] = useState(null);
  const [memory, setMemory] = useState(null);
  const [disk, setDisk] = useState(null);
  const [processes, setProcesses] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:5000/api/system').then(r => r.json()),
      fetch('http://localhost:5000/api/cpu').then(r => r.json()),
      fetch('http://localhost:5000/api/memory').then(r => r.json()),
      fetch('http://localhost:5000/api/disk').then(r => r.json()),
      fetch('http://localhost:5000/api/processes').then(r => r.json()),
    ]).then(([system, cpu, memory, disk, processes]) => {
      setSystem(system);
      setCpu(cpu);
      setMemory(memory);
      setDisk(disk);
      setProcesses(processes);
    });
  }, []);

  if (!cpu || !system || !memory || !disk || !processes) return <div>Loading...</div>;

  const containerStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  };

  const panelStyle = {
    background: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: '4px solid #bc11df',
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        <div style={panelStyle}><SystemInfo system={system} /></div>
        <div style={panelStyle}><CPUInfo cpu={cpu} /></div>
        <div style={panelStyle}><MemoryInfo memory={memory} /></div>
        <div style={panelStyle}><DiskInfo disk={disk} /></div>
      </div>
      <ProcessList processes={processes} />
    </div>
  );
}

export default App;
