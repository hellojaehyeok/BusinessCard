
import firebase from "firebase";
import firebaseApp from "./firebase"

class AuthService{
    login(providerName){
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }

    onAuthChange(onUserChanged){
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }

    logout(){
        firebase.auth().signOut();
        console.log("logout");
    }
}


export default AuthService;