import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tambah.css"; // opsional
import axios from "axios";


function TambahEditPage() {
  const navigate = useNavigate();
  const [istilah, setIstilah] = useState("");
  const [definisi, setDefinisi] = useState("");
  const [kelas_kata, setKelasKata] = useState("");
  const [sinonim, setSinonim] = useState("");
  const [terkait, setTerkait] = useState("");

  const handleSimpan = async () => {
    if (istilah.trim() === "") {
      alert("Istilah tidak boleh kosong!");
      return;
    }

    const newTerm = {
      id: Date.now(),
      word: istilah,
      definisi,
      kelas_kata,
      sinonim,
      terkait
    };

    try {
      const existing = JSON.parse(localStorage.getItem("terms")) || [];
      existing.push(newTerm);
      localStorage.setItem("terms", JSON.stringify(existing));
      // Kosongkan form
      setDefinisi("");
      setKelasKata("");
      setSinonim("");
      setTerkait("");
    } catch (error) {
      console.error("Error simpan istilah:", error);
      alert("Terjadi kesalahan saat menyimpan.");
    }

    // Kembali ke halaman admin
    navigate("/admin");
  };

  return (
    <div className="form-container">
      <h2>Tambah dan Edit</h2>
      <label>Istilah</label>
      <input value={istilah} onChange={(e) => setIstilah(e.target.value)} />

      <label>Definisi</label>
      <textarea value={definisi} onChange={(e) => setDefinisi(e.target.value)} />
      <label>Kelas Kata</label>
      <input value={kelas_kata} onChange={(e) => setKelasKata(e.target.value)} />
      <label>Sinonim Gaul</label>
      <input value={sinonim} onChange={(e) => setSinonim(e.target.value)} />
      <label>Kata Terkait</label>
      <input value={terkait} onChange={(e) => setTerkait(e.target.value)} />

      <div className="button-group">
        <button onClick={handleSimpan} className="btn-simpan">Simpan</button>
        <button onClick={() => navigate("/admin")} className="btn-batal">Batal</button>
      </div>
    </div>
  );
}

export default TambahEditPage;
