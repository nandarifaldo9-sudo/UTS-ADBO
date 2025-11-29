class Cuti {
  constructor(nama, kuota) {
    this.nama = nama;
    this.kuota = kuota;
  }

  info() {
    return `${this.nama}: Sisa kuota ${this.kuota} hari.`;
  }

  ajukan(hari) {
    if (hari <= 0) {
      console.log(`Jumlah hari tidak valid.`);
      return;
    }
    if (hari > this.kuota) {
      console.log(`Kuota ${this.nama} tidak cukup. (Sisa: ${this.kuota}, Diminta: ${hari})`);
      return;
    }
    this.kuota -= hari;
    console.log(`Cuti ${this.nama} ${hari} hari disetujui. (Sisa: ${this.kuota} hari)`);
  }
}

class CutiTahunan extends Cuti {
  constructor() {
    super("Cuti Tahunan", 12);
  }
  info() {
    return super.info() + " (Untuk liburan/istirahat panjang.)";
  }
}

class CutiSakit extends Cuti {
  constructor() {
    super("Cuti Sakit", 2);
  }
}

class CutiMelahirkan extends Cuti {
  constructor() {
    super("Cuti Melahirkan", 90);
  }
}

class Karyawan {
  constructor(nama, jabatan) {
    this.nama = nama;
    this.jabatan = jabatan;
    this.cuti = {
      tahunan: new CutiTahunan(),
      sakit: new CutiSakit(),
      melahirkan: new CutiMelahirkan(),
    };
  }

  ambil(jenis, hari) {
    console.log(`\n--- ${this.nama} mengajukan ${jenis} (${hari} hari) ---`);
    const pilih = this.cuti[jenis];
    if (!pilih) {
      console.log("Jenis cuti tidak ditemukan.");
      return;
    }
    pilih.ajukan(hari);
  }

  cekKuota() {
    console.log(`\n--- Kuota Cuti: ${this.nama} ---`);
    Object.values(this.cuti).forEach((c) => console.log(c.info()));
  }
}

// Contoh penggunaan
const karyawan1 = new Karyawan("Budi", "Staff IT");

karyawan1.cekKuota();
karyawan1.ambil("tahunan", 5);
karyawan1.ambil("sakit", 3);
karyawan1.ambil("melahirkan", 45);
karyawan1.ambil("tahunan", 7);
karyawan1.ambil("tahunan", 1);