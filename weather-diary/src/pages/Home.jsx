import DiaryCard from "../components/DiaryCard";
import { loadDiary } from "../utils/storage";

function Home() {
  const diaries = loadDiary();
  return(
    <div className="flex flex-col items-center w-full max-w-3xl h-screen">
      <h1 className="text-3xl font-bold my-6">📘 나의 날씨 일기</h1>
      <div className="flex flex-col items-center mt-4 w-full gap-4">
        {diaries.map((diary, index) => (
          <DiaryCard
            key={index}
            title={diary.title}
            content={diary.content}
            date={diary.date}
            weather={diary.weather}
            temperature={diary.temperature}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
