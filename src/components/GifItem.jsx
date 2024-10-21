export default function GifItem({ key, title, DefaultTitle, url }) {
  if (!title) {
    title = DefaultTitle;
  }

  return (
    <>
      <li
        className="list-none bg-slate-950 rounded-md hover:scale-105 transition-transform"
        key={key}
      >
        <h2 className="text-white text-center p-3 font-bold">{title}</h2>
        <img src={url} alt={title} />
      </li>
    </>
  );
}
