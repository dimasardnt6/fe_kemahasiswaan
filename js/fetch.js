import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://dimasardnt6-ulbi.herokuapp.com/all-kemahasiswaan";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}