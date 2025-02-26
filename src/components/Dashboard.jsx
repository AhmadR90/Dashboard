// import { useState } from "react";
// import {
//   FaHome,
//   FaUsers,
//   FaBook,
//   FaLayerGroup,
//   FaRegQuestionCircle,
//   FaComments,
//   FaBoxes,
//   FaLock,
//   FaPencilAlt,
//   FaQuestion,
//   FaSearch,
// } from "react-icons/fa";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import NavLink from "rea"
// import { IoMdSettings } from "react-icons/io";
// import { FiBell, FiSettings } from "react-icons/fi";
// import Logo from "../assets/Logo.png";
// import Sidebar from "./Sidebar";
// import Dummy from "./Dummy";
// import Courses from "./Courses";
// import AddCourseForm from "./AddCourseForm";
// import EditCourse from "./EditCourse";

// const Dashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-950  text-gray-300">
//       <Sidebar />
//       <main className="flex-1 p-6">
//         <div>
//           <header className="flex justify-between items-center mb-6">
//             <div className="relative flex items-center w-400px max-w-sm">
//               <input
//                 className="w-full bg-[#242322] text-white rounded-lg p-2 pr-10 outline-none focus:ring-2 focus:ring-gray-500"
//                 placeholder="Search..."
//               />
//               <FaSearch className="absolute right-3 text-gray-400" />
//             </div>
//             <div className="flex gap-3">
//               <button className="p-2 bg-gray-700 rounded-full">
//                 <FaQuestion />
//               </button>
//               <button className="p-2 bg-gray-700 rounded-full">
//                 <FiBell />
//               </button>
//               <button className="p-2 bg-gray-700 rounded-full">
//                 <FiSettings />
//               </button>

//               <button className="p-2 bg-red-500 text-white rounded-full">
//                 W
//               </button>
//             </div>
//           </header>
//         </div>

//         <Routes>
//           <Route path="/" element={<Dummy />} />
//           <Route path="/dashboard/courses" element={<Courses />} />
//           <Route path="/dashboard/addcourse" element={<AddCourseForm />} />
//           <Route path="/dashboard/edit" element={<EditCourse />} />
//         </Routes>

//         {/* <Dummy/>
//         <Courses />
//         <AddCourseForm/> */}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

import { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaBook,
  FaLayerGroup,
  FaRegQuestionCircle,
  FaComments,
  FaBoxes,
  FaLock,
  FaPencilAlt,
  FaQuestion,
  FaSearch,
} from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { FiBell, FiSettings } from "react-icons/fi";
import Logo from "../assets/Logo.png";
import Sidebar from "./Sidebar";
import Dummy from "./Dummy";
import Courses from "./Courses";
import AddCourseForm from "./AddCourseForm";
import EditCourse from "./EditCourse";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  // Function to handle adding a new course
  const handleAddCourse = (newCourse) => {
    const courseWithDate = {
      ...newCourse,
      date: new Date().toLocaleDateString(), // Add creation date
    };
    setCourses([...courses, courseWithDate]);
  };

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-300">
      <Sidebar />
      <main className="flex-1 p-6">
        <div>
          <header className="flex justify-between items-center mb-6">
            <div className="relative flex items-center w-400px max-w-sm">
              <input
                className="w-full bg-[#242322] text-white rounded-lg p-2 pr-10 outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Search..."
              />
              <FaSearch className="absolute right-3 text-gray-400" />
            </div>
            <div className="flex gap-3">
              <button className="p-2 bg-gray-700 rounded-full">
                <FaQuestion />
              </button>
              <button className="p-2 bg-gray-700 rounded-full">
                <FiBell />
              </button>
              <button className="p-2 bg-gray-700 rounded-full">
                <FiSettings />
              </button>

              <button className="p-2 bg-red-500 text-white rounded-full">
                W
              </button>
            </div>
          </header>
        </div>

        <Routes>
          <Route path="/" element={<Dummy />} />
          <Route
            path="/dashboard/courses"
            element={<Courses courses={courses} onAddCourse={handleAddCourse} />}
          />
          <Route
            path="/dashboard/addcourse"
            element={<AddCourseForm onAddCourse={handleAddCourse} />}
          />
          <Route path="/dashboard/edit" element={<EditCourse />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
