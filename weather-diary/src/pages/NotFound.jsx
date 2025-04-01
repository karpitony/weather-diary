export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">404 Not Found</h1>
      <p className="mt-4 text-lg text-gray-700">죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">홈으로 돌아가기</a>
    </div>
  );
}