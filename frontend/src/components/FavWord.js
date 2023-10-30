import React, { useEffect, useState } from "react";
import { getAllWords, deleteWord } from "../api/api";
import Flashcard from "./Flashcard";
import { TiDeleteOutline } from "react-icons/ti";
function FavWord() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const fetchedWords = await getAllWords();
      setWords(fetchedWords);
      setLoading(false);
    } catch (error) {
      console.error("Veri yüklenirken bir hata oluştu:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteWord(id);
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error("Silme işlemi sırasında hata oluştu:", error);
    }
  };

  if (loading) {
    return <div>Veri yükleniyor...</div>;
  }

  if (!words.data || !Array.isArray(words.data.words)) {
    return <div>Veri bulunamadı.</div>;
  }

  return (
    <div className="flex">
      {words.data.words.map((item, index) => (
        <div key={index} className="relative">
          <Flashcard english={item.english} turkish={item.turkish} />

          <button
            className="absolute top-2 right-2 p-2 text-2xl text-white"
            onClick={() => {
              handleDelete(item._id);
            }}
          >
            <TiDeleteOutline />
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavWord;
