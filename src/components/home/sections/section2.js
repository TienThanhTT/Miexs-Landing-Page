import React from "react";
import '../../../styles/component/section2.css';
import '../../../styles/colors.css';
import '../../../styles/config.css';
import section2Icon from '../../../assets/icon/section2Icon.svg'

class Section2 extends React.Component{
    render() {
        return (
            <div className="section2_wrapper">
                <div className="section2">
                    <div className="section2_left">
                        <div className="title section2-left_title">
                            Join the Ecosystem
                        </div>
                        <div className="section2-left_content">
                            <p>
                                From next generation up starts solving real-world problems to big 
                                name infrastructure and service providers, join our journey and build 
                                in the most promising blockchain ecosystem in existence.
                            </p>
                        </div>
                        <div className="section2-left_icon">
                            <img src={section2Icon} className="section2Icon" alt="section2Icon"/>
                        </div>
                    </div>

                    <div className="section2_right">
                        <div className="section2-right_wrapper">
                            <div className="section2-right_title">
                                <h3>
                                    <span>128M+</span>
                                    <br/>
                                    Transactions
                                </h3>
                            </div>
                            <div className="section2-right_content">
                                <p>
                                    On The Miexs Network since 2019
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <div className="section2-right_wrapper">
                            <div className="section2-right_title">
                                <h3>
                                    <span>100+</span>
                                    <br/>
                                    Projects
                                </h3>
                            </div>
                            <div className="section2-right_content">
                                <p>
                                    Largest blockchain ecosystem for payments
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <div className="section2-right_wrapper">
                            <div className="section2-right_title">
                                <h3>
                                    <span>180K+</span>
                                    <br/>
                                    Smart Wallets
                                </h3>
                            </div>
                            <div className="section2-right_content">
                                <p>
                                    Fully open source wallet-as-a-service stack
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Section2;