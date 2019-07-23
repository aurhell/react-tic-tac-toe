function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}

function getPosition(i) {
    switch (i) {
        case 0:
            return 'x:1 - y:1';
        case 1:
            return 'x:2 - y:1';
        case 2:
            return 'x:3 - y:1';
        case 3:
            return 'x:1 - y:2';
        case 4:
            return 'x:2 - y:2';
        case 5:
            return 'x:3 - y:2';
        case 6:
            return 'x:1 - y:3';
        case 7:
            return 'x:2 - y:3';
        case 8:
            return 'x:3 - y:3';
        default:
        return;     
    }
}

export default {calculateWinner, getPosition};