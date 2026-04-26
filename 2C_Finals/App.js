import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState([
    'Unselected', 'Unselected', 
    'Unselected', 'Unselected', 
    'Unselected', 'Unselected', 
    'Unselected', 'Unselected', 
    'Unselected', 'Unselected'
  ]);

  function handleClick(pos) {
    let newBoard = board.slice();
    if(board[pos] == "Unselected")
    {
      newBoard[pos] = "Selected";
    } else {
      newBoard[pos] = "Unselected"
    }
    setBoard(newBoard);
  }

  return (
    <div className="App">
      <h1>E-Commerce Store</h1>
      <p>Select product/s before proceeding to checkout.</p>
      <table>
        <tr>
          <td onClick={() => handleClick(0)}>
            {board[0]}
          </td>
          <td onClick={() => handleClick(1)}>
            {board[1]}
          </td>
        </tr>
        <tr>
          <td onClick={() => handleClick(2)}>
            {board[2]}
          </td>
          <td onClick={() => handleClick(3)}>
            {board[3]}
          </td>
        </tr>
        <tr>
          <td onClick={() => handleClick(4)}>
          {board[4]}
          </td>
          <td onClick={() => handleClick(5)}>
          {board[5]}
          </td>
        </tr>
        <tr>
          <td onClick={() => handleClick(6)}>
          {board[6]}
          </td>
          <td onClick={() => handleClick(7)}>
          {board[7]}
          </td>
        </tr>
        <tr>
          <td onClick={() => handleClick(8)}>
          {board[8]}
          </td>
          <td onClick={() => handleClick(9)}>
          {board[9]}
          </td>
        </tr>
      </table>
      <br/>
      {/* when clicked, alert will appear showing the products the user selected, then reset the selection */}
      <button onClick={() => cartPopup()}>Submit</button>
    </div>
  );
}

export default App;
