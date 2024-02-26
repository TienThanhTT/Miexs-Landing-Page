import React from "react";
import "../../../styles/config.css";
import "../../../styles/component/section7.css";
import "../../../styles/reponsive/section7_reponsive.css";
import ArrowIcon from "../../Items/ArrowIcon";
import BlackArrowIcon from "../../Items/BlackArrowIcon";

class Section7 extends React.Component {
  render() {
    return (
      <div className="section7_wrapper wrapper">
        <div className="section7">
          <div className="section7_left">
            <div className="title section7-left_title">Build on Miexs</div>
            <div className="section7-left_content">
              The possibilities are endless with Miexs's payment solution
              ecosystem - join now and discoverhundreds of apps and services
              geared towards driving community and business success.
            </div>

            <div className="section7-left_button">
              <button className="button section7-left_BlueButton">
                Read the docs
                <ArrowIcon />
              </button>
              <button className="button section7-left_BlackButton">
                Our open source code
              </button>
            </div>
          </div>

          <div className="section7-right_wrapper">
            <div className="section7_right">
              <div className="section7-right_title">EVM compatible</div>
              <div className="section7-right_content">
                Miexs is one of the most widely used Ethereum scaling ecosystems
                that offers EVM compatibility, cheap and fast transactions, and
                a high-performance user experience. Deploy your dApps on Miexs
                at a fraction of the cost of Ethereum and experience the
                benefits of a scalable and efficient blockchain.
              </div>
              <div className="section7-right_arrowContent">
                <BlackArrowIcon />
                Deploy your first contract on Miexs
              </div>
            </div>
            <div className="section7_right">
              <div className="section7-right_title">
                ERPC, Oracles & Subgraphs on Miexs
              </div>
              <div className="section7-right_content">
                Deploy smart contracts by utilizing Miexs RPC to interact with
                Miexs blockchain nodes and industry-leaders oracle providers Dia
                and Supra to access price feed. and efficient blockchain.
              </div>
              <div className="section7-right_arrowContent">
                <BlackArrowIcon />
                Get access to robust RPC
              </div>
              <div className="section7-right_arrowContent">
                <BlackArrowIcon />
                Get access to Subgraphs & Oracles
              </div>
            </div>
            <div className="section7_right">
              <div className="section7-right_title">
                Templates for fast development
              </div>
              <div className="section7-right_content">
                Miexs APIs allow you to Build Web3 apps as easily as traditional
                Web2 applications with zero previous knowledge of crypto.
              </div>
              <div className="section7-right_arrowContent">
                <BlackArrowIcon />
                Get started with wallet-as-a-service
              </div>
              <div className="section7-right_arrowContent">
                <BlackArrowIcon />
                Get started with Mobile wallet
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section7;
