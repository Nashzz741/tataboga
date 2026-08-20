export interface AnggotaStruktur {
  id: string;
  nama: string;
  jabatan: string;
  foto?: string;
}

export const daftarAnggota: AnggotaStruktur[] = [
  {
    id: "1",
    nama: "Ibu Dra. Siti Rahmawati, M.Pd",
    jabatan: "Pembina Eskul",
    foto: "/images/image2.png",
  },
  { id: "2", nama: "Ahmad Zaky Musyaffa", jabatan: "Ketua Eskul", foto: "" },
  { id: "3", nama: "Nabila Putri Maharani", jabatan: "Wakil Ketua", foto: "" },
  { id: "4", nama: "Siti Nurhaliza", jabatan: "Bendahara 1", foto: "" },
  { id: "5", nama: "Dewi Lestari", jabatan: "Bendahara 2", foto: "" },
  { id: "6", nama: "Rian Hidayat", jabatan: "Bendahara 3", foto: "" },
  { id: "7", nama: "Aisyah Zahra", jabatan: "Sekretaris 1", foto: "" },
  { id: "8", nama: "Budi Santoso", jabatan: "Sekretaris 2", foto: "" },
  { id: "9", nama: "Citra Kirana", jabatan: "Tim Absensi 1", foto: "" },
  { id: "10", nama: "Dimas Anggara", jabatan: "Tim Absensi 2", foto: "" },
  { id: "11", nama: "Eko Prasetyo", jabatan: "Dokumentasi 1", foto: "" },
  { id: "12", nama: "Fani Rahmawati", jabatan: "Dokumentasi 2", foto: "" },
  { id: "13", nama: "Gilang Ramadhan", jabatan: "Dokumentasi 3", foto: "" },
  { id: "14", nama: "Hana Salsabila", jabatan: "Dokumentasi 4", foto: "" },
  { id: "15", nama: "Indra Wijaya", jabatan: "Dokumentasi 5", foto: "" },
];
