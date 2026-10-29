import { useState } from 'react';
import Header from './components/Header';
import SetupStats from './components/SetupStats';
import SetupForm from './components/SetupForm';
import SetupCard from './components/SetupCard';

function App() {
  const [setups, setSetups] = useState([
    {
      id: 1,
      title: 'L-Desk Dual Screen Battlestation',
      owner: 'Restu Aditya',
      category: 'Competitive Gaming',
      gear: {
        machine: 'Lenovo IdeaPad Gaming 3 (Ryzen 5, RTX 2050, 16GB RAM)',
        monitor: 'Dual Monitor: Skyworth 24" 240Hz & Xiaomi A24i 100Hz',
        keyboard: 'Compact 65% Mechanical Keyboard',
        mouse: 'Ajazz AJ159P MC Wireless',
        other: 'Oximus P200e Dual Gas-Spring Arm Bracket'
      }
    },
    {
      id: 2,
      title: 'Ergonomic Software Engineering Desk',
      owner: 'Ulung Putra',
      category: 'Software Engineering',
      gear: {
        machine: 'MacBook Air M2 16GB Unified Memory',
        monitor: 'LG UltraGear 27" IPS QHD',
        keyboard: 'Keychron K2 V2 Wireless',
        mouse: 'Logitech MX Master 3S',
        other: 'Ergonomic High-Back Mesh Chair & Desk Mat'
      }
    }
  ]);

  const handleAddSetup = (newSetup) => {
    setSetups([newSetup, ...setups]);
  };

  return (
    <main style={{ maxWidth: '720px', margin: '30px auto', padding: '0 16px' }}>
      <Header />
      <SetupStats totalSetup={setups.length} />
      <SetupForm onAddSetup={handleAddSetup} />

      <section>
        <h2 style={{ fontSize: '18px', marginBottom: '14px', color: '#f1f5f9' }}>Daftar Setup</h2>

        {setups.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '30px', border: '1px dashed #475569', borderRadius: '8px', color: '#94a3b8' }}>
            Belum ada data Setup
          </div>
        ) : (
          setups.map((item) => (
            <SetupCard key={item.id} setup={item} />
          ))
        )}
      </section>
    </main>
  );
}

export default App;