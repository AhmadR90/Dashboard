import { useState, useRef, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import I1 from "../assets/Course1.jpeg"; // Sample image
import { useNavigate } from "react-router-dom";
const CourseCard = ({ title, date, image }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-900 p-3 rounded-lg overflow-hidden shadow-lg relative">
      {/* Image Container with Three Dots Menu */}
      <div className="relative">
        <img src={image} alt={title} className="rounded-lg h-60 w-full" />

        {/* Three Dots Button */}
        <button
          className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MoreVertical size={20} />
        </button>

    
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute right-2 top-10 bg-black shadow-lg rounded-md w-32 flex flex-col border border-gray-700"
          >
            <button
              onClick={() => {
                navigate("/dashboard/dashboard/edit");
              }}
              className="px-4 py-2 text-white text-sm hover:bg-gray-700 text-left"
            >
              Edit
            </button>
            <button className="px-4 py-2 text-red-500 text-sm hover:bg-red-600 hover:text-white text-left">
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Course Details */}
      <h3 className="text-white font-bold mt-2">{title}</h3>
      <p className="text-gray-400 text-sm">Created at {date}</p>
    </div>
  );
};

export default CourseCard;
