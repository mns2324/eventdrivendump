import { useState } from 'react';
import './App.css';

function App() {
  let title = 'Tic Tac Toe';
  let cells = document.querySelectorAll('td');
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [turn, setTurn] = useState(1);

  function handleReset() {
    for (let i = 0; i < cells.length; i++) {
      cells[i].classList.remove('draw');
      cells[i].classList.remove('win');
    }
    setBoard(['', '', '', '', '', '', '', '', '']);
    setTurn(1);
  }

  function handleClick(pos) {
    if (board[pos] !== '' || winner !== 'game on') {
      return;
    }
    // redraw the board
    let newBoard = board.slice();
    newBoard[pos] = mark;
    setBoard(newBoard);
    setTurn(turn + 1);
  }

  function checkWinner(board) {
    // all winning combinations
    let winlines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // check each line if they have the same mark -> win
    for (let i = 0; i < winlines.length; i++) {
      let a = winlines[i][0];
      let b = winlines[i][1];
      let c = winlines[i][2];
      if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
        cells[a].classList.add('win');
        cells[b].classList.add('win');
        cells[c].classList.add('win');
        return board[a]; // return the mark from that spot
      }
    }

    // check if board is all filled -> draw
    let filled = 0;
    for (let pos = 0; pos < board.length; pos++) {
      if (board[pos] !== '') {
        filled++;
      }
    }
    if (filled === 9) {
      for (let i = 0; i < cells.length; i++) {
        cells[i].classList.add('draw');
      }
      return 'draw';
    }

    return 'game on';
  }

  // x goes first
  let mark = '';
  if (turn % 2 == 0) {
    mark = 'O';
  } else {
    mark = 'X';
  }

  let status = '';
  let winner = checkWinner(board);

  if (winner === 'draw') {
    status = "It's a draw!";
  } else if (winner !== 'game on') {
    status = winner + ' wins!';
  } else {
    status = mark + "'s turn";
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <h3>{status}</h3>
      <div className="myform">
        <table>
          <tr>
            <td onClick={() => handleClick(0)}>{board[0]}</td>
            <td onClick={() => handleClick(1)}>{board[1]}</td>
            <td onClick={() => handleClick(2)}>{board[2]}</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(3)}>{board[3]}</td>
            <td onClick={() => handleClick(4)}>{board[4]}</td>
            <td onClick={() => handleClick(5)}>{board[5]}</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(6)}>{board[6]}</td>
            <td onClick={() => handleClick(7)}>{board[7]}</td>
            <td onClick={() => handleClick(8)}>{board[8]}</td>
          </tr>
        </table>
        <button onClick={() => handleReset()}>New Game</button>
      </div>
    </div>
  );
}

export default App;
