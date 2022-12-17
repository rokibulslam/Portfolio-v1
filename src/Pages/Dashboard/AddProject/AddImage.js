import React, { useState } from "react";
import { BiCheckboxChecked } from "react-icons/bi";
import { imgUpload } from "../../../utils/imgUpload";

const AddImage = ({ dispatch, state }) => {
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const addImage = async () => {
    if (image) {
      const response = await imgUpload(image);
      dispatch({ type: "ADD_IMAGE", payload: response.data.url });
      setSuccess(true);
      setImage(null);
    }
  };
  return (
    <div>
      <div class="flex justify-center items-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col justify-center items-center w-full h-64 rounded-lg border-2 border-dashed cursor-pointer hover:bg-bray-800 bg-gray-700 hover:border-gray-500 hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            {image ? (
              <span className="text-gray-400 text-7xl">
                <BiCheckboxChecked />
              </span>
            ) : (
              <svg
                aria-hidden="true"
                class="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
            )}
            <p class="mb-2 text-sm text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-400">
              PNG, JPG  (MAX. 800x400px)
            </p>
          </div>
          <input
            onChange={(e) => setImage(e.target.files)}
            id="dropzone-file"
            type="file"
            class="hidden"
          />
        </label>
      </div>
      <div className="flex items-center justify-end mt-4">
        <button
          onClick={addImage}
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-700 hover:bg-gray-600 text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Upload
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {state?.images?.map((item, index) => (
          <div  key={index} className="overflow-hidden max-h-100">
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddImage;
