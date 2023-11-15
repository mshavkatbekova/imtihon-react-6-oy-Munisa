import { useState } from "react";
import Search from "../components/Search";
import { useFetch } from "../hooks/useFetch";
import MoviesList from "../components/MoviesList";

function Home() {
  const [url, setUrl] = useState(
    "https://omdbapi.com/?s=spider%20man&page=1&apikey=5905edab"
  );

  const { data, error, isPending } = useFetch(url);

  const setNewUrl = (url) => {
    setUrl(`https://omdbapi.com/?s=${url}&page=1&apikey=5905edab`);
  };

  return (
    <>
      <Search setNewUrl={setNewUrl} />
      {data && <MoviesList data={data} />}
    </>
  );
}

export default Home;
