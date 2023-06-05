"use client"

import Tile from "./Tile"

const xAxis=['a','b','c','d','e','f','g','h']
const yAxis=['8','7','6','5','4','3','2','1']
//images
const piece ={
  image:'',
  x:0,
  y:0
}

const pieces =[]
//PUSHING PAWNS
//black pawns
for(let i =0; i<8; i++){
  pieces.push({image:'/white-pawn.svg', x:i, y:6,id:`bp-${i}`})
}

//white pawns
for(let i =0; i<8; i++){
  pieces.push({image:'/black-pawn.svg', x:i, y:1, id:`wp-${i}`})
}
//const result = pieces.find(({ id }) => id.includes("bp") );
//const result = pieces.map(({ id }) => id.includes("bp") );


//console.log(result); 


//PUSHING HORSES
pieces.push({image:'/black-horse.svg', x:1, y:0, id:'wh-1'})
pieces.push({image:'/black-horse.svg', x:6, y:0, id:'wh-2'})
pieces.push({image:'/white-horse.svg', x:1, y:7, id:'bh-1'})
pieces.push({image:'/white-horse.svg', x:6, y:7, id:'bh-2'})

//PUSHING BISHOPS
pieces.push({image:'/black-bishop.svg', x:2, y:0, id:'wb-1'})
pieces.push({image:'/black-bishop.svg', x:5, y:0, id:'wb-2'})
pieces.push({image:'/white-bishop.svg', x:2, y:7, id:'bb-1'})
pieces.push({image:'/white-bishop.svg', x:5, y:7, id:'bb-2'})

//PUSHING CASTLES
pieces.push({image:'/black-rook.svg', x:0, y:0, id:'wr-1'})
pieces.push({image:'/black-rook.svg', x:7, y:0 ,id:'wr-2'})
pieces.push({image:'/white-rook.svg', x:7, y:7, id:'br-1'})
pieces.push({image:'/white-rook.svg', x:0, y:7, id:'br-2'})

//PUSHING QUEENS
pieces.push({image:'/black-queen.svg', x:3, y:0, id:'wq-1'})
pieces.push({image:'/white-queen.svg', x:3, y:7, id:'bq-2'})

//PUSHING KINGS
pieces.push({image:'/black-king.svg', x:4, y:0, id:'wk'})
pieces.push({image:'/white-king.svg', x:4, y:7, id:'bk'})

//The above is intentially the initial state of all the pieces

const Board = () => {
  let board = [];
  
  //define board
  for (let j=0; j < yAxis.length; j++) {//y
    for (let i=0; i < xAxis.length; i++){//x-axis
      
      const number = j+i +2;
      let img = undefined
      let id=''
      let pos=`(${i+":" + j})`//in terms of x and y e.g(0:0)
     
      let tileNumber=xAxis[i]+yAxis[j];//in terms of how it appears on board e.g A8 or G4
  
    
    
      pieces.forEach(p=>{
        if(p.x ===i && p.y ===j){
           img = p.image
        id=p.id
        }
        })
   board.push(<Tile data-x={i} data-y={j} x={i} y={j}  number={number} key={yAxis[j]+xAxis[i]} img={img} id={id} pos={pos} tileNumber={tileNumber}/>)

   }
  }
  function grabPiece(e){
    const element = e.target
    if (element.classList.contains('chess-piece')){
      console.log(element)
    }

    
    
    }

  return (
    <div onMouseDown={grabPiece} className=' bg-[hsla(0,0%,100%,.65)] w-[500px] aspect-square grid grid-cols-8'>
     {board}
    </div>
  )
}

export default Board