import axios from "axios";

const getAllWords = async () => {
  const response = await axios.get("http://127.0.0.1:3001/api/v1/words");
  return response.data;
};

const getWordById = async (id) => {
  const response = await axios.get(`http://127.0.0.1:3001/api/v1/words/${id}`);
  return response.data;
};

const createWord = async (word) => {
  const response = await axios.post("http://127.0.0.1:3001/api/v1/words", word);
  return response.data;
};

const updateWord = async (id, word) => {
  const response = await axios.put(
    `http://127.0.0.1:3001/api/v1/words/${id}`,
    word
  );
  return response.data;
};

const deleteWord = async (id) => {
  const response = await axios.delete(
    `http://127.0.0.1:3001/api/v1/words/${id}`
  );
  return response.data;
};

export { getAllWords, getWordById, createWord, updateWord, deleteWord };
