import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTable, isiTableKemahasiswaan, isiTableKeuangan, isiTableMahasiswa, isiTableNilai } from "./controller/get.js";
import { urlAPI,urlAPIKemahasiswaan,urlAPIMahasiswa,urlAPIKeuangan,urlAPINilai} from "./config/url.js";
get(urlAPI, isiTable);

get(urlAPIKemahasiswaan, isiTableKemahasiswaan);
get(urlAPIMahasiswa, isiTableMahasiswa);
get(urlAPIKeuangan, isiTableKeuangan);
get(urlAPINilai, isiTableNilai);
