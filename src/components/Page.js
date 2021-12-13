import { Outlet } from "react-router-dom";
import '../css/style.css';

export default function Page(){
    return(
        <>
            <div className="characterCreator">
                <header>
                    <div><span>C</span>haracter <span>C</span>reator</div>
                </header>
                <main>
                    <Outlet />
                </main>
                <div className="background-container">
                    <div className="papyrus"></div>
                    <div className="gradientWhite01"></div>

                    <div className="bgSet01">
                        <div className="char01"></div>
                        <div className="char02"></div>
                        <div className="char03"></div>
                    </div>
                    <div className="bgSet02">
                        <div className="desert"></div>
                    </div>
                </div>
            </div>
        </>
    );
}