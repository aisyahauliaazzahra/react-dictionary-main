import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

function EditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [istilah, setIstilah] = useState("");
  const [definisi, setDefinisi] = useState("");
  const [sinonim, setSinonim] = useState("");

  useEffect(() => {
    const allTerms = JSON.parse(localStorage.getItem("terms")) || [];
    const termToEdit = allTerms.find((t) => t.id === Number(id));
    if (termToEdit) {
      setIstilah(termToEdit.word || "");
      setDefinisi(termToEdit.definisi || "");
      setSinonim(termToEdit.sinonim || "");
    } else {
      alert("Istilah tidak ditemukan");
      navigate("/admin");
    }
  }, [id, navigate]);

  const handleUpdate = () => {
    const updatedTerms = JSON.parse(localStorage.getItem("terms")) || [];
    const updatedList = updatedTerms.map((t) =>
      t.id === Number(id)
        ? { ...t, word: istilah, definisi, sinonim }
        : t
    );
    localStorage.setItem("terms", JSON.stringify(updatedList));
    navigate("/admin");
  };

  return (
    <div className="form-container">
      <h2>Edit Istilah</h2>
      <label>Istilah</label>
      <input value={istilah} onChange={(e) => setIstilah(e.target.value)} />

      <label>Definisi</label>
      <textarea value={definisi} onChange={(e) => setDefinisi(e.target.value)} />

      <label>Sinonim Gaul</label>
      <input value={sinonim} onChange={(e) => setSinonim(e.target.value)} />

      <div className="button-group">
        <button onClick={handleUpdate} className="btn-simpan">Perbarui</button>
        <button onClick={() => navigate("/admin")} className="btn-batal">Batal</button>
      </div>
    </div>
  );
}

export default EditPage;
