import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const USER_LOGIN_SUCESS = "USER_LOGIN_SUCESS";
const userLoginSucess = user => ({
    type: USER_LOGIN_SUCESS,
    user
})

export const USER_LOGOUT = "USER_LOGOUT";
const userLogout = () => ({
    type: USER_LOGOUT,
})

export const processLogin = (setLoading, setMessage, email, senha, {navigation}) => dispatch => { 

    setLoading(true);

    signInWithEmailAndPassword(auth, email, senha)
    .then(user => {
        
        setMessage("Logado com sucesso!");
        const action = userLoginSucess(user);
        dispatch(action);
        navigation.navigate("Menu"); 

      })
    .catch(erro =>{

      setMessage(erro.code)
    })
    .then( () => {
      setLoading(false);
    });
  }