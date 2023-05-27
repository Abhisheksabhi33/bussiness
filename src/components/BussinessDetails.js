import React, { useState } from "react";

const BusinessDetailsPage = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-5 mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="border-b border-gray-300 mt-5 mb-5"></div>
      <div className="flex items-center mb-4">
        <div className="flex-grow"></div>
        <div className="mx-4 text-gray-600">Business Info</div>
        <div className="flex-grow"></div>
        <div className="mx-4 text-blue-500 font-bold">Business Details</div>
        <div className="flex-grow"></div>
        <div className="mx-4 text-gray-600">Project Details</div>
        <div className="flex-grow"></div>
        <div className="mx-4 text-gray-600">Completed</div>
      </div>
      <div className="border-b border-gray-300 mt-5"></div>

      <div className="mt-7 text-center text-gray-600">
        Tell us a little about your business (Not a professional? Continue to Home Owner)
      </div>

      <h2 className="text-2xl font-bold mt-6">Business Details</h2>
      <div className="border-b border-gray-300 mt-5"></div>

      <div className="mt-3">
        <label className="block text-gray-600" htmlFor="name">
          Upload your Photo
        </label>
      </div>

      <div className="flex flex-col md:flex-row mt-6">
        <div className="border border-gray-300 w-full md:w-1/2 md:pr-2">
          <div className="relative w-full h-60 rounded-lg overflow-hidden">
            {uploadedPhoto ? (
              <img
                src={uploadedPhoto}
                alt="Uploaded"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            )}
            <input
              id="photo-upload"
              type="file"
              className="hidden"
              onChange={handlePhotoUpload}
            />
            <label
              htmlFor="photo-upload"
              className="absolute bottom-0 flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer"
            >
              Upload
            </label>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-2 mt-4 md:mt-0">
          <label className="block mb-2 text-gray-600" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
          <label className="block mt-4 mb-2 text-gray-600" htmlFor="website">
            Website
          </label>
          <input
            id="website"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="flex items-center mt-6">
        <div className="w-full md:w-1/2">
          <p className="text-gray-600">Add your Social Media</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="flex items-center mr-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 12H6a2 2 0 01-2-2V6a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2zm0 0v8m0 0H6m0 0V6m0 0h8"
                />
              </svg>
            </div>
            <button className="text-blue-500">Facebook</button>
          </div>
          <div className="flex items-center mr-2">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 13H6v6h6v-6zm0 0V7a2 2 0 00-2-2H6v6h6zm0 0v6a2 2 0 002 2h6v-6h-6zm0 0V7a2 2 0 012-2h6v6h-6z"
                />
              </svg>
            </div>
            <button className="text-pink-500">Instagram</button>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
            <button className="text-blue-700">LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailsPage;
