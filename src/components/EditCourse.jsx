import { useState } from "react";
import { MoreVertical, Eye, Pencil, Check, ChevronDown, X } from "lucide-react";
import CourseImage from "../assets/Course1.jpeg";

const EditCourse = () => {
  const [modules, setModules] = useState([
    { id: 1, title: "Hamail’s Course", status: "Visible" },
    { id: 2, title: "Fahad’s Course", status: "Visible" },
  ]);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const removeModule = (id) => {
    setModules(modules.filter(module => module.id !== id));
    setDropdownOpen(null);
  };

  return (
    <div className="bg-gray-950 min-h-screen p-6 text-white">
      {/* Breadcrumb */}
      <div className="text-gray-400 text-sm mb-4">
        <span className="text-orange-400">Dashboard</span> &gt; The Foundation One
      </div>

      {/* Course Header */}
      <div className="bg-[#242322] p-6 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-28 h-20">
            <img src={CourseImage} alt="Course" className="rounded-lg" />
            <span className="absolute top-2 left-2 bg-green-500 text-xs px-2 py-1 rounded-full">Active</span>
          </div>
          <div>
            <h2 className="text-xl font-bold">The Foundation One</h2>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="bg-orange-700 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm">Member Preview</button>
          <button 
            className="bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-lg text-sm flex items-center gap-2"
           
          >
            <Pencil size={16} /> Update Course
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-orange-600 px-6 py-2 rounded-lg flex items-center gap-2">
          <Eye size={16} /> Content
        </button>
        <button className="bg-[#FE8D1540] px-6 py-2 rounded-lg">Information</button>
        <button className="bg-[#FE8D1540] px-6 py-2 rounded-lg">Users</button>
      </div>

      {/* Course Modules */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Course Module</h3>
          <button  className="bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-lg text-sm">
            + Create New Module
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="bg-[#242322] p-4 rounded-lg flex justify-between items-center relative">
              <div className="flex items-center gap-4">
                <img src={CourseImage} alt="Module" className="w-16 h-12 rounded-lg" />
                <div>
                  <h4 className="font-bold">{module.title}</h4>
                  <span className="text-xs text-orange-400">LEARNING MODULE</span>
                </div>
              </div>

              <div className="flex items-center gap-2 relative">
                {/* Visibility Dropdown */}
                <div className="relative">
                  <button className="bg-green-600 px-3 py-1 rounded-lg flex items-center gap-1">
                    <Check size={14} /> {module.status} <ChevronDown size={14} />
                  </button>
                </div>

                {/* More Options */}
                <button 
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 relative"
                  onClick={() => toggleDropdown(module.id)}
                >
                  <MoreVertical size={18} />
                </button>
                
                {dropdownOpen === module.id && (
                  <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg p-2">
                    <button 
                      className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                      onClick={() => removeModule(module.id)}
                    >
                      Remove Course
                    </button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">Add Module</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Update Course Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#1a1a1a] p-6 rounded-lg w-96 relative text-white">
            <button className="absolute top-2 right-2" onClick={() => setIsModalOpen(true)}>
              <X size={20} />
            </button>
            <h2 className="text-lg font-bold mb-4">Create New Module</h2>
            <input type="text" placeholder="Module Title" className="w-full p-2 mb-2 rounded bg-gray-800 text-white" />
            <textarea placeholder="Module Description" className="w-full p-2 mb-2 rounded bg-gray-800 text-white"></textarea>
            <div className="border border-dashed border-gray-500 p-4 rounded-lg text-center mb-4">
              <button className="bg-orange-500 px-4 py-2 rounded-lg text-sm">Choose File</button>
              <p className="text-xs mt-1">Recommended size 2400 x 1500</p>
            </div>
            <div className="flex justify-end gap-2">
              <button className="text-gray-400" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="bg-orange-500 px-4 py-2 rounded-lg text-sm">Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCourse;
