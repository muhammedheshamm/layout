import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function app(){
    return(
        <div className="container">
            <Navbar />
            <Main />
            <footer>
                &copy; 2022 <span>Muhammed</span> All Rights Reserved
            </footer>
        </div>
    )
}