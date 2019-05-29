import React from 'react';
import style from "./App.module.scss";
import "semantic-ui-button/button.min.css";

function App({onClick}) {
    return (
        <div className={style.container}>
            <button onClick={onClick} className={`${style.button} ui button`}><span role={"img"} aria-label={"clap clap"}>👏👏</span></button>
        </div>
    );
}

export {App};
