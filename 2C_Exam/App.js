import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [currPlayer, setCurrPlayer] = useState('You');
  const [diceValue, setDiceValue] = useState(0);
  const [botPos, setBotPos] = useState(0);
  const [playerPos, setPlayerPos] = useState(0);
  const cells = document.querySelectorAll('td');
  const snakes = [
    [64, 33],
    [54, 17],
    [97, 76],
    [93, 87],
  ];
  const ladders = [
    [4, 20],
    [9, 28],
    [40, 63],
    [71, 51],
  ];
  let gameFinish = false;

  while ((gameFinish = false)) {}

  const rollDice = () => {
    let rollValue = Math.floor(Math.random() * 6) + 1;

    setDiceValue(rollValue);

    if (currPlayer === 'You') {
      setCurrPlayer('Bot');
      setBotPos(botPos + rollValue);
    } else {
      setCurrPlayer('You');
      setPlayerPos(playerPos + rollValue);
    }
  };

  return (
    <div className="App">
      <h1>Snakes and Ladders</h1>
      <h2>Turn: {currPlayer}</h2>
      <button className="rollDiceBtn" onClick={rollDice}>
        Roll the Dice!
      </button>
      <br></br>
      <br></br>
      <input value={diceValue} readOnly />
      <br></br>
      <br></br>
      <h1>p{playerPos}</h1>
      <h1>b{botPos}</h1>
      <h2>Legend</h2>
      <p>
        Snakes: <span style={{ color: 'red', fontWeight: 'bold' }}>Red</span> |
        Ladders:{' '}
        <span style={{ color: 'rgb(0, 224, 0)', fontWeight: 'bold' }}>
          Green
        </span>
      </p>

      <table>
        <tr>
          <td className="100">
            <span className="cell-number">100</span>
            <span className="cell-marker"></span>
          </td>
          <td className="99">
            <span className="cell-number">99</span>
            <span className="cell-marker"></span>
          </td>
          <td className="98">
            <span className="cell-number">98</span>
            <span className="cell-marker"></span>
          </td>
          <td className="97">
            <span className="cell-number">97</span>
            <span className="cell-marker"></span>
          </td>
          <td className="96">
            <span className="cell-number">96</span>
            <span className="cell-marker"></span>
          </td>
          <td className="95">
            <span className="cell-number">95</span>
            <span className="cell-marker"></span>
          </td>
          <td className="94">
            <span className="cell-number">94</span>
            <span className="cell-marker"></span>
          </td>
          <td className="93">
            <span className="cell-number">93</span>
            <span className="cell-marker"></span>
          </td>
          <td className="92">
            <span className="cell-number">92</span>
            <span className="cell-marker"></span>
          </td>
          <td className="91">
            <span className="cell-number">91</span>
            <span className="cell-marker"></span>
          </td>
        </tr>

        <tr>
          <td className="81">
            <span className="cell-number">81</span>
            <span className="cell-marker"></span>
          </td>
          <td className="82">
            <span className="cell-number">82</span>
            <span className="cell-marker"></span>
          </td>
          <td className="83">
            <span className="cell-number">83</span>
            <span className="cell-marker"></span>
          </td>
          <td className="84">
            <span className="cell-number">84</span>
            <span className="cell-marker"></span>
          </td>
          <td className="85">
            <span className="cell-number">85</span>
            <span className="cell-marker"></span>
          </td>
          <td className="86">
            <span className="cell-number">86</span>
            <span className="cell-marker"></span>
          </td>
          <td className="87">
            <span className="cell-number">87</span>
            <span className="cell-marker"></span>
          </td>
          <td className="88">
            <span className="cell-number">88</span>
            <span className="cell-marker"></span>
          </td>
          <td className="89">
            <span className="cell-number">89</span>
            <span className="cell-marker"></span>
          </td>
          <td className="90">
            <span className="cell-number">90</span>
            <span className="cell-marker"></span>
          </td>
        </tr>

        <tr>
          <td className="80">
            <span className="cell-number">80</span>
            <span className="cell-marker"></span>
          </td>
          <td className="79">
            <span className="cell-number">79</span>
            <span className="cell-marker"></span>
          </td>
          <td className="78">
            <span className="cell-number">78</span>
            <span className="cell-marker"></span>
          </td>
          <td className="77">
            <span className="cell-number">77</span>
            <span className="cell-marker"></span>
          </td>
          <td className="76">
            <span className="cell-number">76</span>
            <span className="cell-marker"></span>
          </td>
          <td className="75">
            <span className="cell-number">75</span>
            <span className="cell-marker"></span>
          </td>
          <td className="74">
            <span className="cell-number">74</span>
            <span className="cell-marker"></span>
          </td>
          <td className="73">
            <span className="cell-number">73</span>
            <span className="cell-marker"></span>
          </td>
          <td className="72">
            <span className="cell-number">72</span>
            <span className="cell-marker"></span>
          </td>
          <td className="71">
            <span className="cell-number">71</span>
            <span className="cell-marker"></span>
          </td>
        </tr>

        <tr>
          <td className="61">
            <span className="cell-number">61</span>
            <span className="cell-marker"></span>
          </td>
          <td className="62">
            <span className="cell-number">62</span>
            <span className="cell-marker"></span>
          </td>
          <td className="63">
            <span className="cell-number">63</span>
            <span className="cell-marker"></span>
          </td>
          <td className="64">
            <span className="cell-number">64</span>
            <span className="cell-marker"></span>
          </td>
          <td className="65">
            <span className="cell-number">65</span>
            <span className="cell-marker"></span>
          </td>
          <td className="66">
            <span className="cell-number">66</span>
            <span className="cell-marker"></span>
          </td>
          <td className="67">
            <span className="cell-number">67</span>
            <span className="cell-marker"></span>
          </td>
          <td className="68">
            <span className="cell-number">68</span>
            <span className="cell-marker"></span>
          </td>
          <td className="69">
            <span className="cell-number">69</span>
            <span className="cell-marker"></span>
          </td>
          <td className="70">
            <span className="cell-number">70</span>
            <span className="cell-marker"></span>
          </td>
        </tr>

        <tr>
          <td className="60">
            <span className="cell-number">60</span>
            <span className="cell-marker"></span>
          </td>
          <td className="59">
            <span className="cell-number">59</span>
            <span className="cell-marker"></span>
          </td>
          <td className="58">
            <span className="cell-number">58</span>
            <span className="cell-marker"></span>
          </td>
          <td className="57">
            <span className="cell-number">57</span>
            <span className="cell-marker"></span>
          </td>
          <td className="56">
            <span className="cell-number">56</span>
            <span className="cell-marker"></span>
          </td>
          <td className="55">
            <span className="cell-number">55</span>
            <span className="cell-marker"></span>
          </td>
          <td className="54">
            <span className="cell-number">54</span>
            <span className="cell-marker"></span>
          </td>
          <td className="53">
            <span className="cell-number">53</span>
            <span className="cell-marker"></span>
          </td>
          <td className="52">
            <span className="cell-number">52</span>
            <span className="cell-marker"></span>
          </td>
          <td className="51">
            <span className="cell-number">51</span>
            <span className="cell-marker"></span>
          </td>
        </tr>

        <tr>
          <td className="41">
            <span className="cell-number">41</span>
            <span className="cell-marker"></span>
          </td>
          <td className="42">
            <span className="cell-number">42</span>
            <span className="cell-marker"></span>
          </td>
          <td className="43">
            <span className="cell-number">43</span>
            <span className="cell-marker"></span>
          </td>
          <td className="44">
            <span className="cell-number">44</span>
            <span className="cell-marker"></span>
          </td>
          <td className="45">
            <span className="cell-number">45</span>
            <span className="cell-marker"></span>
          </td>
          <td className="46">
            <span className="cell-number">46</span>
            <span className="cell-marker"></span>
          </td>
          <td className="47">
            <span className="cell-number">47</span>
            <span className="cell-marker"></span>
          </td>
          <td className="48">
            <span className="cell-number">48</span>
            <span className="cell-marker"></span>
          </td>
          <td className="49">
            <span className="cell-number">49</span>
            <span className="cell-marker"></span>
          </td>
          <td className="50">
            <span className="cell-number">50</span>
            <span className="cell-marker"></span>
          </td>
        </tr>

        <tr>
          <td className="40">
            <span className="cell-number">40</span>
            <span className="cell-marker"></span>
          </td>
          <td className="39">
            <span className="cell-number">39</span>
            <span className="cell-marker"></span>
          </td>
          <td className="38">
            <span className="cell-number">38</span>
            <span className="cell-marker"></span>
          </td>
          <td className="37">
            <span className="cell-number">37</span>
            <span className="cell-marker"></span>
          </td>
          <td className="36">
            <span className="cell-number">36</span>
            <span className="cell-marker"></span>
          </td>
          <td className="35">
            <span className="cell-number">35</span>
            <span className="cell-marker"></span>
          </td>
          <td className="34">
            <span className="cell-number">34</span>
            <span className="cell-marker"></span>
          </td>
          <td className="33">
            <span className="cell-number">33</span>
            <span className="cell-marker"></span>
          </td>
          <td className="32">
            <span className="cell-number">32</span>
            <span className="cell-marker"></span>
          </td>
          <td className="31">
            <span className="cell-number">31</span>
            <span className="cell-marker"></span>
          </td>
        </tr>

        <tr>
          <td className="21">
            <span className="cell-number">21</span>
            <span className="cell-marker"></span>
          </td>
          <td className="22">
            <span className="cell-number">22</span>
            <span className="cell-marker"></span>
          </td>
          <td className="23">
            <span className="cell-number">23</span>
            <span className="cell-marker"></span>
          </td>
          <td className="24">
            <span className="cell-number">24</span>
            <span className="cell-marker"></span>
          </td>
          <td className="25">
            <span className="cell-number">25</span>
            <span className="cell-marker"></span>
          </td>
          <td className="26">
            <span className="cell-number">26</span>
            <span className="cell-marker"></span>
          </td>
          <td className="27">
            <span className="cell-number">27</span>
            <span className="cell-marker"></span>
          </td>
          <td className="28">
            <span className="cell-number">28</span>
            <span className="cell-marker"></span>
          </td>
          <td className="29">
            <span className="cell-number">29</span>
            <span className="cell-marker"></span>
          </td>
          <td className="30">
            <span className="cell-number">30</span>
            <span className="cell-marker"></span>
          </td>
        </tr>

        <tr>
          <td className="20">
            <span className="cell-number">20</span>
            <span className="cell-marker"></span>
          </td>
          <td className="19">
            <span className="cell-number">19</span>
            <span className="cell-marker"></span>
          </td>
          <td className="18">
            <span className="cell-number">18</span>
            <span className="cell-marker"></span>
          </td>
          <td className="17">
            <span className="cell-number">17</span>
            <span className="cell-marker"></span>
          </td>
          <td className="16">
            <span className="cell-number">16</span>
            <span className="cell-marker"></span>
          </td>
          <td className="15">
            <span className="cell-number">15</span>
            <span className="cell-marker"></span>
          </td>
          <td className="14">
            <span className="cell-number">14</span>
            <span className="cell-marker"></span>
          </td>
          <td className="13">
            <span className="cell-number">13</span>
            <span className="cell-marker"></span>
          </td>
          <td className="12">
            <span className="cell-number">12</span>
            <span className="cell-marker"></span>
          </td>
          <td className="11">
            <span className="cell-number">11</span>
            <span className="cell-marker"></span>
          </td>
        </tr>

        <tr>
          <td className="1">
            <span className="cell-number">1</span>
            <span className="cell-marker"></span>
          </td>
          <td className="2">
            <span className="cell-number">2</span>
            <span className="cell-marker"></span>
          </td>
          <td className="3">
            <span className="cell-number">3</span>
            <span className="cell-marker"></span>
          </td>
          <td className="4">
            <span className="cell-number">4</span>
            <span className="cell-marker"></span>
          </td>
          <td className="5">
            <span className="cell-number">5</span>
            <span className="cell-marker"></span>
          </td>
          <td className="6">
            <span className="cell-number">6</span>
            <span className="cell-marker"></span>
          </td>
          <td className="7">
            <span className="cell-number">7</span>
            <span className="cell-marker"></span>
          </td>
          <td className="8">
            <span className="cell-number">8</span>
            <span className="cell-marker"></span>
          </td>
          <td className="9">
            <span className="cell-number">9</span>
            <span className="cell-marker"></span>
          </td>
          <td className="10">
            <span className="cell-number">10</span>
            <span className="cell-marker"></span>
          </td>
        </tr>
      </table>
      <br></br>
      <br></br>
      <button className="restartBtn">Restart Game</button>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
