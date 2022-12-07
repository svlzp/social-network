import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import News from "./News";





const NewsContainer = () =>{
    const [news ,setNews] = useState()
    const apiKey ='9ead3933b1774b54bff1769ac909a199'
  
    useEffect(()=>{
     axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then(response => setNews(response.data))},[])

return<News news={news}/>


}





export default NewsContainer;