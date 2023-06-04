export function isiData(results) {  
    const inputMapping = [
      { id: 'npm', path: 'identitas.npm' },
      { id: 'nama', path: 'identitas.nama' },
      { id: 'no_hp', path: 'identitas.no_hp' },
      { id: 'kode_prodi', path: 'identitas.prodi.kode_prodi' },
      { id: 'nama_prodi', path: 'identitas.prodi.nama' },
      { id: 'jurusan', path: 'identitas.jurusan' },
      { id: 'kelas', path: 'identitas.kelas' },
      { id: 'total_pembayaran', path: 'status_keuangan.total_pembayaran' },
      { id: 'nama_matkul', path: 'nilai_mhs.matakuliah.nama_matkul' },
      { id: 'dosen', path: 'nilai_mhs.matakuliah.dosen' },
      { id: 'nilai_angka', path: 'nilai_mhs.nilai_angka' },
      { id: 'nilai_huruf', path: 'nilai_mhs.nilai_angka' },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
  }
  
  function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    // console.log(`Value at path ${path}:`, value);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
  }