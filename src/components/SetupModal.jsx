import { useState, useEffect } from 'react';

export default function SetupModal({ isOpen, onClose, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    title: '',
    owner: '',
    category: 'Programmer',
    estimatedBudget: 15000000,
    isCompleted: true,
    description: '',
    machine: '',
    monitor: '',
    keyboard: '',
    mouse: '',
    desk: '',
    other: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        owner: initialData.owner || '',
        category: initialData.category || 'Programmer',
        estimatedBudget: initialData.estimatedBudget || 15000000,
        isCompleted: initialData.isCompleted ?? true,
        description: initialData.description || '',
        machine: initialData.machine || '',
        monitor: initialData.monitor || '',
        keyboard: initialData.keyboard || '',
        mouse: initialData.mouse || '',
        desk: initialData.desk || '',
        other: initialData.other || ''
      });
    } else {
      setFormData({
        title: '',
        owner: '',
        category: 'Programmer',
        estimatedBudget: 12000000,
        isCompleted: true,
        description: '',
        machine: '',
        monitor: '',
        keyboard: '',
        mouse: '',
        desk: '',
        other: ''
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.owner) {
      alert('Nama setup dan nama pemilik wajib diisi!');
      return;
    }
    onSubmit({
      ...formData,
      estimatedBudget: Number(formData.estimatedBudget)
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '26px' }}>
            {initialData ? '✏️ Edit Setup Meja' : '✨ Pamerin Setup Meja Baru'}
          </h2>
          <button 
            type="button" 
            onClick={onClose}
            style={{ 
              background: '#FF5FA2', 
              color: '#0E0B16', 
              border: '2px solid #F4F1FF', 
              borderRadius: '8px', 
              fontWeight: 800, 
              padding: '6px 12px', 
              cursor: 'pointer' 
            }}
          >
            ✕ Tutup
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
              Nama / Judul Setup *
            </label>
            <input
              type="text"
              name="title"
              className="form-input"
              placeholder="Cth: Cozy Dual-Screen Battlestation"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                Pemilik Setup *
              </label>
              <input
                type="text"
                name="owner"
                className="form-input"
                placeholder="Cth: Restu Aditya"
                value={formData.owner}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                Kategori
              </label>
              <select
                name="category"
                className="form-input"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Programmer">Programmer</option>
                <option value="Gaming">Gaming</option>
                <option value="Cozy">Cozy</option>
                <option value="Minimalist">Minimalist</option>
                <option value="Student">Student</option>
                <option value="Streaming">Streaming</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                Estimasi Budget (Rp)
              </label>
              <input
                type="number"
                name="estimatedBudget"
                className="form-input"
                placeholder="Cth: 15000000"
                value={formData.estimatedBudget}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '24px' }}>
              <input
                type="checkbox"
                id="isCompleted"
                name="isCompleted"
                checked={formData.isCompleted}
                onChange={handleChange}
                style={{ width: '20px', height: '20px', accentColor: '#C6FF3D', cursor: 'pointer' }}
              />
              <label htmlFor="isCompleted" style={{ fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                Setup Sudah Selesai (Bukan WIP)
              </label>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
              Deskripsi Singkat / Filosofi Setup
            </label>
            <textarea
              name="description"
              className="form-input"
              rows="3"
              style={{ height: 'auto', paddingTop: '10px' }}
              placeholder="Ceritakan konsep setup, tema warna, atau alasan pemilihan barang..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <h3 style={{ margin: '10px 0 0', fontSize: '18px', color: '#C6FF3D' }}>
            🛠️ Rincian Gear / Perlengkapan
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
                PC / Laptop Utama
              </label>
              <input
                type="text"
                name="machine"
                className="form-input"
                placeholder="Cth: MacBook Air M2 / PC RTX 4070"
                value={formData.machine}
                onChange={handleChange}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
                Monitor
              </label>
              <input
                type="text"
                name="monitor"
                className="form-input"
                placeholder="Cth: LG 27 Inch QHD 165Hz"
                value={formData.monitor}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
                Keyboard
              </label>
              <input
                type="text"
                name="keyboard"
                className="form-input"
                placeholder="Cth: Keychron K2 Mechanical"
                value={formData.keyboard}
                onChange={handleChange}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
                Mouse
              </label>
              <input
                type="text"
                name="mouse"
                className="form-input"
                placeholder="Cth: Ignix F5 Pro / Logitech MX Master"
                value={formData.mouse}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
                Meja Kerja (Desk)
              </label>
              <input
                type="text"
                name="desk"
                className="form-input"
                placeholder="Cth: Meja Kayu Solid 140x60"
                value={formData.desk}
                onChange={handleChange}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
                Aksesoris Tambahan
              </label>
              <input
                type="text"
                name="other"
                className="form-input"
                placeholder="Cth: Monitor Arm Gas Spring, Desk Mat"
                value={formData.other}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '14px' }}>
            <button
              type="submit"
              className="btn"
              style={{ flex: 1, background: '#C6FF3D' }}
            >
              {initialData ? 'Simpan Perubahan' : '+ Terbitkan Setup'}
            </button>
            <button
              type="button"
              className="btn"
              style={{ background: '#3A3354', color: '#F4F1FF' }}
              onClick={onClose}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
