import React from "react";

const Screen = ({ score, startGame }) => {
    return (
        <>
            <div className="screen">
                {score > 0 ? (
                    <>
                    
                        <button className="again" onClick={() => startGame()}>
                            Play Again
                        </button>
                    </>
                ) : (
                    <>
                       
                        <button onClick={() => startGame()}>START</button>
                    </>
                )}
            </div>
        </>
    );
};

export default Screen;
