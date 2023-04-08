import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTable, isiTableKemahasiswaan} from "./controller/get.js";
import { urlAPI, urlAPIKemahasiswaan} from "./config/url.js";
get(urlAPI, isiTable);

get(urlAPIKemahasiswaan, isiTableKemahasiswaan);
