const urlParams = new URLSearchParams(window.location.search);
const kemahasiswaanId = urlParams.get('kemahasiswaanId');

export let urlPUT = "https://dimasardnt6-ulbi.herokuapp.com/upd-kemahasiswaan" + kemahasiswaanId;

export function AmbilResponse(result) {
    console.log(result);
    alert(result.message);
    window.location.href = "index.html"
}