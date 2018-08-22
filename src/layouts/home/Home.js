import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import logo from '../../logo.png'

class Home extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1 header">
            <img src={logo} alt="drizzle-logo" width='35%' height='35%'/>
            <h1>Kerela Relief camp inventory system</h1>
            <p>Simple management system to manage inventory of items received by various relief camps accross Kerela</p>
          </div>

          <div className="pure-u-1-2 header">
            <h3><a href="./addDist">Add Camp </a></h3>
            <p> Only owner can add Camp </p>
          </div>

          <div className="pure-u-1-2 header">
            <h3><a href="./addDist">Add User Details </a></h3>
            <p> Only owner and Camp admins can add users </p>
          </div>

          <div className="pure-u-1-2 header">
            <h3><a href="./addDist">Add Item </a></h3>
            <p> Only owner can add Items </p>
          </div>

          <div className="pure-u-1-2 header">
            <h3><a href="./addDist">Issue Items to Camp </a></h3>
            <p> Only owner can centrally issue items to camps </p>
          </div>

          <div className="pure-u-1-2 header">
            <h3><a href="./addDist">Add Item received to camp</a></h3>
            <p> Distributors can add items to camps received from local donations </p>
          </div>

          <div className="pure-u-1-2 header">
            <h3><a href="./addDist">List Items</a></h3>
            <p> List inventory of local </p>
          </div>

          <div className="pure-u-1-2 header">
            <h3><a href="./addDist">Allotment of Item</a></h3>
            <p> Allot item to users </p>
          </div>

          <div className="pure-u-1-2 header">
            <h3><a href="./addDist">Remove User</a></h3>
            <p> Only owner can perform this action </p>
          </div>

          <div className="pure-u-1-1 header">
          <br/><br/>
          <br/><br/>
            <p>By love </p><p>from Ethereum and Etherum Classic Communities</p>
            <br/><br/>
          </div>


        </div>
      </main>
    )
  }
}

export default Home

/*
<div className="pure-u-1-1">
  <h2>SimpleStorage</h2>
  <p>This shows a simple ContractData component with no arguments, along with a form to set its value.</p>
  <p><strong>Stored Value</strong>: <ContractData contract="SimpleStorage" method="storedData" /></p>
  <ContractForm contract="SimpleStorage" method="set" />

  <br/><br/>
</div>

<div className="pure-u-1-1">
  <h2>TutorialToken</h2>
  <p>Here we have a form with custom, friendly labels. Also note the token symbol will not display a loading indicator. We've suppressed it with the <code>hideIndicator</code> prop because we know this variable is constant.</p>
  <p><strong>Total Supply</strong>: <ContractData contract="TutorialToken" method="totalSupply" methodArgs={[{from: this.props.accounts[0]}]} /> <ContractData contract="TutorialToken" method="symbol" hideIndicator /></p>
  <p><strong>My Balance</strong>: <ContractData contract="TutorialToken" method="balanceOf" methodArgs={[this.props.accounts[0]]} /></p>
  <h3>Send Tokens</h3>
  <ContractForm contract="TutorialToken" method="transfer" labels={['To Address', 'Amount to Send']} />

  <br/><br/>
</div>

<div className="pure-u-1-1">
  <h2>ComplexStorage</h2>
  <p>Finally this contract shows data types with additional considerations. Note in the code the strings below are converted from bytes to UTF-8 strings and the device data struct is iterated as a list.</p>
  <p><strong>String 1</strong>: <ContractData contract="ComplexStorage" method="string1" toUtf8 /></p>
  <p><strong>String 2</strong>: <ContractData contract="ComplexStorage" method="string2" toUtf8 /></p>
  <strong>Single Device Data</strong>: <ContractData contract="ComplexStorage" method="singleDD" />

  <br/><br/>
</div>

*/
