import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChanged = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim().toLowerCase());
    setInputValue("");
  };
  return (
    <form className="max-w-xl mx-auto" onSubmit={onSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50  "
          placeholder="Buscar gifs..."
          required
          value={inputValue}
          onChange={onInputChanged}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-slate-950 hover:bg-slate-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
        >
          Buscar
        </button>
      </div>
    </form>
  );
};
