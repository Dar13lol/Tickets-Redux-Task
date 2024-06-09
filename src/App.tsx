import "./index.scss";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";

function App() {
    return (
        <>
            <div className='background'>
                <div className='container'>
                    <Header />
                    <Main />
                </div>
            </div>
        </>
    );
}

export default App;
