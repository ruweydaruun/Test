/*
import { createRoot } from "react-dom/client";
//Components, Props and ConditionalRendering//
const Header = (props) =>{
    return(
        
            <h2 style={{backgroundColor:"skyblue"}}> Hello I Am {props.user} </h2> 
    )
}

const Footer = () =>{
    return(
        <h2>HI I Am Footer</h2>

    )
}

const Layout = (props) =>{
    return<div style={{backgroundColor:"black", color:"white"}}>
        {props.children}
    </div>
}

const Login = () =>{
    return(
        <>
        <h3>please Login</h3>
        <input type="text"  placeholder="please login"/> 
        </>
    )
}
const SignOut =() =>{
    return(
        <button type="button">SignOut</button>
    )
}
const isAuthenticated = "true";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Layout>
        {isAuthenticated ? 
        <>
        <Header user = "Ruweyda"/>
        <SignOut/>
        </>

        : <Login/>};
        
       
    </Layout>
)

export default Header;
*/