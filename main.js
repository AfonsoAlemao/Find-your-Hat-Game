const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(array_2d) {
    this.array_2d = array_2d
    this.row = 0
    this.col = 0
  }
  print(){
    for(let i = 0; i < this.array_2d.length; i++) {
        console.log(this.array_2d[i].join(''))
    }
  }
  detect_end_Game(move) {
    switch(move) {
      case 'r':
        this.col +=1
        if(this.array_2d[this.row][this.col] === 'O') {
          return 1
        } else if (this.array_2d[this.row][this.col] === '^') {
          return 2
        } else {
          return 0;
        }
        
      case 'l':
        this.col -=1
        if(this.array_2d[this.row][this.col] === 'O') {
          return 1
        } else if (this.array_2d[this.row][this.col] === '^') {
          return 2
        } else {
          return 0;
        }
      case 'd':
        this.row +=1
        if(this.array_2d[this.row][this.col] === 'O') {
          return 1
        } else if (this.array_2d[this.row][this.col] === '^') {
          return 2
        } else {
          return 0;
        }
      case 'u':
        this.row -=1
        if(this.array_2d[this.row][this.col] === 'O') {
          return 1
        } else if (this.array_2d[this.row][this.col] === '^') {
          return 2
        } else {
          return 0;
        }
      default:
        console.log('Wrong loggin')
    }
  }
  change_Field(move) {
    this.array_2d[this.row][this.col] = '*'
  }

}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

let end = 0
let move = 'r'
myField.print()

while(end === 0) {
    move = prompt('Whats your next move?').toString();
    end = myField.detect_end_Game(move);
    myField.change_Field(move);
    myField.print()
}

if(end === 1) {
  console.log('you lost!')
} else {
  console.log('You win')
}

