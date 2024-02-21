import React from "react";
import Section1 from './sections/section1';
import Section2 from "./sections/section2";

class Homepage extends React.Component{
    render() {
        return (
            <>
                <Section1/>
                <Section2/>
            </>
        );
    }
}

export default Homepage;