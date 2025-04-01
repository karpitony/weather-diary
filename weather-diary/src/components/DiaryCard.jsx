function DiaryCard({ title, content, date, weather }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{content}</p>
      <p>{weather}</p>
    </div>
  );
}

export default DiaryCard;
