import { useState } from 'react';
import SetupDetail from './SetupDetail';

function SetupCard({ setup }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '16px', marginBottom: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '18px', color: '#f1f5f9' }}>{setup.title}</h3>
        <span style={{ fontSize: '11px', backgroundColor: '#0369a1', color: '#e0f2fe', padding: '2px 8px', borderRadius: '4px' }}>
          {setup.category}
        </span>
      </div>

      <p style={{ margin: '4px 0 12px 0', fontSize: '13px', color: '#94a3b8' }}>
        Diposting oleh: <strong style={{ color: '#e2e8f0' }}>{setup.owner}</strong>
      </p>

      <button 
        type="button" 
        onClick={() => setShowDetail(!showDetail)}
        style={{ backgroundColor: showDetail ? '#475569' : '#0284c7', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
      >
        {showDetail ? '▲ Tutup Spesifikasi' : '▼ Lihat Detail Spesifikasi'}
      </button>

      {/* Tampilkan detail hanya jika tombol ditekan */}
      {showDetail && <SetupDetail gear={setup.gear} />}
    </div>
  );
}

export default SetupCard;