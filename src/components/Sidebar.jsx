// const SidebarItem = ({ icon, text, active, locked }) => {
//     return (
//       <li
//         className={`py-2 px-3 rounded-lg flex items-center gap-2 cursor-pointer transition duration-300 ${
//           active ? "bg-orange-400 text-white" : "hover:bg-gray-700 text-orange-400"
//         } ${locked ? "opacity-50 cursor-not-allowed" : ""}`}
//       >
//         {icon} {text} {locked && <FaLock className="ml-auto" />}
//       </li>
//     );
//   };
  
//   export default SidebarItem;


import { FaBook, FaBoxes, FaHome, FaLayerGroup, FaLock, FaPencilAlt, FaRegQuestionCircle, FaUsers } from "react-icons/fa";
import Logo from "../assets/Logo.png"
import { useNavigate } from "react-router-dom";
  const Sidebar = () => {
const navigate=useNavigate()
    return (
      <aside className="w-64 bg-gray-950 border-r-1 h-screen p-5 text-gray-300">
        <div className="flex items-center gap-2 text-lg font-bold text-orange-400">
        <img className="h-16 w-16" src={Logo} alt="Logo" />
        
        </div>
        <nav className="mt-6">
          <ul>
          <li className="py-2 px-3 rounded-lg hover:bg-gray-700 flex items-center gap-2 text-orange-400">
          <FaHome /> Dashboard
            </li>
            <li onClick={()=>{navigate("/dashboard/dashboard/courses/")}} className="py-2 px-3 rounded-lg hover:bg-gray-700 flex items-center gap-2 text-orange-400 ">
              <FaBook /> Course
            </li>
            
            <li className="py-2 px-3 rounded-lg hover:bg-gray-700 flex items-center gap-2 text-orange-400">
              <FaUsers /> Manage Users
            </li>
            <li className="py-2 px-3 rounded-lg hover:bg-gray-700 flex items-center gap-2 opacity-100 blur-xs cursor-not-allowed text-orange-400">
              <FaPencilAlt /> Modules <FaLock className="ml-auto" />
            </li>
            <li className="py-2 px-3 rounded-lg hover:bg-gray-700 flex items-center gap-2 opacity-100 blur-xs cursor-not-allowed text-orange-400">
              <FaLayerGroup /> Hubs <FaLock className="ml-auto" />
            </li>
            <li className="py-2 px-3 rounded-lg hover:bg-gray-700 flex items-center gap-2 opacity-100 blur-xs cursor-not-allowed text-orange-400">
              <FaRegQuestionCircle /> Pop-Ups <FaLock className="ml-auto" />
            </li>
            <li className="py-2 px-3 rounded-lg hover:bg-gray-700 flex items-center gap-2 opacity-100 blur-xs cursor-not-allowed text-orange-400">
              <FaBoxes /> Bundles <FaLock className="ml-auto" />
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
  export default Sidebar