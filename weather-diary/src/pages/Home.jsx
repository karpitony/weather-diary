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
    <div className="flex flex-col items-center w-full max-w-3xl h-screen">
      <h1 className="text-2xl font-bold mt-4">📘 나의 날씨 일기</h1>
      <div className="flex flex-col items-center mt-4 w-full">
        {dummyData.map((diary, index) => (
          <DiaryCard
            key={index}
            title={diary.title}
            content={diary.content}
            date={diary.date}
            weather={diary.weather}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
