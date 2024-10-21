import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center flex-col items-center mt-10 gap-5">
          <h2>Cargando, por favor espere</h2>
          <img
            className="w-32 h-32 animate-spin"
            src="./loading.svg"
            alt="loading"
          />
        </div>
      ) : (
        <div className="flex justify-center flex-wrap my-16 gap-10">
          {images.map(({ id, title, url }) => {
            return (
              <GifItem
                key={id}
                title={title}
                url={url}
                DefaultTitle={category}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
