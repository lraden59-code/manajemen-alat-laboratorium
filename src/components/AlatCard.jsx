
// Halaman Utama Aplikasi Manajemen Alat Laboratorium
// Komponen Kartu Alat Laboratorium

export default function AlatCard({ namaAlat, jumlah, kategori, tersedia }) {
  return (
    <article className="kartu-alat" style={{ 
      border: '1px solid #cbd5e1', 
      borderRadius: '8px', 
      padding: '16px', 
      margin: '10px 0', 
      maxWidth: '300px',
      backgroundColor: '#ffffff',
      fontFamily: 'sans-serif'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>{namaAlat}</h3>
      <p style={{ margin: '4px 0', color: '#475569' }}>Kategori: {kategori}</p>
      <p style={{ margin: '4px 0', color: '#475569' }}>Jumlah: {jumlah} unit</p>
      
      {tersedia ? (
        <span style={{ 
          display: 'inline-block', 
          marginTop: '8px', 
          padding: '4px 8px', 
          backgroundColor: '#dcfce7', 
          color: '#166534', 
          borderRadius: '4px', 
          fontSize: '12px', 
          fontWeight: 'bold' 
        }}>
          ✅ Tersedia
        </span>
      ) : (
        <span style={{ 
          display: 'inline-block', 
          marginTop: '8px', 
          padding: '4px 8px', 
          backgroundColor: '#fee2e2', 
          color: '#991b1b', 
          borderRadius: '4px', 
          fontSize: '12px', 
          fontWeight: 'bold' 
        }}>
          ❌ Dipinjam
        </span>
      )}
    </article>
  );
}