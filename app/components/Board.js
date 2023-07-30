"use client"
import { useState } from "react";
import Tile from "./Tile"


const Board = () => {
   
    
    const board = []
  
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const tileKey = `${i}-${j}`
        let isDark = (i+j)%2
        board.push(<Tile key={tileKey} isDark={isDark} i={i} j={j}/>);
      }
    }
  
    return <div className="grid grid-cols-8 border-yellow-500 border-2 h-full aspect-square">{board}</div>;
  };
  
  export default Board
//green
    //white?hsla(0,0%,100%,.08)
    //black bg= #262421