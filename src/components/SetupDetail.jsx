function SetupDetail({ gear }) {
  return (
    <div style={{ marginTop: '14px', padding: '12px', backgroundColor: '#0f172a', borderRadius: '6px', border: '1px solid #334155', fontSize: '13px', lineHeight: '1.6' }}>
      <div style={{ color: '#38bdf8', fontWeight: 'bold', marginBottom: '6px' }}>Spesifikasi Gear Lengkap:</div>
      <div>💻 <strong>PC / Laptop:</strong> {gear.machine}</div>
      <div>🖥️ <strong>Monitor:</strong> {gear.monitor}</div>
      <div>⌨️ <strong>Keyboard:</strong> {gear.keyboard}</div>
      <div>🖱️ <strong>Mouse:</strong> {gear.mouse}</div>
      <div>🛠️ <strong>Perlengkapan Lain:</strong> {gear.other || '-'}</div>
    </div>
  );
}

export default SetupDetail;