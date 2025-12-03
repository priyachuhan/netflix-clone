import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";

const API_KEY = "607f4f97d1781a839e5295c2c441cea8";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Banner />
      <Row
        title="Trending Now"
        fetchUrl={`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`}
      />
      <Row
        title="Top Rated"
        fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}
      />
      <Row
        title="Action Movies"
        fetchUrl={`https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${API_KEY}`}
      />
    </div>
  );
};

export default Home;
