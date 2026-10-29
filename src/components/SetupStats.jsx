function SetupStats({ totalSetup }) {
  return (
    <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '14px', color: '#cbd5e1' }}>Total Koleksi Meja Komunitas</span>
      <span style={{ backgroundColor: '#0284c7', color: '#ffffff', padding: '2px 10px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px' }}>
        {totalSetup} Setup
      </span>
    </div>
  );
}

export default SetupStats;