# NLW-Together-React-Native

### Aplicação Gameplay integração com Discord
 Aplicaçãoo gameplay,filtragem dos servidores em tempo reall,usuarios onaline...
 
## Tabelas de conteudos 
* Visão geral
  * <a href='#Desafio' >  Desafio </a>
  * <a href='#Construção' >  Construção </a>   
  * <a href='#o-que-eu-aprendi' >  Aprendizado </a>
  * <a href='#Feature' >  Feature </a>
  * <a href='#Dependencias'> Dependencias </a>

## Visão Geral
## Desafio
-  Criar uma aplicação mobile com integração com discord,filtrar servidores,filtrar jogadores,consumir API,autenticação,

## Construção
  - React Native
  - Styled Component
  - Type Script
  - JSX
  - React Navigation
  

## O que eu aprendi
Fortaleci meus conhecimentos em React Native é Type Script,aprendi novas tecnicas para tipagem de componentes nativos  uso do </br> 
[Styled Component](https://styled-components.com/), uso de componentes nativos,melhores tecnicas para consumir API</br>
Trabalhar com autenticação no Auth02;
</br>

Toda aplicação segue principios do [desing Atomics](https://atomicdesign.bradfrost.com/chapter-2/) </br>
principio e utilizar a quimica para criação de nossa aplicação.

Fortalaleci os conhecimentos com [Aysnc Storage](https://docs.expo.io/versions/latest/sdk/async-storage/);

~~~javascript 
 const handleSignOut = async () => {
       setUser({} as IUser)
       await  AsyncStorage.removeItem(Collection_User);
    }

 ~~~

Aprendi a consumir de forma mais conciente APIs aplicando componsições de objetos para facilita trabalho.</br>
Api retornava as chaves que estão na interface IWidget,dentro dela haviam as chaves de member</br>
Dessa maneira consigo acessar todos os itens que gostaria de pegar</br>
Repara que a constante widget recebe esses paremetros,então  ao setar com response, estou consumindo so estes parametros
 
 ```javascript
   
 interface IWidget{
   id:string,
   members:IMemberProps[],
   presence_count: string,
   name:string,
   instant_invite: string,

}

export interface IMemberProps{
    id:string;
    username: string;
    avatar_url:string;
    status:string;
}


const AppointmentDetails = () => {
  const [widget,setWidget ]  = useState<IWidget>({} as IWidget);

  const fetchWidget = async () =>{
   try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`); 
      setWidget(response.data) 

   } catch {
     Alert.alert("Você precisa verificar o widget ")
   }      
   finally{
       setLoading(false);
   }

  }
 
 }
  

 ```
 
Uitilizei  rotas para passar alguns parmetros
 
  ```javascript
  
  
  interface IRoutes {
   guildSelected: IAppointmentProps;
}
  
 const AppointmentDetails = () => {
 
 const { guildSelected } = route.params as IRoutes;
   /* recebendo as rotas,fiz uma tipagem, para garantir ao
  type script quem é guidSelected*/ 
 }
 
 const HomeScreen = () => {
 
 const handleAppointmentDetails = (guildSelected:IAppointmentProps ) => 
  navigation.navigate("AppointmentDetails",{guildSelected});
  /*passando parâmetros via rotas */
 
 }
  
 ```
 Aprendi a usar o Auth 02  é  CND  do Discord para gerar o avatar dos usaurios</br>
 Usuei .env com GITIGNORE, assim as informações sensiveis do usuario não são disponibilizada no repositorio</br>
 Criei um srcipt das dependencias para funcionar o aplicativo

  ```javascript
  
  responseInfo.data.avatar =`${CDN_IMAGE}/avatars/${responseInfo.data.id}/${responseInfo.data.avatar}.png`
 const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
  
 #para funcionar aplicação preciso dessa variáveis de ambiente
 #No exemplo usamos discord/devolop/aplication
 REDIRECT_URI
 SCOPE
 RESPONSE_TYPE
 CLIENT_ID
 CDN_IMAGE
 
 
 ```
 Customizei meu proprio alarme .
 
 ```javascript
 
 import { Alert, Platform, ScrollView,View } from "react-native"
 if(category  === '' || day === '' || month === '' || hour === '' || minute === '' 
   || typeof category === 'undefined'){
   return Alert.alert('Atenção','Precisa preencher os campos: horário,data é categoria para agendar',
   [
     { 
        text:"OK",
        style: 'cancel',
                     
      }
   ])}
```
Aprendi algumas tipagens avançadas,de componentes nativos  inclusive tipagems para qualquer filho do React

```javascript
import { RectButton,RectButtonProps} from "react-native-gesture-handler"

interface Data extends RectButtonProps  {
 data: IAppointmentProps; 
 
/*-------------------------------------------------*/


import React,{ReactNode} from 'react'

interface IModalViewProps extends ModalProps{
    children:ReactNode /*todos os filhos do react */
    handleCloseModal:() => void;
}

 
 const ModalView:React.FC<IModalViewProps> = ({children,handleCloseModal,...rest}) => (
    <Modal
        transparent
        animationType="slide"
        statusBarTranslucent /* vai fazer modal cobrir tudo,restante deixando claro  */
        {...rest}
    >
     <TouchableWithoutFeedback onPress={()=> handleCloseModal()} >
       <ViewOverlay>
        <ViewContent>
          <Background>
             <ViewBar /> 
              {children}
          </Background>
        </ViewContent>
       </ViewOverlay>
     </TouchableWithoutFeedback>    
    </Modal>
)

 ```
Reforcei a tenica de copiar  Arrays. Com ...appointement, estou copiando tudo que vem anterior </br>
e colocando dentro do Async , assim não corro risco de sobescrerver dados que não desejo perder
 
 ```javascript
const handleSave = async () => {
      const newAppointment = {
         id: uuid.v4(),
         category,
         guild,
         date: `${day}/${month} as ${hour}:${minute}h `,
         description
      }
 const fetchStorage = await AsyncStorage.getItem(Collection_Appointment);
 const appointment = fetchStorage? JSON.parse(fetchStorage) : [];
/*com if ternário estou garantido que não vou sobrescrever valores
que estão salvos com essa chave  Collection_Appointment*/
AsyncStorage.setItem(Collection_Appointment,JSON.stringify([
...appointment,
 newAppointment,
 ]));
 }
 ```
Mais tenicas de tipagem,determiando objetos vazios nas minhas constantes é exportando as minhas interfaces.</br>
O component Flatllist do React Native so renderiza vector,então utilizei outra tecnica de tipagem</br>
ao colocar vetor( [] )ao lado do objeto. Mesmo transforma em um vetor
 
```javascript

export interface IGuildProps{
  id:string;
  name:string;
  icon: string | null;
  owner: boolean
}

 const [guild,setGuild] = useState<IGuildProps>({} as IGuildProps);
 
 interface IWidget{
   id:string,
   members:IMemberProps[],
   presence_count: string,
   name:string,
   instant_invite: string,

}


  <ListMember 
     data={widget.members? widget.members : []  }
    /*preciso determinar que meu members e vetor */
    /*lembrando que flatlist so carrega vetores */                       
    keyExtractor={(item:any)=> item.id}
    renderItem={({item}:any)=> <Member data={item} />}
    ItemSeparatorComponent={()=> <ListSplit /> }
    showsVerticalScrollIndicator={false}
 />  

 ```
Reforçando conhecimento  da FLatlist,aplicando estillos internos na lista é invertendo a lista,quando não cabe na tela.</br 
assim deixando em primeiro so os atuais.</br>
Utilizei itemSeparatorComponent para criar uma pequena linha entre os componentes renderizado é um espaçamento,</br>
com a propriedade iverdeted,faço a inversão da lista nesse caso esta dinamico</br>
por fim com contentContainerStyle aplico estilos internos no Flatlist

 ```javascript
   <ListMatch 
      data={appointments} 
      keyExtractor={(item: any) => item.id }
      inverted={invertedList}
      renderItem={({item}:any)   => (
     <Appointment data={item}                
       onPress={() =>  handleAppointmentDetails(item)}
    />
     )}
     ItemSeparatorComponent={()=> <ListSplit /> } 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={invertedList&&{paddingTop:69}}
    /* contentContainerStyle aplico estilo interno na lista */
    showsVerticalScrollIndicator={false}
  />
 
 ```
 Aprrendi adicionar parametros no cabeçalho das minhas requisoções ja que estamos usando Auth 02,
 
 ```javascript
  api.defaults.headers.authorization = `Bearer ${params.access_token} `;
  /* Bearer e o padrão da rota do token, acima estou adicionando um header padrão no
  cabeçalho da api o token, */

```
Utilizamos fontes e estilos customizados

```javascript
import AppLoading from 'expo-app-loading';
import { useFonts,Inter_400Regular,Inter_500Medium  } from "@expo-google-fonts/inter"

const App = () => {
  const [loading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  })

  if(!loading){
  
   return <AppLoading />

  }
}

/* Outro arquivo separado */

export const Theme = {
  colors: {
    primary: "#E51C44",
  },

  fonts: {
    title700: "Rajdhani_700Bold",
   
  },
};

```

Uitlizamos customização no padrão do navigation stack,por padrão vem alguns css setado é podem atraplhar aplicação</br>
Tambem foi separado rotas publicas das privadas 

```javascript 
const AppRoutes = () =>( 
    <Navigator
      headerMode="none"
      screenOptions={{
          cardStyle:{
              backgroundColor:'transparent',
          }
      }}   
      
    >
        <Screen name="Home" component={HomeScreen}  />
        <Screen name="AppointmentDetails" component={AppointmentDetails} />  
        <Screen name="AppointmentCreate" component={AppointmentCreate} />            
    </Navigator>     
);



const Routes = () => {
   const { user }  = useAth();

    return (
        <NavigationContainer>
           {user.id?  <AppRoutes/>   :  <Sign/>  }      
        </NavigationContainer>  
    );
}
export default Routes;
```

Abaixo o uso do Linear Gradient

```javascript
import { LinearGradient } from 'expo-linear-gradient';

const Background:React.FC<IBackgroundProps> = ({children}) => {
  const { secondary80,secondary100} = Theme.colors;
 
    return (
         <LinearGradient 
           style={{flexGrow:1}}
           colors={[
            secondary80,
            secondary100,
           ]}
        >
         {children}
        </LinearGradient>    
    )
}

```
Por fim usamos SVG, as consigurações estão no projeto em metro.config.js</br>
Se estiver usando type script precisa declarar modulo SVG no arquivo declartion.d.ts</br>
Por fim utilizar packagerOpts no seu app.json

```javascript
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
declare module "*.png";
```
```json
 "packagerOpts": {
      "config": "metro.config.js",
      "sourceExts": [
        "expo.ts",
        "expo.tsx",
        "expo.js",
        "expo.jsx",
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "wasm",
        "svg"
      ]
    }
    
```
Por fim utilizei o [AuthSession](https://docs.expo.io/versions/latest/sdk/auth-session/)</br>
para realizar integraçao com Discord é realizar autenticação precisa no seu json colocar o nome do projeto igual ao sheme</br>
existe mais configurações vendo o proejeto e possivel entender
```json
"scheme": "nlw-together",

```
 
 # Feature
  - Hooks
  - styled component
  - Atomics
  - Tipagem
  - Auth 02

## Dependencias
- [Google fonts](https://fonts.google.com/)
- [Expo fonts](https://docs.expo.io/guides/using-custom-fonts/#using-a-google-font)
- [Linear Gradiente](https://docs.expo.io/versions/latest/sdk/linear-gradient/)
- [App Loading](https://docs.expo.io/versions/latest/sdk/app-loading/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [React Native Gesture Handler](https://reactnavigation.org/docs/getting-started/)
- [Stack Navigation](https://reactnavigation.org/docs/stack-navigator)
- [Expo SVG](https://docs.expo.io/versions/latest/sdk/svg/)
- [Transforme SVG](https://github.com/kristerkari/react-native-svg-transformer)
- [Iphone helper](https://github.com/ptelad/react-native-iphone-x-helper)
- [Axios](https://axios-http.com/docs/intro)
- [Expo Auth](https://docs.expo.io/versions/latest/sdk/auth-session/#installation)
- [Env Babel plugin](https://github.com/brysgo/babel-plugin-inline-dotenv)
- [Expo Async Storage](https://docs.expo.io/versions/latest/sdk/async-storage/)
- [Uuid Random](https://github.com/eugenehp/react-native-uuid#readme)
