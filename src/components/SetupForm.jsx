import { useState } from 'react';

function SetupForm({ onAddSetup }) {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');
  const [category, setCategory] = useState('Competitive Gaming');
  const [machine, setMachine] = useState('');
  const [monitor, setMonitor] = useState('');
  const [keyboard, setKeyboard] = useState('');
  const [mouse, setMouse] = useState('');
  const [other, setOther] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !owner || !machine || !monitor) {
      alert('Judul, Nama Pemilik, PC/Laptop, dan Monitor wajib diisi!');
      return;
    }

    onAddSetup({
      id: Date.now(),
      title,
      owner,
      category,
      gear: { machine, monitor, keyboard, mouse, other }
    });

    setTitle('');
    setOwner('');
    setMachine('');
    setMonitor('');
    setKeyboard('');
    setMouse('');
    setOther('');
  };

  const inputStyle = {
    padding: '8px 10px',
    backgroundColor: '#0f172a',
    border: '1px solid #334155',
    borderRadius: '4px',
    color: '#ffffff',
    fontSize: '13px',
    width: '100%'
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#38bdf8' }}>+ Bagikan Setup Meja Anda</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
        <input style={inputStyle} type="text" placeholder="Nama Setup (cth: Battlestation Minimalis)" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input style={inputStyle} type="text" placeholder="Nama Pemilik (cth: Restu)" value={owner} onChange={(e) => setOwner(e.target.value)} />
        <select style={inputStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Competitive Gaming">Competitive Gaming</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Minimalist Study">Minimalist Study</option>
        </select>
        <input style={inputStyle} type="text" placeholder="PC / Laptop Utama" value={machine} onChange={(e) => setMachine(e.target.value)} />
        <input style={inputStyle} type="text" placeholder="Monitor Setup" value={monitor} onChange={(e) => setMonitor(e.target.value)} />
        <input style={inputStyle} type="text" placeholder="Keyboard" value={keyboard} onChange={(e) => setKeyboard(e.target.value)} />
        <input style={inputStyle} type="text" placeholder="Mouse" value={mouse} onChange={(e) => setMouse(e.target.value)} />
        <input style={inputStyle} type="text" placeholder="Aksesoris Meja / Lainnya" value={other} onChange={(e) => setOther(e.target.value)} />
      </div>
      <button type="submit" style={{ width: '100%', backgroundColor: '#0284c7', color: '#ffffff', padding: '10px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
        Tambahkan Setup
      </button>
    </form>
  );
}

export default SetupForm;