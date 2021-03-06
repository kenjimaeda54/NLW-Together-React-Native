import React,{useContext,createContext,useState,ReactNode, useEffect, useMemo} from "react";
import * as AuthSession from 'expo-auth-session';
import {frases} from "../util/lista-frases";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Collection_User } from "../configs/database";


const {CDN_IMAGE} = process.env;
const {CLIENT_ID} = process.env;
const {REDIRECT_URI} = process.env;
const {RESPONSE_TYPE} = process.env;
const {SCOPE} = process.env;

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
   handleSignOut: () => void;
   loading:boolean;
   randomPhrases: string;
}

interface IChildrenProps{
    children: ReactNode,
}

/*normalmente como interface ele vai reclamar altero para type */
type DataParams = AuthSession.AuthSessionResult &{
   params:{
     access_token?: string;
     error?:string;
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
        const { params,type } = await AuthSession.startAsync({authUrl}) as DataParams;
      
         if( type === 'success' && !params.error){
          /*vai retornar um objeto,com token e status, se  status for success entro aqui   
          se caso também não houver nenhum parâmetro de error ,entra aqui*/ 
          api.defaults.headers.authorization = `Bearer ${params.access_token} `;
          /* Bearer e o padrão da rota do token, acima estou adicionando um header padrão no
           cabeçalho da api o token, */
          const responseInfo = await api.get('/users/@me');
          /*este caminho '/users/@me esta na documentação */

          const firstName =  responseInfo.data.username.split(' ')[0];
          /* transforma Rodrigo Carvalho em ['Rodrigo', 'Carvalho'] */
          /*caso nome do usuario for composto, com  retorna o primeiro, cuidado precisa do espaço */        
          responseInfo.data.avatar =`${CDN_IMAGE}/avatars/${responseInfo.data.id}/${responseInfo.data.avatar}.png`
          /* formatando o avatar para um cnd*/
          /*este caminho esta na documentação seria CDN/avatars/objeto.id/objeto.avatar */
          /* responseInfo retorna um objeto data:{
              "avatar": "hasAvatar"
              "username": "nome do usuario"
          }  */
          const DataBaseUser = {
            ...responseInfo.data,/*vou copiar meu objeto para aqui dentro */
            firstName,
            token: params.access_token     

          }         
          await AsyncStorage.setItem(Collection_User,JSON.stringify(DataBaseUser));
          setUser(DataBaseUser)
        
       }
      }catch(error){
         throw new Error("Não foi possível autenticar")
       
      }finally{
        setLoading(false);
        /*o finally e ideal quando deseja eliminar o load ou seja
        independente se deu certo ou errado vai ser falso */
      } 
    }
     
    const handleSignOut = async () => {
       setUser({} as IUser)
       await  AsyncStorage.removeItem(Collection_User);
    }

    const loadData = async () =>{
        const getStorage = await AsyncStorage.getItem(Collection_User); 
        if( getStorage ){
           const loadData = JSON.parse(getStorage) as IUser;
           api.defaults.headers.authorization = `Bearer ${loadData.token}`
           /*cuidado com os espaços Bearer ${loadData.token} sem espaço por ser string
           concatena é o token não pode  */
           setUser(loadData);
        }
    }
    useEffect(()=>{
      loadData();
    })

  

    return(
      <AuthContext.Provider value={{user,handleSign,handleSignOut,loading,randomPhrases}} >
           {children}
      </AuthContext.Provider> 

    )

}

const useAth = () =>{
  const context = useContext(AuthContext); 
  return context;  
}

export {useAth,AuthProvider}