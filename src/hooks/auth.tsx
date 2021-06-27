import React,{useContext,createContext,useState,ReactNode, useEffect, useMemo} from "react";
import * as AuthSession from 'expo-auth-session';
import {CDN_IMAGE,CLIENT_ID,REDIRECT_URI,RESPONSE_TYPE,SCOPE} from "../configs"
import {frases} from "../util/lista-frases";
import api from "../services/api";

interface IUser{
    id:string,
    userName:string,
    firstName:string,
    avatar:string,
    email:string,
    token:string,

}

interface IDataProps {
   user: IUser 
   handleSign: () => Promise<void>;
   loading:boolean;
   randomPhrases: string;
}

interface IChildrenProps{
    children: ReactNode,
}

/*normalmente como interface ele vai reclamar altero para type */
type DataParams = AuthSession.AuthSessionResult &{
   params:{
     access_token: string;
   }

}

export const AuthContext = createContext<IDataProps>({} as IDataProps  )

const AuthProvider:React.FC<IChildrenProps> = ({children}) =>{
    const [user,setUser] = useState<IUser>({} as IUser )
    const [loading,setLoading] = useState(false);
    
    const randomPhrases = useMemo(()=>{
      const phrasesNumber =  Math.floor(Math.random()*frases.length);
      const phrasesSelected = frases[phrasesNumber];
      
      return phrasesSelected;

    },[frases])
   

    const handleSign = async () =>{
       try{
       setLoading(true);  
       const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
       const { type,params} = await  AuthSession.startAsync({authUrl}) as DataParams;
       
       if( type === 'success' ){
          api.defaults.headers.authorization = `Bearer ${params.access_token}`
          /* Bearer e o padrão da rota do token, acima estou adicionando no header ou 
          cabeçalho da api o token, */
          const responseInfo = await api.get('/users/@me');
          
          const firstName =  responseInfo.data.username.split(' ')[0];  
          /*caso nome do usuario for composto retorna o primeiro */
          responseInfo.data.avatar = `${CDN_IMAGE}/avatars/${responseInfo.data.id}/${responseInfo.data.avatar}.png`
          /*este caminho esta na documentação seria CDN/avatars/objeto.id/objeto.avatar */
          /* responseInfo retorna um objeto data:{
              "avatar": "hasAvatar"
              "username": "nome do usuario"
          }  */
          
          setUser({
             ...responseInfo.data,/*esse data vem do objeto e o padrão do axios */
             token:params.access_token, 
             firstName,
                    
          })
          setLoading(false)
          
       }
     
      }catch(error){
        console.log(error)
         throw new Error("Não foi possível autenticar")
       
    }
    }

    return(
      <AuthContext.Provider value={{user,handleSign,loading,randomPhrases}} >
           {children}
      </AuthContext.Provider> 

    )

}

const useAth = () =>{
  const context = useContext(AuthContext); 
  return context;  
}

export {useAth,AuthProvider}