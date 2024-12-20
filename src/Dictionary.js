import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photo from "./Photo.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleDictionaryResponse);

    let pexelsApiKey =
      "xa8N3JMXd749FrvhG6R36YLoJ4UAJa4PVuBIUlhWSjX4kWwEDl2hGRha";
    let pexelsApiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiURL, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">e.g. sunset, wine, yoga, forest...</div>
        </section>

        <Results results={results} />
        <Photo photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
