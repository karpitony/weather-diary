import { useState } from "react";
import { useNavigate } from "react-router";
import WeatherBox from "@/components/WeatherBox";
import { saveDiary, loadDiary } from "@/utils/storage";
import useWeather from "../hooks/useWeather";
import cn from "@/utils/cn";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  let diaryList = loadDiary();
  const { weather, loading, error } = useWeather();

  const handleCreateDiary = () => {
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const diary = {
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      weather: weather.weather,
      temperature: weather.temperature,
    }
    saveDiary([ diary, ...diaryList]);
    navigate('/');
  }
  return(
    <div className="flex flex-col h-screen w-full max-w-xl items-center">
      <h1 className="text-2xl font-bold mt-6">✍️ 일기 작성 페이지</h1>
      <WeatherBox weather={weather} loading={loading} error={error} />
      <section className="flex flex-col items-center mt-4 w-full">
        <p className="text-xl mt-2 w-full font-semibold">제목</p>
        <input 
          placeholder="제목을 작성하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={cn(
            "mt-4 p-2 border rounded w-full bg-white",
            "focus:outline-none border-gray-600",
          )}
          type="text"
        />
      </section>
      <section className="flex flex-col items-center mt-4 w-full">
        <p className="text-xl mt-2 w-full font-semibold">내용</p>
        <textarea 
          placeholder="일기를 작성하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={cn(
            "mt-4 p-2 border rounded w-full bg-white",
            "focus:outline-none border-gray-600 resize-none min-h-48 ",
          )}
        />
      </section>
      <button 
        onClick={handleCreateDiary}
        className={cn(
          "px-8 py-2 m-4 text-white font-bold text-xl",
          "bg-blue-400 rounded-lg  hover:bg-blue-500 transition duration-300"
        )}
      >
        저장하기
      </button>
    </div>
  );
}

export default Write;
