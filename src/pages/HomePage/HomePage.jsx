import Navbar from "../../Component/Navbar";
import FetchNewRelease from "../../Services/FetchHomeData";
import { useEffect, useState } from "react";
import SongsList from "../../Component/SongsList";

function HomePage() {
  const [data,setData]=useState([])
  useEffect(()=>{
    async function fetch()
    {
      const response=await FetchNewRelease();
      console.log(response);
      setData(response)
    }
    fetch()
  },[])
 
  return (
    <div>
      <Navbar />
      <SongsList/>
      
    </div>
  );
}

export default HomePage;
