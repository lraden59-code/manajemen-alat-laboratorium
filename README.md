# Manajemen Alat Laboratorium

Aplikasi web berbasis React dan Vite yang dikembangkan untuk memenuhi tugas praktikum Pemrograman Web II. Aplikasi ini berfungsi untuk mengelola data inventaris alat-alat laboratorium.

## 📋 Daftar Komponen & Props
Proyek ini menggunakan komponen modular untuk menampilkan informasi data alat lab:
- **Komponen**: `AlatCard.jsx`
- **Props yang Digunakan**:
  - `namaAlat` (string): Nama perangkat laboratorium (contoh: Multimeter Digital, Modul ESP32 IoT).
  - `jumlah` (number): Total unit alat yang tersedia.
  - `kategori` (string): Bidang kelompok alat (Elektronika, Mikrokontroler, Jaringan Komputer).
  - `tersedia` (boolean): Status ketersediaan alat, dirender secara kondisional (lencana hijau jika tersedia, merah jika dipinjam).

## 🚀 Cara Menjalankan Proyek
Ikuti langkah-langkah berikut di terminal untuk mengunduh dan menjalankan proyek ini secara lokal:

1. **Clone repositori:**
   ```bash
   git clone [https://github.com/lraden59-code/manajemen-alat-laboratorium.git](https://github.com/lraden59-code/manajemen-alat-laboratorium.git)
