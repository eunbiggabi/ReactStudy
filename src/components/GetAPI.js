import { useState, useEffect } from "react";

// const url = "https://api.randomuser.me/"
const url = "https://www.themealdb.com/api/json/v1/1/random.php";
export default function GetAPI() {    
  const [data, setData] = useState([]);

    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
    }, []);
    
    console.log(data)
    return data.meals;
    
}