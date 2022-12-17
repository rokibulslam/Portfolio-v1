import React, { useEffect, useState } from "react";

const AddTools = ({ state, dispatch }) => {
  const [duplicats, setDuplicats] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    if (state.tools.includes(input)) {
      setDuplicats(true);
    } else {
      setDuplicats(false);
    }
  }, [input, state.tools]);
  const handleAdd = () => {
    if (!duplicats && input) {
      dispatch({ type: "ADD_TOOLS", payload: input });
      setInput("");
    }
  };
  return (
    <div class="my-5">
      <ul className="flex list-disc pl-4 flex-wrap">
        {state.tools.map((item, index) => (
          <li
            onClick={() => dispatch({ type: "REMOVE_TOOLS", payload: item })}
            className="text-gray-300 ml-6"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <div class="my-1">
        <label
          className="flex font-bold items-center text-gray-400"
          htmlFor="project_name"
        >
          Project Tools
        </label>
        <div className="flex items-center my-2">
          <input
            value={input}
            autoComplete="off"
            onChange={(e) => setInput(e.target.value)}
            type="text"
            id="success"
            class="bg-transparent border-2 border-gray-500 text-green-600 placeholder-gray-500 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 mr-2"
            placeholder="Type Tools..."
          />
          <button
            onClick={handleAdd}
            type="button"
            disabled={duplicats}
            class={`py-1 px-5 mr-2 text-sm font-medium focus:outline-none  rounded border-2   focus:z-10 focus:ring-4 focus:ring-gray-700   flex items-center ${
              duplicats
                ? "bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700"
                : "border-green-500 text-green-500 hover:text-gray-500 hover:bg-green-500"
            }`}
          >
            Add <span className="text-2xl pl-2"> +</span>
          </button>
        </div>
        <p
          class={`mt-2 text-sm ${
            duplicats ? "text-red-600" : "text-green-600"
          }`}
        >
          {input && (
            <span class="font-medium">
              {duplicats
                ? "We are sorry this is duplicate"
                : "Good Job! keep adding"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default AddTools;
