import { useNavigate } from "react-router";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCalendarAlt, FaTrashAlt } from "react-icons/fa";
import { weatherIconMap } from "./WeatherIcons";
import cn from "@/utils/cn";

function DiaryCard({
  id,
  title,
  content, 
  date,
  weather,
  temperature,
  handleDeleteClick
}) {
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`/write`, {
      state: {
        id,
        title,
        content,
        date,
        weather,
        temperature,
      },
    });
  };

  const WeatherIcon =
    weatherIconMap[weather] || weatherIconMap['default'];
  
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-6 w-full max-w-2xl gap-4">
      <div className="flex items-center justify-between w-full">
        {/* 날짜 표시 */}
        <div className="flex items-center justify-center gap-2">
          <FaCalendarAlt className="w-6 h-6" />
          <p className="text-lg">{date}</p>
        </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleDeleteClick(id)}
              className={cn(
                "text-black rounded-lg flex flex-col items-center justify-center p-1",
                "hover:bg-gray-300 hover:shadow-gray-400 rounded-lg ease-in-out transition-colors"
              )}
            >
              <FaTrashAlt className="w-6 h-6"/>
            </button>
            <button
              onClick={handleEditClick}
              className={cn(
                "text-black rounded-lg flex flex-col items-center justify-center p-1",
                "hover:bg-gray-300 hover:shadow-gray-400 rounded-lg ease-in-out transition-colors"
              )}
            >
              <AiOutlineEdit className="w-6 h-6"/>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          {/* 제목과 내용 표시 */}
          <div className="flex flex-col items-start w-full py-2 gap-2 h-full">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-lg">{content}</p>
          </div>
          <div className="flex flex-col items-center w-24 ml-10 h-full">
            <WeatherIcon className="w-24 h-24" />
            <p>{weather}</p>
            <p>{temperature} °C</p>
          </div>
        </div>
    </div>
  );
}

export default DiaryCard;
