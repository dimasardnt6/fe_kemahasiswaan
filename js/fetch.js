import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./tabel.js";
let urlAPI = "https://dimasardnt6-ulbi.herokuapp.com/all-kemahasiswaan";
get(urlAPI, isiTablePresensi);
function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#NPM#", value.identitas.npm)
            .replace("#NAMA#", value.identitas.nama)
            .replace("#NOHP#", value.identitas.no_hp)
            .replace("#NAMAPRODI#", value.identitas.prodi.nama)
            .replace("#JURUSAN#", value.identitas.jurusan)
            .replace("#PEMBAYARAN#", value.status_keuangan.total_pembayaran)
            .replace("#MATKUL#", value.nilai_mhs.matakuliah.nama_matkul)
            .replace("#DOSEN#", value.nilai_mhs.matakuliah.dosen)
            .replace("#ANGKA#", value.nilai_mhs.nilai_angka)
            .replace("#HURUF#", value.nilai_mhs.nilai_huruf)
            .replace("#KELAS#", value.identitas.kelas)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}