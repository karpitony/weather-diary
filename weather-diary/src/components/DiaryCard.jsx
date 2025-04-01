function DiaryCard({ date, content }) {
  return (
    <div>
      <p>
        <strong>{date}</strong>
      </p>
      <p>{content}</p>
    </div>
  );
}

export default DiaryCard;
