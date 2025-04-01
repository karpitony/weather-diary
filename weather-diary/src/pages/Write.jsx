import { useState } from "react";
import { useNavigate } from "react-router";
import { saveDiary, loadDiary } from "@/utils/storage";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  let diaryList = loadDiary();

  const handleCreateDiary = () => {
    const diary = {
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      weather: "sunny", // 기본값으로 sunny 설정
    }
    saveDiary([...diaryList, diary]);
    navigate('/');
  }

  return(
    <div className="flex flex-col h-screen">
      <h1 className="text-2xl font-bold">✍️ 일기 작성 페이지</h1>
      <input 
        placeholder="제목을 작성하세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mt-4 p-2 border rounded"
        type="text"
      />
      <textarea 
        placeholder="일기를 작성하세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mt-4 p-2 border rounded resize-none"
      />
      <button onClick={handleCreateDiary}>저장</button>
    </div>
  );
}

export default Write;
