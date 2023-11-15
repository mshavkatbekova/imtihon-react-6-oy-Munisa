import SingleMovies from "./SingleMovie";
import { useGlobalContext } from "../hooks/useGlobalContext";

function MoviesList({ data: { Search } }) {
  const { addNewMovie } = useGlobalContext();
  const showModal = () => {
    document.getElementById("my_modal_2").showModal();
  };
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10">
      {Search.map((move) => {
        return (
          <li onClick={showModal} key={move.imdbID}>
            <div className="card  h-[650px] w-96 glass">
              <figure>
                <img src={move.Poster} alt="car!" className="h-[500px] object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-semibold justify-center">
                  {move.Title}
                </h2>
                <div className="card-actions justify-center">
                  <button onClick={() => addNewMovie(move)} className="btn w-80 text-2xl mt-3">❤️</button>
                  
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesList;
