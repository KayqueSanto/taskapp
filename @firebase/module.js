let htmlatual = window.location.href
console.log(htmlatual)

console.log(htmlatual.includes("acesso.html") ? "inclui": "nào inclui")

// Importaçào dos metodos do firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGJO-DByVEZruLkiACio4wMUe1xDmtVwc",
  authDomain: "taskapp-eaa2d.firebaseapp.com",
  projectId: "taskapp-eaa2d",
  storageBucket: "taskapp-eaa2d.appspot.com",
  messagingSenderId: "1095166771763",
  appId: "1:1095166771763:web:53b0bcec97ffcb605d1946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

try {
    //essa é a função de fazer login
    document.getElementById("botaologin").addEventListener("click", () =>{
        var email = document.getElementById("email").value
        var senha = document.getElementById("senha").value
        const autenticacao = getAuth()
        signInWithEmailAndPassword(autenticacao, email, senha)
        .then((userCredential) => {
            alert("[SUCESSO]")
        })
        .catch((error) => {
            alert("[ERRO]")
        })
    })

    document.getElementById("botaocadastro").addEventListener("click", () => {
         //Função de cadastrar o usuário
         var nomedeusuario = document.getElementById("inputnome").value
         var inputemail = document.getElementById("inputemail").value
         var inputsenha = document.getElementById("inputsenha").value
         var confirmarsenha = document.getElementById("confirmarsenha").value
         
         if (inputsenha === confirmarsenha){
             createUserWithEmailAndPassword(auth, inputemail, inputsenha)
             .then((userCredential) => {
                 const user = userCredential.user
                 alert("cadastro realizado")
                 addDoc(collection(db, "usuario"), {
                     nome: nomedeusuario,
                     email: inputemail,
                     senha: inputsenha
                 })
             })
             .catch((error) => {
                 alert("Erro")
             })
 
         }else(
             alert("senha incorreta")
         )
    })
       

        
        
} catch {}