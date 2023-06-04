import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post.js";


function pushData(){
    var hari_kerja = getValue("hari_kerja");

    let data = {
        identitas: {
            npm: getValue("npm"),
            nama: getValue("nama"),
            no_hp: getValue("no_hp"),
            prodi: [{
                kode_prodi: getValue("kode_prodi"),
                nama: getValue("nama_prodi")
            }],
            jurusan: getValue("jurusan"),
            kelas: getValue("kelas")
        },
        status_keuangan: {
            total_pembayaran: parseInt(getValue("total_pembayaran"))
        },
        nilai_mhs: {
            matakuliah: [{
                nama_matkul: getValue("nama_matkul"),
                dosen: getValue("dosen")
            }],
            nilai_angka: parseInt(getValue("nilai_angka")),
            nilai_huruf: getValue("nilai_huruf")
        }
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);