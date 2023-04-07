import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel, isiTabel2, isiTabel3, isiTabel4,isiTabel5 } from "../temp/table.js";
export function isiTable(results) {
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

export function isiTableKemahasiswaan(results) {
    results.forEach(isiRow2);
}
function isiRow2(value) {
    let content = 
    isiTabel2.replace("#NPM#", value.identitas.npm)
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
        addInner("iniTabel2", content);
}

export function isiTableMahasiswa(results) {
    results.forEach(isiRow3);
}
function isiRow3(value) {
    let content = 
    isiTabel3.replace("#NPM#", value.npm)
            .replace("#NAMA#", value.nama)
            .replace("#NOHP#", value.no_hp)
            .replace("#KODEPRODI#", value.prodi.kode_prodi)
            .replace("#NAMAPRODI#", value.prodi.nama)
            .replace("#JURUSAN#", value.jurusan)
            .replace("#KELAS#", value.kelas)
        addInner("iniTabel3", content);
}

export function isiTableKeuangan(results) {
    results.forEach(isiRow4);
}
function isiRow4(value) {
    let content = 
    isiTabel4.replace("#NPM#", value.bio_mahasiswa.npm)
            .replace("#NAMA#", value.bio_mahasiswa.nama)
            .replace("#NOHP#", value.bio_mahasiswa.no_hp)
            .replace("#KODEPRODI#", value.bio_mahasiswa.prodi.kode_prodi)
            .replace("#NAMAPRODI#", value.bio_mahasiswa.prodi.nama)
            .replace("#JURUSAN#", value.bio_mahasiswa.jurusan)
            .replace("#KELAS#", value.bio_mahasiswa.kelas)
            .replace("#SPP#", value.total_pembayaran)
        addInner("iniTabelKeuangan", content);
}


export function isiTableNilai(results) {
    results.forEach(isiRow5);
}
function isiRow5(value) {
    let content = 
    isiTabel5.replace("#NPM#", value.bio_mhs.npm)
            .replace("#NAMA#", value.bio_mhs.nama)
            .replace("#NOHP#", value.bio_mhs.no_hp)
            .replace("#KODEPRODI#", value.bio_mhs.prodi.kode_prodi)
            .replace("#NAMAPRODI#", value.bio_mhs.prodi.nama)
            .replace("#JURUSAN#", value.bio_mhs.jurusan)
            .replace("#MATKUL#", value.matakuliah.nama_matkul)
            .replace("#DOSEN#", value.matakuliah.dosen)
            .replace("#KELAS#", value.bio_mhs.kelas)
            .replace("#ANGKA#", value.nilai_angka)
            .replace("#HURUF#", value.nilai_huruf)
        addInner("iniTabel5", content);
}