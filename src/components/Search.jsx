import { useRef, useState } from "react";

function Search({ setNewUrl }) {
  const searchText = useRef();
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchText.current.value;
    setNewUrl(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xl"
        ref={searchText}
      />
      <button className="btn btn-primary">Search</button>
    </form>
  );
}

export default Search;
