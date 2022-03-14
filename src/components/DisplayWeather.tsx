import React, { useState } from "react"
import { FiveDaysWeather } from "./FiveDaysWeather";
import { TodayWeater } from "./TodayWeather"


export const DisplayWeather: React.FC = () => {
    const [tab, setTab] = useState("today");
    return(
        <main className="main">
            <aside className="controls">
                <button className={tab === "today" ? "selected": undefined} onClick={() => setTab("today")}>Today</button>
                <button className={tab === "5days" ? "selected": undefined} onClick={() => setTab("5days")}>5 days</button>
            </aside>

            <div className="container">
                {
                    tab === "today"?
                        <TodayWeater />:
                    tab === "5days"?
                        <FiveDaysWeather />
                    :null
                }
            </div>
        </main>
    )
}