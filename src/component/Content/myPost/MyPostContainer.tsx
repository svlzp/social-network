import React from "react";
import { deletePostAction, PostAction, TextAction } from '../../../redux/profileReducer';
import { useAppDispatch, useAppSelector } from "../../../types";
import MyPost from "./MyPost";
const MyPostContainer = () =>{
    let posts = useAppSelector(state => state.ProfilePage.posts)
    let dispatch = useAppDispatch()

    const addPost =(values:{text:string})=>{
   dispatch(PostAction(values)); 
  }   
  const deletePost =(postId:number)=>{
    dispatch(deletePostAction(postId))
  }
    return (   
        <MyPost 
        addPost={addPost} 
        deletePost={deletePost} posts={posts}/>
    )
}
export default MyPostContainer;