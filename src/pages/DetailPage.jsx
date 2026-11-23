import GearCard from '../components/GearCard';

export default function DetailPage({ 
  setup, 
  onBack, 
  onEdit, 
  onDelete, 
  similarSetups, 
  onSelectSetup 
}) {
  if (!setup) return null;

  const defaultGears = [
    { type: 'Mouse', name: setup.mouse || 'Ignix F5 Pro', brand: 'Ignix', color: '#FF5FA2', bg: '#2A2140' },
    { type: 'Keyboard', name: setup.keyboard || 'Mechanical Keyboard 65%', brand: 'Custom', color: '#C6FF3D', bg: '#C9B29A' },
    { type: 'Monitor', name: setup.monitor || 'LG 24 Inch IPS 144Hz', brand: 'LG', color: '#3DE0FF', bg: '#ECE9E3' },
    { type: 'PC / Machine', name: setup.machine || 'Laptop Workstation', brand: 'Brand PC', color: '#FF9A3D', bg: '#D8CDBF' },
    { type: 'Desk', name: setup.desk || 'Wooden Desk 140x60', brand: 'Wooden Studio', color: '#8B6CFF', bg: '#1F1B2E' },
    { type: 'Other Gear', name: setup.other || 'Desk Mat & Ambient Light', brand: 'Accessories', color: '#FF5FA2', bg: '#3A2B3D' }
  ];

  const gears = setup.gears && setup.gears.length > 0 ? setup.gears : defaultGears;

  return (
    <div style={{ paddingBottom: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <a 
          className="mu" 
          href="#back" 
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }} 
          style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          ← Balik ke Explore
        </a>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="button" 
            className="btn btn-sm" 
            style={{ background: '#C6FF3D' }} 
            onClick={() => onEdit(setup)}
          >
            ✏️ Edit Setup
          </button>
          <button 
            type="button" 
            className="btn btn-sm" 
            style={{ background: '#FF5FA2' }} 
            onClick={() => {
              if (window.confirm(`Yakin ingin menghapus setup "${setup.title}"?`)) {
                onDelete(setup.id);
              }
            }}
          >
            🗑️ Hapus
          </button>
        </div>
      </div>

      <div className="bx" style={{ '--c': '#FF9A3D', aspectRatio: '16/8', marginTop: '16px' }}>
        <div className="ph" style={{ background: setup.bgColor || '#CDB8A0', fontSize: '20px' }}>
          {setup.imageText || 'foto utama setup'}
        </div>
        <span 
          className="tag" 
          style={{ position: 'absolute', right: '16px', bottom: '16px', background: '#F4F1FF', cursor: 'pointer' }}
          onClick={() => alert(`Preview Foto: ${setup.title}`)}
        >
          🔍 Zoom
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        padding: '48px 0'
      }}>
        <div>
          <h1 style={{ fontSize: 'clamp(40px, 5vw, 68px)', marginBottom: '8px' }}>
            {setup.title}
          </h1>
          <p className="mu" style={{ margin: '16px 0 20px', fontSize: '16px' }}>
            Oleh <strong style={{ color: '#F4F1FF' }}>{setup.owner || 'Nama Kontributor'}</strong> · {setup.date || '23 Nov 2026'}
            {setup.estimatedBudget && (
              <span> · Estimasi Budget: <strong style={{ color: '#C6FF3D' }}>Rp {Number(setup.estimatedBudget).toLocaleString('id-ID')}</strong></span>
            )}
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="tg" style={{ background: '#C6FF3D', fontSize: '14px', padding: '8px 14px' }}>
              {setup.category || 'Cozy'}
            </span>
            <span className="tg" style={{ background: '#8B6CFF', fontSize: '14px', padding: '8px 14px' }}>
              {setup.isCompleted ? 'Finished Setup' : 'Work In Progress'}
            </span>
            <span className="tg" style={{ background: '#F4F1FF', fontSize: '14px', padding: '8px 14px' }}>
              Dual Monitor
            </span>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: '19px', lineHeight: 1.6, color: '#D9D3F0' }}>
          {setup.description || '[Deskripsi setup: konsep, alasan memilih perlengkapan, dan fungsi workspace untuk produktivitas sehari-hari.]'}
        </p>
      </div>

      <h2>
        Gear di setup ini <span className="mu">{gears.length}</span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '24px'
      }}>
        {gears.map((g, idx) => (
          <GearCard key={idx} gear={g} />
        ))}
      </div>

      {similarSetups && similarSetups.length > 0 && (
        <>
          <h2 style={{ margin: '64px 0 24px' }}>Yang mirip-mirip</h2>
          <div className="bento" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gridAutoRows: '220px' }}>
            {similarSetups.map((sim) => (
              <div 
                key={sim.id} 
                className="bx" 
                onClick={() => onSelectSetup(sim.id)}
                style={{ '--c': sim.tagColor || '#3DE0FF', cursor: 'pointer' }}
              >
                <div className="ph" style={{ background: sim.bgColor || '#ECE9E3' }}>
                  {sim.imageText || 'foto setup'}
                </div>
                <div className="cap">
                  <b>{sim.title}</b>
                  <span className="tg" style={{ background: sim.tagColor || '#3DE0FF' }}>
                    {sim.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
