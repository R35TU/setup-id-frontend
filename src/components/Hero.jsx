export default function Hero({ searchQuery, setSearchQuery, featuredSetup, onSelectSetup }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '40px',
      alignItems: 'center',
      padding: '24px 0 48px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <h1>
          Temukan inspirasi, <span className="hl" style={{ background: '#C6FF3D' }}>Wujudkan</span> setup impianmu!
        </h1>
        <p className="mu" style={{ margin: 0, fontSize: '19px', maxWidth: '480px', lineHeight: 1.5 }}>
          Cari beragam inspirasi workspace, lengkap beserta daftar barang yang dipakai.
        </p>

        <form 
          onSubmit={(e) => e.preventDefault()} 
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
        >
          <label style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-9999px' }}>Cari</span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari “Ignix F5 Pro”, cozy, gaming…"
              style={{
                width: '100%',
                height: '52px',
                border: '2px solid #F4F1FF',
                borderRadius: '14px',
                background: '#191426',
                color: '#F4F1FF',
                padding: '0 16px',
                font: 'inherit',
                fontSize: '16px',
                outline: 'none'
              }}
            />
          </label>
          <button className="btn" type="submit" style={{ background: '#C6FF3D' }}>
            Cari
          </button>
        </form>
      </div>

      {featuredSetup && (
        <div style={{ transform: 'rotate(-2deg)', height: '420px' }}>
          <div 
            className="bx" 
            onClick={() => onSelectSetup(featuredSetup.id)}
            style={{ '--c': '#FF9A3D', height: '100%', cursor: 'pointer' }}
          >
            <div className="ph" style={{ background: featuredSetup.bgColor || '#CDB8A0' }}>
              {featuredSetup.imageText || 'foto setup'}
            </div>
            <div className="cap">
              <b>{featuredSetup.title}</b>
              <span className="tg" style={{ background: '#FF9A3D' }}>
                {featuredSetup.gears ? `${featuredSetup.gears.length} gear` : '8 gear'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
