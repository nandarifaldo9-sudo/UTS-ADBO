class Cuti {
  constructor(namaCuti, kuota) {
    this.namaCuti = namaCuti;
    this.kuota = kuota;
  }

  info() {
    return `${this.namaCuti}: Sisa kuota ${this.kuota} hari.`;
  }

  ajukan(jumlahHari) {
    if (jumlahHari <= 0) {
      console.log(`Jumlah hari untuk ${this.namaCuti} tidak valid.`);
      return;
    }

    if (this.kuota >= jumlahHari) {
      this.kuota -= jumlahHari;
      console.log(
        `Pengajuan ${this.namaCuti} selama ${jumlahHari} hari disetujui. (Sisa: ${this.kuota} hari)`
      );
    } else {
      console.log(
        `Kuota anda tidak cukup untuk mengajukan cuti ini. (Sisa: ${this.kuota}, Diminta: ${jumlahHari})`
      );
    }
  }
}

class CutiTahunan extends Cuti {
  constructor() {
    super("Cuti Tahunan", 12);
  }
  
  info() {
    return `${super.info()} (Gunakan untuk liburan/istirahat panjang).`;
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
    this.daftarCuti = {
      tahunan: new CutiTahunan(),
      sakit: new CutiSakit(),
      melahirkan: new CutiMelahirkan(),
    };
  }

  ambilCuti(jenisCuti, jumlahHari) {
    console.log(`\n--- ${this.nama} mengajukan ${jenisCuti} (${jumlahHari} hari) ---`);
    
    const cutiPilihan = this.daftarCuti[jenisCuti];

    if (cutiPilihan) {
      cutiPilihan.ajukan(jumlahHari);
    } else {
      console.log("Jenis cuti tidak ditemukan.");
    }
  }

  cekSemuaKuota() {
    console.log(`\n--- Status Kuota Cuti: ${this.nama} ---`);
    Object.values(this.daftarCuti).forEach((cuti) => {
      console.log(cuti.info());
    });
  }
}

const karyawan1 = new Karyawan("Budi", "Staff IT");

karyawan1.cekSemuaKuota();
karyawan1.ambilCuti("tahunan", 5);
karyawan1.ambilCuti("sakit", 3); 
karyawan1.ambilCuti("melahirkan", 45);
karyawan1.ambilCuti("tahunan", 7);
karyawan1.ambilCuti("tahunan", 1);