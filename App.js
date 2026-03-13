import './App.css';
import { useState } from 'react';

function App() {
  // function unlockpin(checkpinnumber, checkpinlengthresult, pin) {
  //     let password = [4, 8, 2, 0, 1, 3, 2, 5, 2, 3];
  //     let correctdigits = 0;

  //     if (checkpinnumber === false || checkpinlengthresult === false) {
  //         console.log("Invalid pin");
  //         return "Number of correct digits: " + correctdigits;
  //     }

  //     for (let i = 0; i < pin.length; i++) {
  //         if (pin[i] === password[i]) {
  //             correctdigits += 1;
  //             console.log(pin[i]);
  //         } else {
  //             console.log("*");
  //         }
  //     }

  //     return "Number of correct digits: " + correctdigits;
  // }
  // function checkeachpins(pin) {
  //     let ispinvalid = true;

  //     for (let i = 0; i < pin.length; i++) {
  //         if (pin[i] !== 0 && pin[i] !== 1 && pin[i] !== 2 && pin[i] !== 3 && pin[i] !== 4 && pin[i] !== 5 && pin[i] !== 6 && pin[i] !== 7 && pin[i] !== 8 && pin[i] !== 9) {
  //             ispinvalid = false;
  //             console.log("One of the pins is not a number");
  //         }
  //     }

  //     return ispinvalid;
  // }
  // function checkpinlength(pin) {
  //     let pinlengthvalid = true;

  //     if (pin.length !== 10) {
  //         pinlengthvalid = false;
  //         console.log("Pin length is not 10");
  //     }

  //     return pinlengthvalid;
  // }

  // // let myheaders = ["Name", "Age"];
  // // let namedata= ["John Doe", "Jane Smith", "Bob Johnson", "Alice Williams", "Charlie Brown"];
  // // let agedata = [30, 50, 20, 40, 60];

  // // initial value of val is "test"
  // // setVal is a function that can be used to update the value of val
  // const [val, setVal] = useState("test");
  // const [result, setResult] = useState(0);
  // console.log(val);

  // function clickedstart(e){
  //   e.preventDefault();
  //   let clickarray = [];
  //   for (let i = 0; i < val.length; i++) {
  //       clickarray.push(parseInt(val[i]));
  //       let resulttest = unlockpin(checkeachpins(clickarray), checkpinlength(clickarray), clickarray);
  //       setResult(resulttest);
  //   }
  // }

//   let title = "unlock pin";
//   const [val, setVal] = useState(100);
//   const [timer, setTimer] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   const subtval = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//     }

//     setVal(prev => (prev > 0 ? prev - 1 : 0));
//   }

//   useEffect(() => {
//     let interval;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setTimer(prev => prev + 1);
//       }, 1000); 
//     }

//     return () => clearInterval(interval);
//   }, [isRunning]);

//   useEffect(() => {
//     if (val <= 0) {
//       setIsRunning(false);
//     }
//   }, [val]);

//   return (
//     <div className='App'>
//         <img src="/bvvsgwynyqo81.jpg" alt="Myzxczxc" />
//         <h1>{title}</h1>
//         <h3>Timer: {timer}</h3>
//         <div className='myform'>
//         <button onClick={() => {
//           setTimer(0);
//           setVal(100);
//           setIsRunning(false);
//         }}>
//           Reset
//         </button>
//           <h4>{val}</h4>
//           <button className="formbutton" onClick={subtval}>-</button>
//         </div>
//     </div>
//   );
// }

  let title = "Plus Ultra"
  const [val, setVal] = useState("");
  let temparr = [];
  let tempstr = "";
  let tempbool = true;

  const solve = () => {
    temparr = [];
    tempstr = "";
    tempbool = true;

    for (let i = 0; i < val.length; i++) {
      let curchar = val[i];
      if (i === 0 && (curchar === "+" || curchar === "*" || curchar === "/")) {
        alert("Invalid Expression");
        setVal("");
        tempbool = false;
      }
      if (curchar !== "+" && curchar !== "-" && curchar !== "*" && curchar !== "/") {
        tempstr += curchar;
      } else {
        temparr.push(parseInt(tempstr));
        temparr.push(curchar);
        tempstr = "";
      }

      if (i === val.length - 1 && (curchar !== "+" && curchar !== "-" && curchar !== "*" && curchar !== "/")) {
        temparr.push(parseInt(tempstr));
      }

      if (i === val.length - 1 && (curchar === "+" || curchar === "-" || curchar === "*" || curchar === "/")) {
        alert("Invalid Expression");
        setVal("");
        tempbool = false;
      }
    }

    let result = temparr[0];
    for (let i = 1; i < temparr.length; i += 2) {
      const operator = temparr[i];
      const nextNum = temparr[i + 1];
      if (operator === "+") {
        result += nextNum;
      } else if (operator === "-") {
        result -= nextNum;
      } else if (operator === "*") {
        result *= nextNum;
      } else if (operator === "/") {
        if (nextNum === 0) {
          alert("Division by zero");
          setVal("");
          return;
        }
        result /= nextNum;
      }
    }

    setVal(result.toString());
  }

  return (
    <div className ='App'>
      <img src="/bvvsgwynyqo81.jpg" alt="Myzxczxc" />
      <h1>{title}</h1>
      <div className='myform'>
        <input value={val} />
        <table>
          <tr>
            <td onClick={() => setVal(val + "7")}>7</td>
            <td onClick={() => setVal(val + "8")}>8</td>
            <td onClick={() => setVal(val + "9")}>9</td>
            <td onClick={() => setVal(val + "+")}>+</td>
          </tr>
          <tr>
            <td onClick={() => setVal(val + "4")}>4</td>
            <td onClick={() => setVal(val + "5")}>5</td>
            <td onClick={() => setVal(val + "6")}>6</td>
            <td onClick={() => setVal(val + "-")}>-</td>
          </tr>
          <tr>
            <td onClick={() => setVal(val + "1")}>1</td>
            <td onClick={() => setVal(val + "2")}>2</td>
            <td onClick={() => setVal(val + "3")}>3</td>
            <td onClick={() => setVal(val + "*")}>*</td>
          </tr>
          <tr>
            <td onClick={() => setVal("")}>Clear</td>
            <td onClick={() => setVal(val + "0")}>0</td>
            <td onClick={() => setVal(val + "/")}>/</td>
            <td onClick={solve}>=</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
