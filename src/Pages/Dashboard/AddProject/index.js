import React, { useReducer, useState } from "react";
import { useAddProjectMutation } from "../../../redux/slices/apiSlice";
import AddBenefits from "./AddBenefits";
import AddImage from "./AddImage";
import AddTechnology from "./AddTechnology";
import AddTools from "./AddTools";
const initialState = {
  images: [],
  benefits: [],
  tools: [],
  technology: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    case "REMOVE_IMAGE":
      return {
        ...state,
        images: state.images.filter((item) => item !== action.payload),
      };
    case "ADD_BENEFITS":
      return {
        ...state,
        benefits: [...state.benefits, action.payload],
      };
    case "REMOVE_BENEFITS":
      return {
        ...state,
        benefits: state.benefits.filter((item) => item !== action.payload),
      };
    case "ADD_TOOLS":
      return {
        ...state,
        tools: [...state.tools, action.payload],
      };
    case "REMOVE_TOOLS":
      return {
        ...state,
        tools: state.tools.filter((item) => item !== action.payload),
      };
    case "ADD_TECHNOLOGY":
      return {
        ...state,
        technology: [...state.technology, action.payload],
      };
    case "REMOVE_TECHNOLOGY":
      return {
        ...state,
        technology: state.technology.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};
const AddProject = () => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [server, setServer] = useState("");
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [addProject, { data, isSuccess, isLoading, isError, error }] =
    useAddProjectMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({
      name,
      live,
      server,
      client,
      description,
      images: state.images,
      benefits: state.benefits,
      tools: state.tools,
      technology: state.technology,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <AddImage state={state} dispatch={dispatch} />
            </div>
            <div className="col-span-8">
              {/* Input Group */}
              <div>
                <label
                  className="flex font-bold items-center text-gray-400"
                  htmlFor="project_name"
                >
                  Project Name
                </label>
                <input
                  autoComplete="off"
                  className="bg-transparent border-2 border-gray-400 py-2 text-xl text-red-400 w-full px-2 rounded mt-2"
                  type="text"
                  name="name"
                  id="project_name"
                  placeholder="Project name..."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* Input Group */}
              <div className="mt-6">
                <label
                  className="flex font-bold items-center text-gray-400"
                  htmlFor="project_description"
                >
                  Project Description
                </label>
                <textarea
                  rows={5}
                  autoComplete="off"
                  className="bg-transparent border-2 border-gray-400 py-2 text-lg text-red-400 w-full px-2 rounded mt-2"
                  type="text"
                  name="description"
                  id="project_description"
                  placeholder="Project description..."
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div>
                <div>
                  <label
                    htmlFor="live"
                    class="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-300 mt-4"
                  >
                    Live Website
                  </label>
                  <input
                    onChange={(e) => setLive(e.target.value)}
                    type="url"
                    id="live"
                    autoComplete="off"
                    class="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="codergalib20.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="server"
                    class="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-300 mt-4"
                  >
                    Server Code URL
                  </label>
                  <input
                    onChange={(e) => setServer(e.target.value)}
                    type="url"
                    id="server"
                    autoComplete="off"
                    class="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="codergalib20.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="client"
                    class="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-300 mt-4"
                  >
                    Client Code URL
                  </label>
                  <input
                    onChange={(e) => setClient(e.target.value)}
                    type="url"
                    id="client"
                    autoComplete="off"
                    class="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="codergalib20.com"
                  />
                </div>
              </div>
              {/* Input Group */}
              <AddBenefits state={state} dispatch={dispatch} />
              <AddTools state={state} dispatch={dispatch} />
              <AddTechnology state={state} dispatch={dispatch} />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 flex items-center justify-end">
          <button
            type="submit"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
