// import { FaSearch, FaHome, FaUsers, FaBook, FaLayerGroup, FaRegQuestionCircle, FaBoxes, FaPlus, FaSortDown, FaCog, FaBell, FaUser, FaGreaterThan } from "react-icons/fa";
// import { useState } from "react";
// import { Search, ListFilter, LayoutGrid } from "lucide-react";
// import I1 from "../assets/Course1.jpeg"
// import CourseCard from "./CourseCard";
// import { useNavigate } from "react-router-dom";
// // const Sidebar = () => {
// //   return (
// //     <aside className="w-64 bg-black text-gray-300 h-screen p-5">
// //       <div className="flex items-center gap-2 text-lg font-bold text-orange-400">
// //         <span className="text-2xl">The One</span>
// //       </div>
// //       <nav className="mt-6">
// //         <ul>
// //           <SidebarItem icon={<FaHome />} label="Dashboard" />
// //           <SidebarItem icon={<FaBook />} label="Course" active />
// //           <SidebarItem icon={<FaUsers />} label="Manage Users" />
// //           <SidebarItem icon={<FaLayerGroup />} label="Modules" disabled />
// //           <SidebarItem icon={<FaRegQuestionCircle />} label="Pop-Ups" disabled />
// //           <SidebarItem icon={<FaBoxes />} label="Bundles" disabled />
// //         </ul>
// //       </nav>
// //     </aside>
// //   );
// // };

// // const SidebarItem = ({ icon, label, active, disabled }) => (
// //   <li
// //     className={`py-2 px-3 rounded-lg flex items-center gap-2 text-orange-400 ${
// //       active ? "bg-orange-600" : "hover:bg-gray-700"
// //     } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
// //   >
// //     {icon} {label}
// //   </li>
// // );



// const Courses = () => {
//   const navigate=useNavigate()
//   const [courses,setCourses] =useState( [
//     { title: "Course Name", date: "12/02/2024", image: {I1} },
//     { title: "Course Name", date: "12/02/2024", image: "/course2.jpg" },
//     { title: "Course Name", date: "12/02/2024", image: "/course3.jpg" },
//     { title: "Course Name", date: "12/02/2024", image: "/course4.jpg" },
//     { title: "Course Name", date: "12/02/2024", image: "/course5.jpg" },
//     { title: "Course Name", date: "12/02/2024", image: "/course6.jpg" },
//   ]);

//   return (
//     <div className="flex min-h-screen bg-gray-950 text-gray-300">
//       <main className="flex-1 p-6">
       

//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold text-white">Course</h2>
         
//           <button onClick={()=>{navigate("/dashboard/dashboard/addcourse")}} className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600">
//             <FaPlus /> Create New Courses
//           </button>
//         </div>
//         <p className="flex ">Dashboard <FaGreaterThan className="text-sm mt-2"/> Courses</p>

// {/* export default function CourseSearch()  */}
//     <div className="flex items-center justify-between bg-gray-950 p-3 rounded-lg w-full max-w-5xl ">
//       {/* Search Input */}
//       <div className="relative flex items-center w-400px max-w-sm">
//         <Search className="absolute left-3 text-gray-400" size={18} />
//         <input
//           type="text"
//           placeholder="Search Course"
//           className="w-full bg-[#242322] text-gray-300 text-sm pl-10 pr-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-500"
//         />
//       </div>

//       {/* Sorting Section */}
//       <div className="flex items-center space-x-3">
//         <span className="text-gray-300 text-sm">Sort</span>
//         <select className="bg-transparent text-gray-300 text-sm border-b border-gray-600 outline-none">
//           <option className="bg-[#1A1A1A] text-gray-300">Newest</option>
//           <option className="bg-[#1A1A1A] text-gray-300">Oldest</option>
//         </select>

//         {/* Grid/List Toggle Button */}
//         <button className="p-2 rounded-md bg-[#222222] hover:bg-gray-700 transition">
//           <LayoutGrid className="text-orange-400" size={18} />
//         </button>
//       </div>
//     </div>
  


//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {courses.map((course, index) => (
//             <CourseCard key={index} {...course} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Courses;
import { FaSearch, FaHome, FaUsers, FaBook, FaLayerGroup, FaRegQuestionCircle, FaBoxes, FaPlus, FaSortDown, FaCog, FaBell, FaUser, FaGreaterThan } from "react-icons/fa";
import { useState } from "react";
import { Search, ListFilter, LayoutGrid } from "lucide-react";
import I1 from "../assets/Course1.jpeg";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";

const Courses = ({ courses, onAddCourse }) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-300">
      <main className="flex-1 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Course</h2>
          <button
            onClick={() => navigate("/dashboard/dashboard/addcourse")}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600"
          >
            <FaPlus /> Create New Courses
          </button>
        </div>

        {/* Breadcrumb */}
        <p className="flex">
          Dashboard <FaGreaterThan className="text-sm mt-2" /> Courses
        </p>

        {/* Search and Sorting Section */}
        <div className="flex items-center justify-between bg-gray-950 p-3 rounded-lg w-full max-w-5xl">
          {/* Search Input */}
          <div className="relative flex items-center w-400px max-w-sm">
            <Search className="absolute left-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search Course"
              className="w-full bg-[#242322] text-gray-300 text-sm pl-10 pr-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Sorting Section */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-300 text-sm">Sort</span>
            <select className="bg-transparent text-gray-300 text-sm border-b border-gray-600 outline-none">
              <option className="bg-[#1A1A1A] text-gray-300">Newest</option>
              <option className="bg-[#1A1A1A] text-gray-300">Oldest</option>
            </select>

            {/* Grid/List Toggle Button */}
            <button className="p-2 rounded-md bg-[#222222] hover:bg-gray-700 transition">
              <LayoutGrid className="text-orange-400" size={18} />
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              date={course.date}
              image={course.imageFile || I1} // Use the uploaded image or a default image
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;