import React from 'react';
import Square from './Square';

class Board extends React.Component {
    renderBoard() {
      const board = [];
      let cellCounter = 0;

      for (let i = 0; i < 3; i++) {
        const columns = [];
        for (let j = 0; j < 3; j++) {
          columns.push(this.renderSquare(cellCounter++));
        }
        board.push(<div key={i} className="board-row">{columns}</div>);
      }

      return board;
    }

    renderSquare(i) {
      return <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        className={this.props.squares[i]==='X' ? 'square--red' : 'square--green'}
      />;
    }
  
    render() {
      return (
        <div>
          {
            this.renderBoard()
          }
        </div>
      );
    }
  }

export default Board;