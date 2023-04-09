import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTable, isiTableKemahasiswaan, isiTableKeuangan, isiTableMahasiswa, isiTableNilai} from "./controller/get.js";
import { urlAPI, urlAPIKemahasiswaan, urlAPIKeuangan ,urlAPIMahasiswa ,urlAPINilai} from "./config/url.js";
get(urlAPI, isiTable);

get(urlAPIKemahasiswaan, isiTableKemahasiswaan);
get(urlAPIKeuangan, isiTableKeuangan);
get(urlAPIMahasiswa, isiTableMahasiswa);
get(urlAPINilai, isiTableNilai);
