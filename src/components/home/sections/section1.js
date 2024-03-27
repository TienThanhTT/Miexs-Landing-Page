import React from "react";
import '../../../styles/component/section1.css';
import Small_BackgroundMask from '../../../assets/icon/section1/Small_BackgroundMask.svg';
import Icon1 from '../../../assets/icon//section1/DownIcon1.svg';
import Icon2 from '../../../assets/icon/section1/DownIcon2.svg';
import Icon3 from '../../../assets/icon/section1/DownIcon3.svg';

class section1 extends React.Component{
    render() {
        return (
            <div className="section1_wrapper py-[170px]">
                {/* <img src={Small_BackgroundMask} alt=""/> */}
                <div className="container">
                    <div className="text-center max-w-[786px] mx-auto mb-[170px]">
                        <div className="section1Up_title">Blockchain Ecosystem for Business Payments</div>
                        <div className="section1Up_content">
                            Top-tier platforms utilize Miexs to fuel expansion, decrease expenses, 
                            and differentiate themselves with quicker and more secure crypto transactions.
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-[30px]">
                        <div className="section1Down_card lg:col-span-4 col-span-12">
                            <div className="section1Down-card_icon">
                                <img src={Icon1} className="section_icon" alt="Icon1"/>
                            </div>
                            <div className="section1Down-card_title mb-[40px]">
                                <h2 className="text-2xl font-bold">Go Faster</h2>
                                <h4 className="text-lg">Build Easy-to-Use Web3 Apps</h4>
                            </div>
                            <div className="section1Down-card_content text-center">
                                <p>
                                    With intuitive tools and mobile-first interfaces, Miexs simplifies Web3
                                    app development and usage for mainstream adoption.
                                 </p>
                            </div>
                        </div>

                        <div className="section1Down_card lg:col-span-4 col-span-12">
                            <div className="section1Down-card_icon">
                                <img  src={Icon2} className="section_icon" alt="Icon1"/>
                            </div>
                            <div className="section1Down-card_title mb-[40px]">
                                <h2 className="text-2xl font-bold">Boost Profits</h2>
                                <h4 className="text-lg">$0.0001 Average Transaction Cost</h4>
                            </div>
                            <div className="section1Down-card_content text-center">
                                <p>
                                    As a EVM Chain, Miexs offers lightning-fast transactions and reduced fees 
                                    compared to Ethereum, making it the perfect solution for a range of Web3 
                                    and payment services.
                                 </p>
                            </div>
                        </div>

                        <div className="section1Down_card lg:col-span-4 col-span-12">
                            <div className="section1Down-card_icon">
                                <img  src={Icon3} className="section_icon" alt="Icon1"/>
                            </div>
                            <div className="section1Down-card_title mb-[40px]">
                                <h2 className="text-2xl font-bold">Build with Certainty</h2>
                                <h4 className="text-lg">99.99% Network Uptime on Miexs</h4>
                            </div>
                            <div className="section1Down-card_content text-center">
                                <p>
                                    A global network of contributors guarantees 24/7 application uptime and 
                                    uninterrupted data transfer. Keep your transactions flowing seamlessly 
                                    across borders and around the clock.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default section1;