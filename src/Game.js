import React from 'react';
import Board from './Board';
import utils from './utils';

const MAX_NUMBER = 9;

class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null)
        }],
        stepNumber: 0,
        xIsNext: true
      };
    }

    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();

      if (utils.calculateWinner(squares) || squares[i]) {
        return;
      }
      
      squares[i] = this.state.xIsNext ? 'X': 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
          position: utils.getPosition(i),
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = utils.calculateWinner(current.squares);

      const moves = history.map((step, move) => {
        const desc = move ?
          `Go to move #${move}` :
          'Go to game start';
        return (
          <li key={move}>
            <button
              onClick={() => this.jumpTo(move)}
              className={ this.state.stepNumber === move ? 'bold' : null }
            >
              {desc} {step.position}
            </button>
          </li>
        );
      });
      
      let status;

      if (winner) {
        status = `${winner} wins !`;
      } 
      else {
        status = this.state.stepNumber === MAX_NUMBER
          ? `It's a draw...`
          : `Next player: ${this.state.xIsNext ? 'X': 'O'}`;
      }

      return (
        <div className="game grid-container">          
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
          </div>
          <div className="game-history">
            <ul>{moves}</ul>
          </div>
        </div>
      );
    }
  }

export default Game;