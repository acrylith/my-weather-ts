import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFiveDaysWeather } from "../store/action-creators/fetchFiveDaysWeather";
import { fetchWeather } from "../store/action-creators/fetchWeather";

export const SearchInput: React.FC = () => {
    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchWeather(input))
        dispatch(fetchFiveDaysWeather(input))
    }

    const formatSearch = (input: string) => {
        setInput(input.replace(/\s/g, '%20'))
    }

    return(
        <header className="header">
            <div className="container">
                <div className="header__search">
                    <div className="row justify-content-center">
                        <div className="col-sm-10 col-md-9 col-lg-7 col-xl-5 col-xxl-4">
                            <div className="header__search-wrapper">
                                <img className="loc" src="./icons/loc.svg" alt="location" />
                                <input
                                    type="text"
                                    name="location"
                                    autoComplete="off"
                                    onChange={(e) => formatSearch(e.target.value)}
                                />
                                <button onClick={() => handleClick()}><img src="./icons/arrow.svg" alt="E" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}