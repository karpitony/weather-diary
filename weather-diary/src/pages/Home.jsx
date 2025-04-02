import { useState } from "react";
import DiaryCard from "../components/DiaryCard";
import { loadDiary, saveDiary } from "../utils/storage";

function Home() {
  const [diaries, setDiaries] = useState(loadDiary());
  const handleDeleteClick = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const newDairyList = diaries.filter((diary) => diary.id !== id);
      saveDiary(newDairyList);
      setDiaries(newDairyList);
    }
  };

  return(
    <div className="flex flex-col items-center w-full max-w-3xl h-screen">
      <h1 className="text-2xl font-bold my-6">📘 나의 날씨 일기</h1>
      <div className="flex flex-col items-center mt-4 w-full gap-4">
        {diaries.map((diary, index) => (
          <DiaryCard
            key={index}
            id={diary.id}
            title={diary.title}
            content={diary.content}
            date={diary.date}
            weather={diary.weather}
            temperature={diary.temperature}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
