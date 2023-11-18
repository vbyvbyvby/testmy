import * as React from "react"
import { client } from "../client";
import { useState, useEffect } from "react";
import Movies from "./components/Movies";

const IndexPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies and update the state
    client
      .getEntries()
      .then((response) => {
        setMovies(response.items);
      })
      .catch(console.error);
  }, []);
  
  return (
    <Movies movies={movies} />
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
