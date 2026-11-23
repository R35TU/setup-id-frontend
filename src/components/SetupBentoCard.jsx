export default function SetupBentoCard({ setup, onSelectSetup }) {
  const style = {
    '--c': setup.tagColor || '#FF5FA2',
    gridColumn: setup.gridColumn || 'auto',
    gridRow: setup.gridRow || 'auto',
    height: '100%',
    minHeight: '220px'
  };

  return (
    <div 
      className="bx" 
      style={style} 
      onClick={() => onSelectSetup(setup.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onSelectSetup(setup.id);
      }}
    >
      <div className="ph" style={{ background: setup.bgColor || '#2A2140' }}>
        {setup.imageText || 'foto setup'}
      </div>
      <div className="cap">
        <b>{setup.title}</b>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span className="tg" style={{ background: setup.tagColor || '#FF5FA2' }}>
            {setup.category}
          </span>
          {setup.estimatedBudget && (
            <span style={{ 
              fontSize: '11px', 
              background: '#0E0B16', 
              color: '#F4F1FF', 
              padding: '2px 8px', 
              borderRadius: '999px',
              border: '1px solid #3A3354'
            }}>
              Rp {(setup.estimatedBudget / 1000000).toFixed(1)}jt
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
