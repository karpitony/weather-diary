import Header from "../components/Header";
import DiaryCard from "../components/DiaryCard";

const dummyData = [
  {
    title: "오늘의 날씨",
    content: "날씨가 맑고 기분이 좋았다.",
    date: "2023-10-01",
    weather: "sunny",
  },
  {
    title: "비 오는 날",
    content: "비가 와서 우산을 챙겼다.",
    date: "2023-10-02",
    weather: "rainy",
  },
];

function Home() {
  return(
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-3xl h-screen">
        <Header />
        <h1 className="text-2xl font-bold mt-4">📘 나의 날씨 일기</h1>
        <div className="flex flex-col items-center mt-4 w-full">
          {dummyData.map((entry, index) => (
            <DiaryCard
              key={index}
              title={entry.title}
              content={entry.content}
              date={entry.date}
              weather={entry.weather}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
