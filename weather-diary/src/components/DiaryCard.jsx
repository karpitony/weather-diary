function DiaryCard({ title, content, date, weather }) {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{date}</p>
      <p>{content}</p>
      <p>{weather}</p>
    </div>
  );
}

export default DiaryCard;
