import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put.js";


function pushData(){

    let data = {
        identitas: {
            npm: getValue("npm"),
            nama: getValue("nama"),
            no_hp: getValue("no_hp"),
            prodi: {
                kode_prodi: getValue("kode_prodi"),
                nama: getValue("nama_prodi")
            },
            jurusan: getValue("jurusan"),
            kelas: getValue("kelas")
        },
        status_keuangan: {
            total_pembayaran: parseInt(getValue("total_pembayaran")),
        },
        nilai_mhs: {
            matakuliah: {
                nama_matkul: getValue("nama_matkul"),
                dosen: getValue("dosen"), 
            },
            nilai_angka: parseInt(getValue("nilai_angka")),
            nilai_huruf: getValue("nilai_huruf"),
        }
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);