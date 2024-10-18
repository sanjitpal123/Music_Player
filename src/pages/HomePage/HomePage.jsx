import Navbar from "../../Component/Navbar";
import FetchNewRelease from "../../Services/FetchHomeData";
import { useEffect, useState } from "react";
import SongsList from "../../Component/SongsList";
import NewRealse from "../../Component/newRelease";

function HomePage() {
  
 
  return (
    <div>
      <Navbar />
      <SongsList/>
      <NewRealse/>
      
    </div>
  );
}

export default HomePage;
