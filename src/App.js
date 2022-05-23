import React, { useEffect, useState }  from 'react';
import './App.css';
import Header from './components/header'
import Rentcontainer from './components/rentcontainer';
import axios from 'axios'
function App() {

   
  const [officiesList,setOfficiesList]=useState([]);
    
  const getOfficies = async() => {
      axios.get("https://localhost:44352/api/RentaCar")
      .then((res)=> setOfficiesList(res.data));
  };
 
  useEffect(()=>{
     getOfficies();
  },[]);



  return (
    <div className="App">
    <Header/>
   <Rentcontainer officiesList={officiesList} getOfficies={getOfficies}/>
    </div>
  );
}

export default App;
