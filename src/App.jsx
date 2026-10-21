// Halaman Utama Aplikasi Manajemen Alat Laboratorium
import AlatCard from './components/AlatCard.jsx';

export default function App() {
  return (
    <main style={{ 
      padding: '24px', 
      fontFamily: 'sans-serif', 
      backgroundColor: '#f8fafc', 
      minHeight: '100vh' 
    }}>
      <h1>Manajemen Alat Laboratorium</h1>
      <AlatCard 
        namaAlat="Multimeter Digital" 
        jumlah={5} 
        kategori="Elektronika" 
        tersedia={true} 
      />
      <AlatCard 
        namaAlat="Modul ESP32 IoT" 
        jumlah={10} 
        kategori="Mikrokontroler" 
        tersedia={true} 
      />
      <AlatCard 
        namaAlat="Crimping Tool" 
        jumlah={2} 
        kategori="Jaringan Komputer" 
        tersedia={false} 
      />
    </main>
  );
}