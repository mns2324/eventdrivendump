import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [currPlayer, setCurrPlayer] = useState('You (X)');
  const [diceValue, setDiceValue] = useState(0);
  const [botPos, setBotPos] = useState(0);
  const [playerPos, setPlayerPos] = useState(0);
  const [gameFinish, setGameFinish] = useState(false);
  const [winText, setWinText] = useState('');
  const [board, setBoard] = useState(
    ['', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '']
  );
  const snakes = [
    [99, 77],
    [93, 89],
    [85, 56],
    [80, 41],
    [69, 36],
    [54, 32],
    [44, 7],
    [27, 15],
    [19, 3],
  ];
  const ladders = [
    [6, 23],
    [9, 33],
    [14, 26],
    [21, 52],  
    [29, 73],
    [39, 63],   
    [50, 71],
    [59, 87],
    [67, 97],
  ];

  const restartGame = () => {
    setBoard(
      ['', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '']
    );
    setDiceValue(0);
    setBotPos(0);
    setPlayerPos(0);
    setCurrPlayer('You (X)');
    setGameFinish(false);
    setWinText('');
  };

  const checkSnakesLadders = (pos, player) => {
    // change position if a snake or ladder is reached
    for(let i = 0; i < snakes.length; i++){
      if(pos === snakes[i][0]){
        setWinText(player + ' fell down from ' +snakes[i][0]+ ' to ' +snakes[i][1]+ '!');
        pos = snakes[i][1];
      }
    }
    for(let i = 0; i < ladders.length; i++){
      if(pos === ladders[i][0]){
        setWinText(player + ' climbed up from ' +ladders[i][0]+ ' to ' +ladders[i][1]+ '!');
        pos = ladders[i][1];
      }
    }
    return pos;
  };

  const rollDice = () => {
    if (gameFinish === true) {
      return;
    }

    let rollValue = Math.floor(Math.random() * 6) + 1;
    let newBoard = board.slice(); // copy curent board
    setWinText('');
    setDiceValue(rollValue);

    if (currPlayer === 'You (X)') {
      // check if player and bot have same pos before removing previous player mark
      if (newBoard[playerPos - 1] === 'XO') {
        newBoard[playerPos - 1] = 'O';
      } else {
        newBoard[playerPos - 1] = '';
      }

      let newPos = playerPos + rollValue;
              
      // bounce back if new pos is larger than 100
      if (newPos > 100) {      
        newPos = 100 - (newPos - 100);
        setWinText('You bounced back to ' +newPos+ '! Roll a ' +(100-newPos)+ ' to win.');
      }

      newPos = checkSnakesLadders(newPos, 'You');
    
      // win if landed exactly on 100
      if (newPos === 100) {
        setWinText('You win!');
        setGameFinish(true);
      }
    
      // check if player and bot have same pos before placing new player mark
      if (newPos === botPos) {
        newBoard[newPos - 1] = 'XO';
      } else {
        newBoard[newPos - 1] = 'X';
      }
    
      setPlayerPos(newPos);
      setCurrPlayer('Bot (O)');
    } else {
      // check if player and bot have same pos before removing previous player mark
      if (newBoard[botPos - 1] === 'XO') {
        newBoard[botPos - 1] = 'X';
      } else {
        newBoard[botPos - 1] = '';
      }

      let newPos = botPos + rollValue;
        
      // bounce back if new pos is larger than 100
      if (newPos > 100) {
        newPos = 100 - (newPos - 100);
        setWinText('Bot bounced back to ' +newPos+ '! Bot should roll a ' +(100-newPos)+ ' to win.');
      }

      newPos = checkSnakesLadders(newPos, 'Bot');
    
      // win if landed exactly on 100
      if (newPos === 100) {
        setWinText('Bot wins!');
        setGameFinish(true);
      }
    
      // check if player and bot have same pos before placing new bot mark
      if (newPos === playerPos) {
        newBoard[newPos - 1] = 'XO';
      } else {
        newBoard[newPos - 1] = 'O';
      }
    
      setBotPos(newPos);
      setCurrPlayer('You (X)');
    }
    
    setBoard(newBoard); // set the new board
  }

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
      <h3>{winText}</h3>
      <h2>Legend</h2>
      <div className='legend'>    
        <div>
          Snakes:
          <div style={{ color: 'red', fontWeight: 'bold' }}>
            99 {'->'} 77 <br />
            93 {'->'} 89 <br />
            85 {'->'} 56 <br />
            80 {'->'} 41 <br />            
            69 {'->'} 36 <br />
            54 {'->'} 32 <br />
            44 {'->'} 7 <br />
            27 {'->'} 15 <br />
            19 {'->'} 3 <br />
          </div>
        </div>

        <div>
          Ladders:
          <div style={{ color: 'green', fontWeight: 'bold' }}>
            6 {'->'} 23 <br />
            9 {'->'} 33 <br />
            14 {'->'} 26 <br />
            21 {'->'} 52 <br />
            29 {'->'} 73 <br />
            39 {'->'} 63 <br />
            50 {'->'} 71 <br />
            59 {'->'} 87 <br />
            67 {'->'} 97 <br />
          </div>
        </div>

        <div>
          <h1>You: {playerPos}</h1><br />
          <h1>Bot: {botPos}</h1>
        </div>
      </div>

      <table>
        <tr>
          <td className="100">
            <span className="cell-number">100</span>
            <span className="cell-marker">{board[99]}</span>
          </td>
          <td className="99">
            <span className="cell-number">99</span>
            <span className="cell-marker">{board[98]}</span>
          </td>
          <td className="98">
            <span className="cell-number">98</span>
            <span className="cell-marker">{board[97]}</span>
          </td>
          <td className="97">
            <span className="cell-number">97</span>
            <span className="cell-marker">{board[96]}</span>
          </td>
          <td className="96">
            <span className="cell-number">96</span>
            <span className="cell-marker">{board[95]}</span>
          </td>
          <td className="95">
            <span className="cell-number">95</span>
            <span className="cell-marker">{board[94]}</span>
          </td>
          <td className="94">
            <span className="cell-number">94</span>
            <span className="cell-marker">{board[93]}</span>
          </td>
          <td className="93">
            <span className="cell-number">93</span>
            <span className="cell-marker">{board[92]}</span>
          </td>
          <td className="92">
            <span className="cell-number">92</span>
            <span className="cell-marker">{board[91]}</span>
          </td>
          <td className="91">
            <span className="cell-number">91</span>
            <span className="cell-marker">{board[90]}</span>
          </td>
        </tr>

        <tr>
          <td className="81">
            <span className="cell-number">81</span>
            <span className="cell-marker">{board[80]}</span>
          </td>
          <td className="82">
            <span className="cell-number">82</span>
            <span className="cell-marker">{board[81]}</span>
          </td>
          <td className="83">
            <span className="cell-number">83</span>
            <span className="cell-marker">{board[82]}</span>
          </td>
          <td className="84">
            <span className="cell-number">84</span>
            <span className="cell-marker">{board[83]}</span>
          </td>
          <td className="85">
            <span className="cell-number">85</span>
            <span className="cell-marker">{board[84]}</span>
          </td>
          <td className="86">
            <span className="cell-number">86</span>
            <span className="cell-marker">{board[85]}</span>
          </td>
          <td className="87">
            <span className="cell-number">87</span>
            <span className="cell-marker">{board[86]}</span>
          </td>
          <td className="88">
            <span className="cell-number">88</span>
            <span className="cell-marker">{board[87]}</span>
          </td>
          <td className="89">
            <span className="cell-number">89</span>
            <span className="cell-marker">{board[88]}</span>
          </td>
          <td className="90">
            <span className="cell-number">90</span>
            <span className="cell-marker">{board[89]}</span>
          </td>
        </tr>

        <tr>
          <td className="80">
            <span className="cell-number">80</span>
            <span className="cell-marker">{board[79]}</span>
          </td>
          <td className="79">
            <span className="cell-number">79</span>
            <span className="cell-marker">{board[78]}</span>
          </td>
          <td className="78">
            <span className="cell-number">78</span>
            <span className="cell-marker">{board[77]}</span>
          </td>
          <td className="77">
            <span className="cell-number">77</span>
            <span className="cell-marker">{board[76]}</span>
          </td>
          <td className="76">
            <span className="cell-number">76</span>
            <span className="cell-marker">{board[75]}</span>
          </td>
          <td className="75">
            <span className="cell-number">75</span>
            <span className="cell-marker">{board[74]}</span>
          </td>
          <td className="74">
            <span className="cell-number">74</span>
            <span className="cell-marker">{board[73]}</span>
          </td>
          <td className="73">
            <span className="cell-number">73</span>
            <span className="cell-marker">{board[72]}</span>
          </td>
          <td className="72">
            <span className="cell-number">72</span>
            <span className="cell-marker">{board[71]}</span>
          </td>
          <td className="71">
            <span className="cell-number">71</span>
            <span className="cell-marker">{board[70]}</span>
          </td>
        </tr>

        <tr>
          <td className="61">
            <span className="cell-number">61</span>
            <span className="cell-marker">{board[60]}</span>
          </td>
          <td className="62">
            <span className="cell-number">62</span>
            <span className="cell-marker">{board[61]}</span>
          </td>
          <td className="63">
            <span className="cell-number">63</span>
            <span className="cell-marker">{board[62]}</span>
          </td>
          <td className="64">
            <span className="cell-number">64</span>
            <span className="cell-marker">{board[63]}</span>
          </td>
          <td className="65">
            <span className="cell-number">65</span>
            <span className="cell-marker">{board[64]}</span>
          </td>
          <td className="66">
            <span className="cell-number">66</span>
            <span className="cell-marker">{board[65]}</span>
          </td>
          <td className="67">
            <span className="cell-number">67</span>
            <span className="cell-marker">{board[66]}</span>
          </td>
          <td className="68">
            <span className="cell-number">68</span>
            <span className="cell-marker">{board[67]}</span>
          </td>
          <td className="69">
            <span className="cell-number">69</span>
            <span className="cell-marker">{board[68]}</span>
          </td>
          <td className="70">
            <span className="cell-number">70</span>
            <span className="cell-marker">{board[69]}</span>
          </td>
        </tr>

        <tr>
          <td className="60">
            <span className="cell-number">60</span>
            <span className="cell-marker">{board[59]}</span>
          </td>
          <td className="59">
            <span className="cell-number">59</span>
            <span className="cell-marker">{board[58]}</span>
          </td>
          <td className="58">
            <span className="cell-number">58</span>
            <span className="cell-marker">{board[57]}</span>
          </td>
          <td className="57">
            <span className="cell-number">57</span>
            <span className="cell-marker">{board[56]}</span>
          </td>
          <td className="56">
            <span className="cell-number">56</span>
            <span className="cell-marker">{board[55]}</span>
          </td>
          <td className="55">
            <span className="cell-number">55</span>
            <span className="cell-marker">{board[54]}</span>
          </td>
          <td className="54">
            <span className="cell-number">54</span>
            <span className="cell-marker">{board[53]}</span>
          </td>
          <td className="53">
            <span className="cell-number">53</span>
            <span className="cell-marker">{board[52]}</span>
          </td>
          <td className="52">
            <span className="cell-number">52</span>
            <span className="cell-marker">{board[51]}</span>
          </td>
          <td className="51">
            <span className="cell-number">51</span>
            <span className="cell-marker">{board[50]}</span>
          </td>
        </tr>

        <tr>
          <td className="41">
            <span className="cell-number">41</span>
            <span className="cell-marker">{board[40]}</span>
          </td>
          <td className="42">
            <span className="cell-number">42</span>
            <span className="cell-marker">{board[41]}</span>
          </td>
          <td className="43">
            <span className="cell-number">43</span>
            <span className="cell-marker">{board[42]}</span>
          </td>
          <td className="44">
            <span className="cell-number">44</span>
            <span className="cell-marker">{board[43]}</span>
          </td>
          <td className="45">
            <span className="cell-number">45</span>
            <span className="cell-marker">{board[44]}</span>
          </td>
          <td className="46">
            <span className="cell-number">46</span>
            <span className="cell-marker">{board[45]}</span>
          </td>
          <td className="47">
            <span className="cell-number">47</span>
            <span className="cell-marker">{board[46]}</span>
          </td>
          <td className="48">
            <span className="cell-number">48</span>
            <span className="cell-marker">{board[47]}</span>
          </td>
          <td className="49">
            <span className="cell-number">49</span>
            <span className="cell-marker">{board[48]}</span>
          </td>
          <td className="50">
            <span className="cell-number">50</span>
            <span className="cell-marker">{board[49]}</span>
          </td>
        </tr>

        <tr>
          <td className="40">
            <span className="cell-number">40</span>
            <span className="cell-marker">{board[39]}</span>
          </td>
          <td className="39">
            <span className="cell-number">39</span>
            <span className="cell-marker">{board[38]}</span>
          </td>
          <td className="38">
            <span className="cell-number">38</span>
            <span className="cell-marker">{board[37]}</span>
          </td>
          <td className="37">
            <span className="cell-number">37</span>
            <span className="cell-marker">{board[36]}</span>
          </td>
          <td className="36">
            <span className="cell-number">36</span>
            <span className="cell-marker">{board[35]}</span>
          </td>
          <td className="35">
            <span className="cell-number">35</span>
            <span className="cell-marker">{board[34]}</span>
          </td>
          <td className="34">
            <span className="cell-number">34</span>
            <span className="cell-marker">{board[33]}</span>
          </td>
          <td className="33">
            <span className="cell-number">33</span>
            <span className="cell-marker">{board[32]}</span>
          </td>
          <td className="32">
            <span className="cell-number">32</span>
            <span className="cell-marker">{board[31]}</span>
          </td>
          <td className="31">
            <span className="cell-number">31</span>
            <span className="cell-marker">{board[30]}</span>
          </td>
        </tr>

        <tr>
          <td className="21">
            <span className="cell-number">21</span>
            <span className="cell-marker">{board[20]}</span>
          </td>
          <td className="22">
            <span className="cell-number">22</span>
            <span className="cell-marker">{board[21]}</span>
          </td>
          <td className="23">
            <span className="cell-number">23</span>
            <span className="cell-marker">{board[22]}</span>
          </td>
          <td className="24">
            <span className="cell-number">24</span>
            <span className="cell-marker">{board[23]}</span>
          </td>
          <td className="25">
            <span className="cell-number">25</span>
            <span className="cell-marker">{board[24]}</span>
          </td>
          <td className="26">
            <span className="cell-number">26</span>
            <span className="cell-marker">{board[25]}</span>
          </td>
          <td className="27">
            <span className="cell-number">27</span>
            <span className="cell-marker">{board[26]}</span>
          </td>
          <td className="28">
            <span className="cell-number">28</span>
            <span className="cell-marker">{board[27]}</span>
          </td>
          <td className="29">
            <span className="cell-number">29</span>
            <span className="cell-marker">{board[28]}</span>
          </td>
          <td className="30">
            <span className="cell-number">30</span>
            <span className="cell-marker">{board[29]}</span>
          </td>
        </tr>

        <tr>
          <td className="20">
            <span className="cell-number">20</span>
            <span className="cell-marker">{board[19]}</span>
          </td>
          <td className="19">
            <span className="cell-number">19</span>
            <span className="cell-marker">{board[18]}</span>
          </td>
          <td className="18">
            <span className="cell-number">18</span>
            <span className="cell-marker">{board[17]}</span>
          </td>
          <td className="17">
            <span className="cell-number">17</span>
            <span className="cell-marker">{board[16]}</span>
          </td>
          <td className="16">
            <span className="cell-number">16</span>
            <span className="cell-marker">{board[15]}</span>
          </td>
          <td className="15">
            <span className="cell-number">15</span>
            <span className="cell-marker">{board[14]}</span>
          </td>
          <td className="14">
            <span className="cell-number">14</span>
            <span className="cell-marker">{board[13]}</span>
          </td>
          <td className="13">
            <span className="cell-number">13</span>
            <span className="cell-marker">{board[12]}</span>
          </td>
          <td className="12">
            <span className="cell-number">12</span>
            <span className="cell-marker">{board[11]}</span>
          </td>
          <td className="11">
            <span className="cell-number">11</span>
            <span className="cell-marker">{board[10]}</span>
          </td>
        </tr>

        <tr>
          <td className="1">
            <span className="cell-number">1</span>
            <span className="cell-marker">{board[0]}</span>
          </td>
          <td className="2">
            <span className="cell-number">2</span>
            <span className="cell-marker">{board[1]}</span>
          </td>
          <td className="3">
            <span className="cell-number">3</span>
            <span className="cell-marker">{board[2]}</span>
          </td>
          <td className="4">
            <span className="cell-number">4</span>
            <span className="cell-marker">{board[3]}</span>
          </td>
          <td className="5">
            <span className="cell-number">5</span>
            <span className="cell-marker">{board[4]}</span>
          </td>
          <td className="6">
            <span className="cell-number">6</span>
            <span className="cell-marker">{board[5]}</span>
          </td>
          <td className="7">
            <span className="cell-number">7</span>
            <span className="cell-marker">{board[6]}</span>
          </td>
          <td className="8">
            <span className="cell-number">8</span>
            <span className="cell-marker">{board[7]}</span>
          </td>
          <td className="9">
            <span className="cell-number">9</span>
            <span className="cell-marker">{board[8]}</span>
          </td>
          <td className="10">
            <span className="cell-number">10</span>
            <span className="cell-marker">{board[9]}</span>
          </td>
        </tr>
      </table>
      <br></br>
      <br></br>
      <button className="restartBtn" onClick={restartGame}>
        Restart Game
      </button>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
