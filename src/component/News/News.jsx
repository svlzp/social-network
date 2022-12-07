
import React from "react";
import Preloader from "../preloader/preloader";
import s from "./news.module.css"



const News = (props) =>{
   let news = props.news
   console.log(news)
    return(
        <div>
            <h1 className={s.header}>News</h1> 
            {!news?<Preloader/> :news.articles.map((n ,index )=> <div key={index} >
                <div className={s.text}>
                    <h4 >{n.source.name}</h4>
                    <h2>{n.title}</h2>
               </div>
           <div className={n.imgBlock}><img src={n.urlToImage} className={s.img} alt=''/> </div>
           <div className={s.text}><h4>{n.description}</h4></div>
           <div className={s.text}>{n.content}</div>
           <a href={n.url} target="_blank" rel="noopener noreferrer" className={s.text}>look at the source</a>


</div>)}
        </div>
    )
}
export default News;