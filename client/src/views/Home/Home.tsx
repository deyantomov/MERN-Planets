import { useNavigate } from "react-router-dom";

export default function Home(): React.ReactNode {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/data");
  }
  return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-green-700 gap-8">
      <h1 className="text-6xl text-white">MERN Planets</h1>
      <button className="text-2xl text-black bg-gray-100/30 px-4 py-2 rounded-md" onClick={handleClick}>View data as a table</button>
    </div>
  );
}