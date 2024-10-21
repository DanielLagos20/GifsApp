import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";
export default function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-7 mb-7 text-slate-950">
        Gifs Expert
      </h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.length === 0 ? (
        <div className="flex justify-center flex-col items-center">
          <h3 className="text-slate-950 text-center text-4xl mt-16 ">
            Aquí se mostrarán los gifs que busques
          </h3>
          <img
            className="w-32 h-32"
            src="public/gifs-none.svg"
            alt="gifs-none"
          />
        </div>
      ) : (
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      )}
    </>
  );
}
