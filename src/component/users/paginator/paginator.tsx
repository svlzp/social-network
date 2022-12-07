import React, { FC, useState } from "react";
import s from './paginator.module.css'
import c from 'classnames'

type propsType={
    totalUcount:number
    pageSize:number
    currentPage:number
    onPageNumber:(numberPage:number)=>void
}


const Paginator:FC<propsType>= (props)=>{
    const blokSize:number = 10;
    const pageSize = props.pageSize;
    const totalUcount = props.totalUcount ;
    let pagesCount=Math.ceil(totalUcount / pageSize);
   
    let pages:Array<number> =[];
    for(let i=1; i <= pagesCount; i++ ){
        pages.push(i);
    }
    let blokCount = Math.ceil(pagesCount/pageSize)
    let [blokNamber ,setBlokNamber] = useState(1)
    let leftBlokPageNamber =(blokNamber -1)*blokSize+1;
    let rightBlokPageNamber = blokNamber*blokSize
    return(
           <div>
            {blokNamber >1 && 
            <button onClick={()=>{setBlokNamber(blokNamber-1)}}>back</button>}
            {pages.filter(p=> p>= leftBlokPageNamber && p<=rightBlokPageNamber)
            .map(p=>{
                return<span className={c({[s.select]:props.currentPage === p},s.cursor)}
                key={p} onClick={(e)=>{props.onPageNumber(p)}} >{p}</span>
            }
            )}
            {blokCount > blokNamber && 
            <button onClick={()=>{setBlokNamber(blokNamber + 1)}}>next</button>}
         </div>
        
    )
}

export default Paginator;