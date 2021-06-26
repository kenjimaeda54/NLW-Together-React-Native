import React,{useContext,createContext,useState,ReactNode} from 'react'

interface User{
    id:string,
    userName:string,
    firstName:string,
    avatar:string,
    email:string,
    token:string,
}

interface AuthContextData {
    data: User;
}

export const AuthContext = createContext({} as AuthContextData )
/* eu estou tipando createContext será um objeto vazio do tipo AuthContextData */

interface IAuthContextProps{
    children:ReactNode
}

/*boa pratica deixar quem envolve os filhos com Provider */
const AuthProvider = ({children}:IAuthContextProps) =>{
    const [data,setData] = useState<User>({} as User)

    return(
        <AuthContext.Provider value={{data}} >
             {children}
        </AuthContext.Provider>
    )
}

const useAth = () =>{
  const context =  useContext(AuthContext);
  return context;
}

export {useAth,AuthProvider};