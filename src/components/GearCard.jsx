export default function GearCard({ gear }) {
  return (
    <div 
      className="bx" 
      style={{ 
        '--c': gear.color || '#FF5FA2', 
        display: 'flex', 
        flexDirection: 'column' 
      }}
    >
      <div style={{ aspectRatio: '1' }}>
        <div className="ph" style={{ background: gear.bg || '#2A2140' }}>
          foto barang
        </div>
      </div>
      <div style={{ padding: '14px', background: '#191426', flex: 1 }}>
        <span className="tg" style={{ background: gear.color || '#FF5FA2' }}>
          {gear.type}
        </span>
        <b style={{ display: 'block', fontSize: '20px', margin: '8px 0 2px', color: '#F4F1FF' }}>
          {gear.name}
        </b>
        <span className="mu" style={{ fontSize: '14px' }}>
          {gear.brand}
        </span>
      </div>
    </div>
  );
}
