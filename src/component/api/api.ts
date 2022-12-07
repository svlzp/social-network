        import axios from "axios";
import { loginType } from "../../redux/authReducer";
import { filterType, loginDataType, profileSettingsType, profileType, usersType } from "../../types";


        const instance = axios.create({
            withCredentials : true,
            baseURL:'https://social-network.samuraijs.com/api/1.0/',
            headers: {
                "API-KEY": "769b7550-67d1-4234-972c-15bf5525eea6"
            }
        })
export enum resultCodes{
    Success = 0,
    Error = 1,
    captcha = 10
}
  type getUsersType={
    items:Array<usersType>
    totalCount:number
    error:string
}
type responseGeneralType={
    resultCode:resultCodes
    messages: Array<string> |null
    data:any
}
type authMeType={
    data:loginType
    resultCode:resultCodes
    messages: Array<string>|null
}
type captchaType={
    url:string
}
type statusType={
    data:string
}

        export const userApi ={
        getUsers(currentPage:number = 1 ,pageSize:number = 10 ,filter:filterType={term:'',friend:null}){
        return instance.get<getUsersType>(
            `users?page=${currentPage}&count=${pageSize}&term=${filter.term}`+(filter.friend===null?'':`&friend=${filter.friend}`))
        },
        async followUsers(userId:number = 1){
            const response = await instance.post<responseGeneralType>(`follow/${userId}`);
            return response.data; 
            },
        async UnFollowUsers(userId:number = 1){
            const response = await instance.delete<responseGeneralType>(`follow/${userId}`);
            return response.data;
                },
        async authMe (){
            const response = await instance.get<authMeType>(`auth/me`);
            return response.data;
        },
        logout(){
            return instance.delete<responseGeneralType>(`/auth/login`);
        },
        login(value:loginDataType){
            return instance.post<authMeType>(`/auth/login`,value);  
        },    
        async getProfile(userId:number){    
            const response = await instance.get<profileType>(`profile/${userId}`);
            return response.data; 
            },
            captcha(){
                return instance.post<captchaType>(`security/get-captcha-url`);  
            },    
        }
        
        export const profileApi ={
            async statusGet(userId:number){
                const response = await instance.get(`profile/status/${userId}`);
                return response.data; 
            },
            statusUpdate(status:string){      
            return instance.put<responseGeneralType>(`profile/status`,{status:status});
            },
            photoUpdate(photoFile:any){  
                let formData =new FormData();
                formData.append("image",photoFile)    
                return instance.put(`profile/photo`,formData ,{
                    headers: {
                    "Content-Type": "multipart/form-data",
                    }
                });       
                },
            profileUpdate(profile:profileSettingsType){    
                return instance.put(`profile`,profile);  
                }
        }