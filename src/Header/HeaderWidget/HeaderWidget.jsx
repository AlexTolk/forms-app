import { useEffect, useState } from "react";

const HeaderWidget = () => {

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetch().then(() => {})
    }, [])
    return(
        <div></div>
    );
}
export default HeaderWidget;