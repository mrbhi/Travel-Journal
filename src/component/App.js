import React from "react";
import Header from "./Header";
import Main from "./Main";
import data from "./data";
import "./style.css"

const App = () => {
    const dataInfo = data.map(card => {
        return <Main
                    key={card.id}
                    item={card}
                />
    })
    return(
        <>
            <Header />
            <div className="travel">
                {dataInfo}
            </div>
        </>
    )
}

export default App