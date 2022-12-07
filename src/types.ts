
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState, AppDispatch} from './redux/store'


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type usersType={
    id: number
  name: string
status: string | null
photos: photosType
followed:null|boolean
}
export type usersDataType={
   error:any
   items:Array<usersType>
   totalCount:number
}

export type postsType={
    id:number
    message:string
    likesCount:number
}
export type profileType={
    fullName:string
    aboutMe:string
    lookingForAJob:boolean
    lookingForAJobDescription:string
    userId:number
    photos:photosType
    contacts:contactsType
}
export type contactsType={
    facebook:string
    github:string
    instagram:string
    mainLink:string
    twitter:string
    vk:string
    website:string
    youtube:string
}
export type photosType={
    small:string
    large:string
}
export type loginDataType={
    email:string
    password:string
    checkbox:boolean
    captcha:string
}
export type profileSettingsType={
    fullName:string
    aboutMe:string
    lookingForAJob:boolean
    lookingForAJobDescription:string
    contacts:contactsType
}
export type filterType={   
        term: string
        friend: null|boolean     
}