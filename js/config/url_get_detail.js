//mendapatkan parameter dari url

const urlParams = new URLSearchParams(window.location.search);
const kemahasiswaanId = urlParams.get('kemahasiswaanId');

export let urlFetch = 'https://dimasardnt6-ulbi.herokuapp.com/all-kemahasiswaan' + kemahasiswaanId;