import { useState, useRef, useEffect } from "react";
import { MoreVertical, Paperclip, X } from "lucide-react";
import { FaImage } from "react-icons/fa";
import I1 from "../assets/Course1.jpeg";

const AddCourseForm = ({ onAddCourse }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, setError] = useState("");
  const menuRef = useRef(null);

  // Handle image file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(URL.createObjectURL(file));
    }
  };

  // Handle PDF file selection
  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPdfFile(file.name);
    }
  };

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

  // Handle form submission
  const handleSubmit = () => {
    if (!title || !description || !imageFile || !pdfFile || !status) {
      setError("All fields are required!");
      return;
    }

    const newCourse = {
      title,
      description,
      imageFile,
      pdfFile,
      status,
    };

    // Pass data to parent component
    onAddCourse(newCourse);

    // Reset fields
    setTitle("");
    setDescription("");
    setImageFile(null);
    setPdfFile(null);
    setStatus("");
    setError("");
  };

  return (
    <div className="flex gap-8 p-6 bg-gray-900 min-h-screen">
      {/* Left Section: Form */}
      <div className="w-2/3 bg-gray-950 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-lg font-semibold mb-4">Course</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          placeholder="Course Title"
          className="w-full p-3 bg-[#242322] text-white rounded-md outline-none mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Course Description"
          className="w-full p-3 bg-[#242322] text-white rounded-md outline-none mb-4 h-24 resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Drag & Drop Image Upload */}
        <div className="border border-gray-700 rounded-lg p-4 bg-[#242322] border-dotted flex flex-col items-center justify-center mb-4">
          <FaImage className="h-24 w-24 text-gray-400" />
          {imageFile ? (
            <img
              src={imageFile}
              alt="Preview"
              className="w-full rounded-md mb-2"
            />
          ) : (
            <div className="text-gray-400 text-center">
              <p>Drag & drop an image, or</p>
              <label className="bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer mt-2 inline-block">
                Choose File
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3 bg-[#242322] p-3 rounded-md mb-4">
          <button
            className="flex items-center space-x-2 bg-orange-500 text-white px-3 py-1 rounded-md"
            onClick={() => document.getElementById("pdfUpload").click()}
          >
            <Paperclip size={16} />
            <span>Attach PDF</span>
          </button>
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            id="pdfUpload"
            onChange={handlePdfChange}
          />
          <label className="text-white cursor-pointer">
            {pdfFile ? pdfFile : "No file selected"}
          </label>
          {pdfFile && (
            <button className="text-red-500" onClick={() => setPdfFile(null)}>
              <X size={18} />
            </button>
          )}
        </div>

        {/* Status Dropdown */}
        <select
          className="w-full bg-[#242322] text-white p-3 rounded-md outline-none mb-4"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">-Select Status-</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>

        {/* Add Course Button */}
        <button
          className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600"
          onClick={handleSubmit}
        >
          Add Course
        </button>
      </div>

      {/* Right Section: Course Preview */}
      <div className="w-1/3">
        <h2 className="text-white text-lg font-semibold mb-4">Preview</h2>
        <div className="bg-gray-900 rounded-lg shadow-lg p-4 relative">
          {/* Course Preview Image */}
          <div className="relative">
            <img
              src={imageFile || I1}
              alt="Course Preview"
              className="rounded-lg w-full"
            />

            <button
              className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <MoreVertical size={20} />
            </button>

            {menuOpen && (
              <div
                ref={menuRef}
                className="absolute right-2 top-10 bg-black shadow-lg rounded-md w-28 flex flex-col border border-gray-700"
              >
                <button className="px-4 py-2 text-white text-sm hover:bg-gray-700 text-left">
                  Edit
                </button>
                <button className="px-4 py-2 text-red-500 text-sm hover:bg-red-600 hover:text-white text-left">
                  Delete
                </button>
              </div>
            )}
          </div>

          <h3 className="text-white font-bold mt-2">
            {title || "The Foundation One"}
          </h3>
          <p className="text-gray-400 text-sm">
            {description ||
              "Lorem ipsum dolor sit amet consectetur. Commodoo tincidunt ut ut facilisi turpis vitae."}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            by <span className="text-white">John Doe</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddCourseForm;
